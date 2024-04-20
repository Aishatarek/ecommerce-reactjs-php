<?php
header("Access-Control-Allow-Origin: *"); //add this CORS header to enable any domain to send HTTP requests to these endpoints:
$host = "localhost";
$user = "root";
$password = "";
$dbname = "graduation_ecommerce";
$id = '';

$con = mysqli_connect($host, $user, $password, $dbname);

$method = $_SERVER['REQUEST_METHOD'];


if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}

switch ($method) {
    case 'GET':
        if (isset($_GET["id"])) {
            $id = $_GET['id'];
        }
        $sql = "select * from categories" . ($id ? " where id=$id" : '');
        break;
}

// run SQL statement
$result = mysqli_query($con, $sql);

// die if SQL statement failed
if (!$result) {
    http_response_code(404);
    die(mysqli_error($con));
}

if ($method == 'GET') {
    if (!$id) {
        $employeeArr = array();
        while ($row = $result->fetch_assoc()) {
            array_push($employeeArr, $row);
        }
        echo json_encode($employeeArr);
    } else {
        while ($row = mysqli_fetch_assoc($result)) {
            $output = $row;
        }
        echo json_encode($output);
    }
} elseif ($method == 'POST') {
    echo json_encode($result);
} else {

    echo mysqli_affected_rows($con);
}

$con->close();
