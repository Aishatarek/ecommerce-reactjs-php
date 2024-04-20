<?php
include('../functions.php');
if ($_SERVER['REQUEST_METHOD'] == "POST") {
    if (isset($_POST['deleteItem_product'])) {
        $Categories->deleteCategories($_POST['item_id']);
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
                                    <a href="addCategories.php" class="addtotable">Add  Category </a>
                                </div>
                                <table class=" table ">
                                    <tr>
                                        <th>Title  </th>
                                        <th>Arabic Title  </th>
                                        <th>Photo  </th>
                                        <th>-</th>
                                    </tr>
                                    <?php
                                    foreach ($Categories->getData() as $categories) :
                                    ?>
                                        <tr>

                                            <td>
                                                <p><?php echo $categories["title"] ?></p>
                                            </td>
                                            <td>
                                                <p><?php echo $categories["title_ar"] ?></p>
                                            </td>
                                            <td>
                                                <p><a href="../../uploads/categories/<?php echo $categories["img"] ?>" target="_blank"><img src="../../uploads/categories/<?php echo $categories["img"] ?>" alt="" ></a> </p>
                                            </td>
                                            <td>
                                                <form method="post">

                                                    <input type="hidden" value="<?php echo $categories["id"] ?>" name="item_id">
                                                    <button name="deleteItem_product" class="btn btn-outline-danger" type="submit"><i class="fas fa-trash"></i></button>

                                                </form>
                                                <a href="<?php printf('%s?id=%s', 'updateCategories.php',  $categories['id']); ?>">
                                                    <button class="btn btn-outline-success"><i class="fas fa-edit"></i></button>
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