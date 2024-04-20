<?php
include('../functions.php');
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['submit'])) {
        $title = "'" . $_POST['title'] . "'";
        $description = "'" . $_POST['description'] . "'";
        $title_ar = "'" . $_POST['title_ar'] . "'";
        $description_ar = "'" . $_POST['description_ar'] . "'";
        $photo =  $_FILES['photo'];
        $Blog->addBlog($photo, $title, $description, $title_ar, $description_ar);
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
                                    <p style="font-size: 2rem; font-weight: 800;">Add Post</p>
                                    <div class="input-group">
                                        <input type="text" placeholder="Title" name="title" required class="form-control">
                                    </div>
                                    <br>

                                    <div class="input-group">
                                        <textarea class="form-control" name="description" placeholder="Description " cols="30" rows="10"></textarea>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <input type="text" placeholder="Arabic Title " name="title_ar" required class="form-control">
                                    </div>
                                    <br>

                                    <div class="input-group">
                                        <textarea class="form-control" name="description_ar" placeholder="Arabic Description " cols="30" rows="10"></textarea>
                                    </div>
                                    <br>

                                    <label for="">Add Photo</label>
                                    <div class="input-group">
                                        <input type="file" name="photo" required class="form-control">
                                    </div>
                                    <div class="input-group">
                                        <button name="submit" class="btn addtotable">Add</button>
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