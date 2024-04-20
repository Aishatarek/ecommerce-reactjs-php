<?php
include('../functions.php');
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['submit'])) {
        $img =  $_FILES['img'];
        $title = "'" . $_POST['title'] . "'";
        $title_ar = "'" . $_POST['title_ar'] . "'";
        $Categories->addCategories($img, $title, $title_ar);
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
                                <form action="" method="POST" class="login-email" enctype="multipart/form-data">
                                    <p style="font-size: 2rem; font-weight: 800;"> Add Category</p>

                                    <br>

                                    <p>Photo </p>
                                    <div class="input-group">
                                        <input type="file" name="img" required class="form-control">
                                    </div>

                                    <p>Title </p>
                                    <div class="input-group">
                                        <input type="text" name="title" required class="form-control">
                                    </div>
                                    <br>
                                    <p>Arabic Title </p>
                                    <div class="input-group">
                                        <input type="text" name="title_ar" required class="form-control">
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <button name="submit" class="btn addtotable">Add Category </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<?php
include('../footer.php');
?>