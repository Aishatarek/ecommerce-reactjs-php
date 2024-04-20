<?php
include('../functions.php');
if ($_SERVER['REQUEST_METHOD'] == "POST") {
    if (isset($_POST['deleteItem_product'])) {
        $Orders->deleteOrders($_POST['item_id']);
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

                                <table class=" table ">
                                    <tr>

                                        <th>products</th>
                                        <th>name</th>
                                        <th>email</th>
                                        <th>phone</th>
                                        <th>city</th>
                                        <th>country</th>
                                        <th>address</th>

                                        <th>-</th>
                                    </tr>
                                    <?php
                                    foreach ($Orders->getData() as $order) :
                                    ?>
                                        <tr>
                                            <td>
                                                <p style="width: 320px; text-wrap: wrap;">
                                                <?php echo $order["products"] ?>

                                                </p>
                                            </td>
                                            <td>
                                                <?php echo $order["name"] ?>
                                            </td>
                                            <td>
                                                <?php echo $order["email"] ?>
                                            </td>
                                            <td>
                                                <?php echo $order["phone"] ?>
                                            </td>
                                            <td><?php echo $order['city'] ?></td>

                                            <td>
                                                <?php echo $order["country"] ?>
                                            </td>
                                            <td><?php echo $order['address'] ?></td>
                                            <td>
                                                <form method="post">

                                                    <input type="hidden" value="<?php echo $order["id"] ?>" name="item_id">
                                                    <button name="deleteItem_product" class="btn btn-outline-danger" type="submit"><i class="fas fa-trash"></i></button>

                                                </form>

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