<?php 
session_start();
session_destroy();
if (isset($_COOKIE['admin_id'])) {
    unset($_COOKIE['admin_id']);

    setcookie('admin_id', '', time() - 3600, '/'); // empty value and old timestamp

}
header("Location: ../index.php");

?>