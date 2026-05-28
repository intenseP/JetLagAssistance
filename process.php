<?php

// Check if form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Get form values
    $name = $_POST["name"];
    $email = $_POST["email"];

    // Display the values
    echo "<h2>Form Submitted</h2>";
    echo "Name: " . htmlspecialchars($name) . "<br>";
    echo "Email: " . htmlspecialchars($email);
}
?>