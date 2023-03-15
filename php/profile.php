<?php
// Connect to MongoDB
$mongoClient = new MongoDB\Client('mongodb://localhost:27017');

// Select the database and collection
$database = $mongoClient->selectDatabase('mydatabase');
$collection = $database->selectCollection('users');


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  
  // Get form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $contact = $_POST['contact'];
  $dob = $_POST['dob'];
  

  
  
  $result = $collection->updateOne(
    ['email' => $email],
    ['$set' => ['name' => $name, 'contact' => $contact, 'dob' => $dob]]
  );
  
  
  header('Content-Type: application/json');
  if ($result->getModifiedCount() == 1) {
    echo json_encode(array('status' => 'success', 'message' => 'Profile updated successfully!'));
  } else {
    echo json_encode(array('status' => 'error', 'message' => 'An error occurred while updating the profile.'));
  }
}
