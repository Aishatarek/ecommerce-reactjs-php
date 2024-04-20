<?php
ob_start();
include('../functions.php');
if (!isset($_SESSION['admin_id'])) {
    header("Location: ../../index.php");
}
if ($_SERVER['REQUEST_METHOD'] == "POST") {
    if (isset($_POST['submit'])) {
        $f_name = "'" . $_POST['f_name'] . "'";
        $s_name = "'" . $_POST['s_name'] . "'";
        $email = "'" . $_POST['email'] . "'";
        $password = "'" . md5($_POST['password']) . "'";
        $cpassword = "'" . md5($_POST['cpassword']) . "'";
        $address = "'" . $_POST['address'] . "'";
        if ($password == $cpassword) {
            $Users->addUser($f_name, $s_name,  $email, $password,  $address);
        } else {
            echo "<script>alert('Password Not Matched.')</script>";
        }
    }
}
include("../header.php");
?>
<div class="container-scroller">
    <nav class="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">

        <div class="navbar-menu-wrapper d-flex align-items-stretch">
            <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                <span class="mdi mdi-menu"></span>
            </button>


            <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                <span class="mdi mdi-menu"></span>
            </button>
        </div>
    </nav>

    <!-- partial -->
    <div class="container-fluid page-body-wrapper">
        <!-- partial:partials/_sidebar.html -->
        <?php include("../theSideNav.php"); ?>
        <div class="main-panel maindashboard">
            <div class="content-wrapper">
                <div class="row">
                    <div class="col-12 grid-margin">
                        <div class="card">
                            <div class="card-body">
                                <div class="theform">

                                    <form action="" method="POST" enctype="multipart/form-data">
                                        <h3>Add User </h3>
                                        <input type="text" class="form-control mb-2" placeholder="First Name " name="f_name" required>
                                        <input type="text" class="form-control mb-2" placeholder="Last Name " name="s_name" required>
                                        <input type="email" class="form-control mb-2" placeholder="Email" name="email">
                                        <input type="password" class="form-control mb-2" placeholder="Password" name="password" required>
                                        <input type="password" class="form-control mb-2" placeholder="Confirm Password " name="cpassword" required>
                                        <textarea name="address" class="form-control mb-2" placeholder="Address" rows="10"></textarea>
                                        <button name="submit" class="addtotable">Add User </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>


</div>
<?php
include("../footer.php");
?>