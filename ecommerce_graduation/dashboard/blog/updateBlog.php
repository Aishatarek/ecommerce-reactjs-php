<?php
include('../functions.php');
$item_id = $_GET['id'];
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['submit'])) {
        $title = "'" . $_POST['title'] . "'";
        $description = "'" . $_POST['description'] . "'";
        $title_ar = "'" . $_POST['title_ar'] . "'";
        $description_ar = "'" . $_POST['description_ar'] . "'";
        $photo = $_FILES['photo'];
        $Blog->updateBlog($item_id, $photo, $title, $description, $title_ar, $description_ar);
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

                                <?php
                                foreach ($Blog->getData() as $Blogt) :
                                    if ($Blogt['id'] == $item_id) :

                                ?>
                                        <div class="theform2">

                                            <form method="post" enctype="multipart/form-data">
                                                <p>Title  </p>
                                                <input class="form-control" type="text" name="title" value="<?php echo $Blogt['title']; ?>">
                                                <p>Description </p>
                                                <textarea class="form-control" name="description" id="" cols="30" rows="10"><?php echo $Blogt['description']; ?></textarea>
                                                <p>Arabic Title  </p>
                                                <input class="form-control" type="text" name="title_ar" value="<?php echo $Blogt['title_ar']; ?>">
                                                <p>Arabic Description</p>
                                                <textarea class="form-control" name="description_ar" id="" cols="30" rows="10"><?php echo $Blogt['description_ar']; ?></textarea>

                                                <p>Photo</p>
                                                <img src="../../uploads/blogs/<?php echo $Blogt['photo']; ?>" alt="" width="100px">
                                                <br>
                                                <input type="file" name="photo" class="form-control">
                                                <br><br>
                                                <button type="submit" name="submit" class="addtotable">submit</button>
                                            </form>
                                        </div>

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
<?php
include('../footer.php');
?>