<?php
include('../functions.php');
$item_id = $_GET['id'];
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['edit_submit'])) {
        $title = "'" . $_POST['title'] . "'";
        $title_ar = "'" . $_POST['title_ar'] . "'";
        $img =  $_FILES['img'];
        $Categories->updateCategories($item_id, $img, $title, $title_ar);
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
                                foreach ($Categories->getData() as $categories) :
                                    if ($categories['id'] == $item_id) :

                                ?>
                                        <div class="theform2">

                                            <form method="post" enctype="multipart/form-data">


                                                <p>Title </p>

                                                <input type="text" name="title" class="form-control" value="<?php echo $categories["title"] ?>">
                                                <br>

                                                <p>Arabic Title  </p>

                                                <input type="text" name="title_ar" class="form-control" value="<?php echo $categories["title_ar"] ?>">
                                                <br>
                                                <p>Photo </p>
                                                <p><a href="../../uploads/categories/<?php echo $categories["img"] ?>" target="_blank"><img src="../../uploads/categories/<?php echo $categories["img"] ?>" alt="" width="200px"></a> </p>

                                                <input type="file" name="img" class="form-control">


                                                <button type="submit" name="edit_submit" class="addtotable">Submit</button>
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