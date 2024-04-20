<?php
include('../functions.php');
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['submit'])) {
        $title = "'" . $_POST['title'] . "'";
        $price = $_POST['price'];
        $old_price = $_POST['old_price'];
        $description = "'" . $_POST['description'] . "'";
        $weight = "'" . $_POST['weight'] . "'";
        $dimensions = "'" . $_POST['dimensions'] . "'";
        $title_ar = "'" . $_POST['title_ar'] . "'";
        $description_ar = "'" . $_POST['description_ar'] . "'";
        $color_id = "'" . $_POST['color_id'] . "'";
        $image =  $_FILES['image'];
        $image2 =  $_FILES['image2'];
        $image3 =  $_FILES['image3'];
        $image4 =  $_FILES['image4'];
        $category_id = "'" . $_POST['category_id'] . "'";

        $product->addProduct($title, $price, $old_price, $description, $weight, $dimensions, $title_ar, $description_ar, $color_id, $image, $image2, $image3, $image4, $category_id);
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
                                    <p style="font-size: 2rem; font-weight: 800;">Add Product </p>
                                    <div class="input-group">
                                        <input type="text" placeholder="Title" name="title" required class="form-control">
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <input type="text" placeholder="Arabic Title" name="title_ar" required class="form-control">
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <input type="text" placeholder="Price" name="price" required class="form-control">
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <input type="text" placeholder="Old Price" name="old_price" class="form-control">
                                    </div>
                                    <br>

                                    <div class="input-group">
                                        <textarea name="description" placeholder="Description" class="form-control"></textarea>
                                    </div>
                                    <br>

                                    <div class="input-group">
                                        <textarea name="description_ar" placeholder="Arabic Description" class="form-control"></textarea>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <input type="text" placeholder="Weight" name="weight" class="form-control">
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <input type="text" placeholder="Dimensions" name="dimensions" class="form-control">
                                    </div>
                                    
                                    <br>
                                    <div class="input-group">
                                        <select name="category_id" class="form-control">
                                            <option value="0" readonly>Category</option>
                                            <?php
                                            foreach ($Categories->getData() as $category) :
                                            ?>
                                                <option value="<?php echo $category['id']; ?>"><?php echo $category['title']; ?></option>

                                            <?php
                                            endforeach;
                                            ?>
                                        </select>
                                    </div>
                                    <br>
                                    <div class="input-group">
                                        <select name="color_id" class="form-control">
                                            <option value="0" readonly>Color</option>
                                            <?php
                                            foreach ($Colors->getData() as $color) :
                                            ?>
                                                <option value="<?php echo $color['id']; ?>"><?php echo $color['title']; ?></option>

                                            <?php
                                            endforeach;
                                            ?>
                                        </select>
                                    </div>

                                    <br>
                                    <label>First Image</label>
                                    <div class="input-group">
                                        <input type="file" name="image" required class="form-control">
                                    </div>
                                    <br>
                                    <label>Second Image</label>

                                    <div class="input-group">
                                        <input type="file" name="image2" required class="form-control">
                                    </div>
                                    <br>
                                    <label>Third Image</label>

                                    <div class="input-group">
                                        <input type="file" name="image3" required class="form-control">
                                    </div>
                                    <br>
                                    <label>Fourth Image</label>

                                    <div class="input-group">
                                        <input type="file" name="image4" class="form-control">
                                    </div>
                                    <br>



                                    <div class="input-group">
                                        <button name="submit" class="btn addtotable">Add Product</button>
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