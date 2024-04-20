<?php
header("Access-Control-Allow-Origin: *"); // Add this CORS header to enable any domain to send HTTP requests to these endpoints

$host = "localhost";
$user = "root";
$password = "";
$dbname = "graduation_ecommerce";

// Connect to the database
$con = mysqli_connect($host, $user, $password, $dbname);

// Check the connection
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}

$method = $_SERVER['REQUEST_METHOD'];
if ($method == 'POST' && isset($_POST["email"]) && isset($_POST["password"]) && isset($_POST["f_name"]) && isset($_POST["s_name"]) && isset($_POST["address"])) {
    $email = $_POST["email"];
    $password = md5($_POST["password"]);
    $f_name = $_POST["f_name"];
    $s_name = $_POST["s_name"];
    $address = $_POST["address"];


    $sql_check_email = "SELECT * FROM users  WHERE email='$email'";
    $result_check_email = mysqli_query($con, $sql_check_email);
    if ($result_check_email->num_rows > 0) {
        http_response_code(409); // Conflict
        echo json_encode(["error" => "Email already exists"]);
    } else {
        $sql_register = "INSERT INTO users(f_name, s_name, email, password, address) VALUES ('$f_name', '$s_name','$email', '$password', '$address')";
        if (mysqli_query($con, $sql_register)) {
            $output = ["f_name" => $f_name, "s_name" => $s_name, "email" => $email, "address" => $address];
            echo json_encode($output);
        } else {
            http_response_code(500);
            echo json_encode(["error" => "Registration failed"]);
        }
    }
}

elseif ($method == 'POST' && isset($_POST["email"]) && isset($_POST["password"])) {
    $email = $_POST["email"];
    $password = md5($_POST["password"]);
    $sql = "SELECT * FROM users  WHERE email='$email' AND password='$password'";
    $result = mysqli_query($con, $sql);
    if ($result->num_rows > 0) {

        $output = mysqli_fetch_assoc($result);
        echo json_encode($output);
    } else {

        http_response_code(404);
        echo json_encode(["error" => "User not found"]);
    }
}



$con->close();
