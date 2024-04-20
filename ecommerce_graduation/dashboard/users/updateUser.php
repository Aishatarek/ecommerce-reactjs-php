<?php
include('../functions.php');
if (!isset($_SESSION['admin_id'])) {
    header("Location: ../../index.php");
}
$item_id = $_GET['id'];
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['submit'])) {
        $f_name = "'" . $_POST['f_name'] . "'";
        $s_name = "'" . $_POST['s_name'] . "'";
        $email = "'" . $_POST['email'] . "'";
        $address = "'" . $_POST['address'] . "'";
        $Users->updateUser($item_id, $f_name, $s_name,  $email,  $address);
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
                                    foreach ($Users->getData() as $user) :
                                        if ($user['id'] == $item_id) :
                                    ?>
                                            <form action="" method="POST" class="login-email" enctype="multipart/form-data">
                                                <p>First Name</p>
                                                <input type="text" class="form-control mb-2" placeholder="First Name" name="f_name" required value="<?php echo $user['f_name'] ?>">
                                                <p>Last Name </p>
                                                <input type="text" class="form-control mb-2" placeholder="Last Name" name="s_name" required value="<?php echo $user['s_name'] ?>">

                                                <p>Email</p>
                                                <input type="email" class="form-control mb-2" placeholder="Email" name="email" value="<?php echo $user['email'] ?>">

                                                <p>Address </p>
                                                <textarea name="address" class="form-control mb-2" placeholder="Address" rows="10"><?php echo $user['address'] ?></textarea>

                                                <button name="submit" class="addtotable">تعديل</button>
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