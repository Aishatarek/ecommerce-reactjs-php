<?php
ob_start();
include('../functions.php');
if (!isset($_SESSION['admin_id'])) {
    header("Location: ../../index.php");
}
if ($_SERVER['REQUEST_METHOD'] == "POST") {
    if (isset($_POST['submit'])) {
        $name = "'" . $_POST['name'] . "'";
        $email = "'" . $_POST['email'] . "'";
        $password = "'" . md5($_POST['password']) . "'";
        $cpassword = "'" . md5($_POST['cpassword']) . "'";
        $phone = "'" . $_POST['phone']. "'";
        if ($password == $cpassword) {
            $Admins->addAdmin($name, $email, $password, $phone);
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
                                        <h3> Add Admin</h3>
                                        <input type="text" class="form-control" placeholder="Name" name="name" required>
                                        <br>
                                        <input type="email"  class="form-control" placeholder="Email" name="email" required>
                                        <br>

                                        <input type="password"  class="form-control" placeholder="Password " name="password" required>
                                        <br>
                                        
                                        <input type="password"  class="form-control" placeholder="Confirm Password" name="cpassword" required>
                                        <br>
                                       
                                        <input type="text"  class="form-control" name="phone" placeholder="Phone">
                                        <br>
                                       
                                        <button name="submit" class="addtotable">Add Admin </button>
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