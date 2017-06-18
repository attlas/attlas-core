<?php

  $servername = "db";
  $username = "attlas";
  $password = "pEdz3cW8P5C2pkqh";

  // Create connection
  $conn = mysqli_connect($servername, $username, $password);

  // Check connection
  if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }
  echo "Connected successfully";
  phpinfo();
?>