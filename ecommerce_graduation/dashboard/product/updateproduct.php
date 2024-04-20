<?php
include('../functions.php');
$item_id = $_GET['id'];
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['submit'])) {
        $name = "'" . $_POST['name'] . "'";
        $price = $_POST['price'];
        $old_price = $_POST['old_price'];
        $description = "'" . $_POST['description'] . "'";
        $weight = "'" . $_POST['weight'] . "'";
        $dimensions = "'" . $_POST['dimensions'] . "'";
        $name_ar = "'" . $_POST['name_ar'] . "'";
        $description_ar = "'" . $_POST['description_ar'] . "'";
        $color_id = "'" . $_POST['color_id'] . "'";
        $image =  $_FILES['image'];
        $image2 =  $_FILES['image2'];
        $image3 =  $_FILES['image3'];
        $image4 =  $_FILES['image4'];
        $category_id = "'" . $_POST['category_id'] . "'";

        $product->updateProduct($item_id, $name, $price, $old_price, $description, $weight, $dimensions, $name_ar, $description_ar, $color_id, $image, $image2, $image3, $image4, $category_id);
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
                                foreach ($product->getData() as $productt) :
                                    if ($productt['id'] == $item_id) :

                                ?>
                                        <div class="theform2">

                                            <form method="post" enctype="multipart/form-data">
                                                <p>Title</p>
                                                <input class="form-control" type="text" name="name" value="<?php echo $productt['name']; ?>">
                                                <p>Arabic Title </p>
                                                <input class="form-control" type="text" name="name_ar" value="<?php echo $productt['name_ar']; ?>">
                                                <p>Price</p>
                                                <input class="form-control" type="text" name="price" value="<?php echo $productt['price']; ?>">
                                                <p>Old Price </p>
                                                <input class="form-control" type="text" name="old_price" value="<?php echo $productt['old_price']; ?>">

                                                <p>Description</p>
                                                <textarea class="form-control" name="description"><?php echo $productt['description']; ?></textarea>
                                                <p>Arabic Description </p>
                                                <textarea class="form-control" name="description_ar"><?php echo $productt['description_ar']; ?></textarea>
                                                <span class="d-flex">
                                                    <img src="../../uploads/products/<?php echo $productt["image"] ?>" width="50px" alt="">
                                                    <img src="../../uploads/products/<?php echo $productt["image2"] ?>" width="50px" alt="">
                                                    <img src="../../uploads/products/<?php echo $productt["image3"] ?>" width="50px" alt="">
                                                    <img src="../../uploads/products/<?php echo $productt["image4"] ?>" width="50px" alt="">

                                                </span>

                                                <input type="file" name="image" class="form-control">
                                                <input type="file" name="image2" class="form-control">
                                                <input type="file" name="image3" class="form-control">
                                                <input type="file" name="image4" class="form-control">
                                                <br>
                                                <p>Weight</p>

                                                <div class="input-group">
                                                    <input type="text" placeholder="Weight" name="weight" class="form-control" value="<?php echo $productt['weight']; ?>">
                                                </div>
                                                <br>
                                                <p>Dimensions</p>

                                                <div class="input-group">
                                                    <input type="text" placeholder="Dimensions" name="dimensions" class="form-control" value="<?php echo $productt['dimensions']; ?>">
                                                </div>
                                                <br>

                                                <p> Category </p>

                                                <div class="input-group">

                                                    <br>
                                                    <select name="category_id" id="" class="form-control">
                                                        <?php
                                                        foreach ($Categories->getData() as $category) :
                                                            if ($category['id'] == $productt['category_id']) {
                                                        ?>
                                                                <option value="<?php echo $category['id']; ?>" selected><?php echo $category['title']; ?> </option>
                                                            <?php
                                                            } else {
                                                            ?>
                                                                <option value="<?php echo $category['id']; ?>"><?php echo $category['title']; ?></option>
                                                            <?php
                                                            }
                                                            ?>
                                                        <?php
                                                        endforeach;
                                                        ?>
                                                    </select>

                                                </div>
                                                <p> Color </p>

                                                <div class="input-group">

                                                    <br>
                                                    <select name="color_id" id="" class="form-control">
                                                        <?php
                                                        foreach ($Colors->getData() as $color) :
                                                            if ($color['id'] == $productt['color_id']) {
                                                        ?>
                                                                <option value="<?php echo $color['id']; ?>" selected><?php echo $color['title']; ?> </option>
                                                            <?php
                                                            } else {
                                                            ?>
                                                                <option value="<?php echo $color['id']; ?>"><?php echo $color['title']; ?></option>
                                                            <?php
                                                            }
                                                            ?>
                                                        <?php
                                                        endforeach;
                                                        ?>
                                                    </select>

                                                </div>

                                                <button type="submit" name="submit" class="addtotable">Submit</button>
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