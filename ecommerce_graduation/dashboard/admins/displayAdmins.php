<?php
ob_start();
include('../functions.php');
if (!isset($_SESSION['admin_id'])) {
    header("Location: ../../index.php");
}
if ($_SERVER['REQUEST_METHOD'] == "POST") {
    if (isset($_POST['deleteItem'])) {
        $Admins->deleteAdmin($_POST['item_id']);
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
                                <a href="addAdmin.php" class="addtotable"> Add Admin</a>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Phone</th>
                                            <th>-</th>

                                            <th>-</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php
                                        foreach ($Admins->getData() as $admin) :
                                        ?>
                                            <tr>
                                                <td><?php echo $admin["name"] ?></td>
                                                <td><?php echo $admin["email"] ?></td>
                                                <td><?php echo $admin["phone"] ?></td>
                                                <td>
                                                    <a href="<?php printf('%s?id=%s', 'updatePassword.php',  $admin['id']); ?>">
                                                        <button class="btn btn-outline-info"> Changge Password </button>
                                                    </a>
                                                </td>
                                                <td>
                                                    <div class="d-flex justify-content-around">
                                                        <form method="post">
                                                            <input type="hidden" value="<?php echo $admin["id"] ?>" name="item_id">
                                                            <button name="deleteItem" class="btn btn-outline-danger" type="submit"><i class="fa-solid fa-trash"></i></button>
                                                        </form>
                                                        <a href="<?php printf('%s?id=%s', 'updateAdmin.php',  $admin['id']); ?>">
                                                            <button class="btn btn-outline-info"><i class="fa fa-edit"></i></button>
                                                        </a>

                                                    </div>
                                                </td>
                                            </tr>
                                        <?php
                                        endforeach;
                                        ?>
                                    </tbody>
                                </table>
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