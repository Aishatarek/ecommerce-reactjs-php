<?php
include('../functions.php');
if ($_SERVER['REQUEST_METHOD'] == "POST") {
    if (isset($_POST['deleteItem_product'])) {
        $product->deleteProduct($_POST['item_id']);
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
                                <div class="d-flex flex-wrap justify-content-between align-items-center">
                                    <a href="addProduct.php" class="addtotable">Add Product </a>
                                    <a href="../colors/displayColors.php" class="addtotable">Add Color </a>
                                    <a href="../categories/displayCategories.php" class="addtotable">Add Color </a>

                                </div>
                                <table class=" table ">
                                    <tr>
                                        <th>Title</th>
                                        <th>Arabic Title </th>
                                        <th>Price</th>
                                        <th>Old Price </th>
                                        <th>Descripton</th>
                                        <th>Arabic Description </th>
                                        <th>Weight</th>
                                        <th>Dimensions</th>
                                        <th>Color</th>
                                        <th>Category</th>
                                        <th>-</th>
                                        <th> First Image</th>
                                        <th> Second Image</th>
                                        <th> Third Image</th>
                                        <th> Fourth Image</th>

                                    </tr>
                                    <?php
                                    foreach ($product->getData() as $productt) :
                                    ?>
                                        <tr>
                                            <td>
                                                <p><?php echo $productt["name"] ?></p>
                                            </td>
                                            <td>
                                                <p><?php echo $productt["name_ar"] ?></p>
                                            </td>
                                            <td>
                                                <p>LE <?php echo $productt["price"] ?></p>
                                            </td>
                                            <td>
                                                <p>LE <?php echo $productt["old_price"] ?></p>
                                            </td>
                                            <td>
                                                <p style="width: 200px; text-wrap: wrap;"><?php echo $productt["description"] ?></p>
                                            </td>
                                            <td>
                                                <p style="width: 200px; text-wrap: wrap;"><?php echo $productt["description_ar"];  ?></p>
                                            </td>

                                            <td>
                                                <p><?php echo $productt["weight"] ?></p>
                                            </td>
                                            <td>
                                                <p><?php echo $productt["dimensions"] ?></p>
                                            </td>
                                            <td>
                                                <p><?php echo $productt["color_id"] ?></p>
                                            </td>
                                            <td>
                                                <p><?php echo $productt["category_id"] ?></p>
                                            </td>

                                            <td>
                                                <form method="post">

                                                    <input type="hidden" value="<?php echo $productt["id"] ?>" name="item_id">
                                                    <button name="deleteItem_product" class="btn btn-outline-danger" type="submit"><i class="fas fa-trash"></i></button>

                                                </form>
                                                <a href="<?php printf('%s?id=%s', 'updateproduct.php',  $productt['id']); ?>">
                                                    <button class="btn btn-outline-success"><i class="fas fa-edit"></i></button>
                                                </a>


                                            </td>


                                            <td>
                                                <a href="../../uploads/products/<?php echo $productt["image"] ?>" target="_blank">
                                                    <img src="../../uploads/products/<?php echo $productt["image"] ?>" width="50px" alt="">
                                                </a>
                                            </td>
                                            <td>
                                                <a href="../../uploads/products/<?php echo $productt["image2"] ?>" target="_blank">
                                                    <img src="../../uploads/products/<?php echo $productt["image2"] ?>" width="50px" alt="">
                                                </a>
                                            </td>
                                            <td>
                                                <a href="../../uploads/products/<?php echo $productt["image3"] ?>" target="_blank">
                                                    <img src="../../uploads/products/<?php echo $productt["image3"] ?>" width="50px" alt="">
                                                </a>
                                            </td>
                                            <td>
                                                <a href="../../uploads/products/<?php echo $productt["image4"] ?>" target="_blank">
                                                    <img src="../../uploads/products/<?php echo $productt["image4"] ?>" width="50px" alt="">
                                                </a>
                                            </td>


                                        </tr>
                                    <?php
                                    endforeach;
                                    ?>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <!-- main-panel ends -->
</div>
<?php
include("../footer.php");
?>