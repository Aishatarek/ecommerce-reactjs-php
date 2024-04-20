<?php
include('../functions.php');

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
        $sql = "select * from bot" . ($id ? " where id=$id" : '');
        break;
    case 'POST':
        $queries = $_POST["queries"];

        $sql = "SELECT replies FROM bot WHERE queries LIKE '%$queries%'";

        break;
}

// run SQL statement
$result = mysqli_query($con, $sql);

// die if SQL statement failed
if (!$result) {
    http_response_code(404);
    die(mysqli_error($con));
}

$replies = array();
while ($row = mysqli_fetch_assoc($result)) {
    $replies[] = $row['replies'];
}

echo json_encode($replies);

$con->close();
?>
