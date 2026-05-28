<?php

// Check if form was submitted
if ($_SERVER["REQUEST_METHOD"] == "GET") {

    // Get form values
    $name = $_GET["name"];
    $email = $_GET["email"];

    // Display the values
    echo "<h2>Form Submitted</h2>";
    echo "Name: " . htmlspecialchars($name) . "<br>";
    echo "Email: " . htmlspecialchars($email);
}
else{
    echo "get shit on";

}
?>
