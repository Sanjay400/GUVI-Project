$(document).ready(function() {
	// Retrieve name and email from register.html
	$.ajax({
		url: "register.php",
		type: "POST",
		dataType: "json",
		success: function(data) {
			$("#name").text(data.name);
			$("#email").text(data.email);
		},
		error: function(jqXHR, textStatus, errorThrown) {
			console.log("Error retrieving name and email: " + errorThrown);
		}
	});

	// Calculate age based on date of birth entered by user
	$("#dob").change(function() {
		var dob = new Date($(this).val());
		var ageInMs = Date.now() - dob.getTime();
		var ageDate = new Date(ageInMs);
		var age = Math.abs(ageDate.getUTCFullYear() - 1970);
		$("#age").val(age);
	});

	// Update profile
	$("#update-btn").click(function() {
		// Retrieve form data
		var firstname = $("#firstname").val();
		var lastname = $("#lastname").val();
		var phone number = $("#phone number").val();
		var age = $("#age").val();
		var dob = $("#dob").val();

		// Send data to server to update profile
		$.ajax({
			url: "update-profile.php",
			type: "POST",
			data: {
				firstname : firstname,
				lastname :  lastname,
				phone : phone,
				age: age
				dob : dob,
			},
			success: function(response) {
				console.log("Profile updated: " + response);
				alert("Profile updated successfully!");
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log("Error updating profile: " + errorThrown);
				alert("Error updating profile. Please try again later.");
			}
		});
	});
});
