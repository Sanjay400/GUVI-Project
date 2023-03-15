<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $contact = $_POST['contact'];
  $dob = $_POST['dob'];
  header('Content-Type: application/json');
  echo json_encode(array('status' => 'success', 'message' => 'Profile updated successfully!'));
}
?>
