<?php
include('../functions.php');
if (!isset($_SESSION['admin_id'])) {
    header("Location: ../../index.php");
}
$item_id = $_GET['id'];
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['submit'])) {
        $password = "'" . md5($_POST['password']) . "'";
        $cpassword = "'" . md5($_POST['cpassword']) . "'";
        if ($password == $cpassword) {
            $Admins->updateAdminPassword($item_id, $password);
            echo "<script>alert('password changed')</script>";
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
                                    <?php
                                    foreach ($Admins->getData() as $admin) :
                                        if ($admin['id'] == $item_id) :
                                    ?>
                                            <form action="" method="POST" class="login-email" enctype="multipart/form-data">
                                                <p> New Password</p>
                                                <input type="password" class="form-control" placeholder="Password" name="password" required>
                                                <p> Confirm Password </p>
                                                <input type="password" class="form-control" placeholder="Confirm Password" name="cpassword" required>

                                                <button name="submit" class="addtotable">Edit</button>
                                            </form>
                                    <?php
                                        endif;
                                    endforeach;
                                    ?>

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