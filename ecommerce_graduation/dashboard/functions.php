<?php
require('connection.php');
require('users/users.php');
require('admins/admins.php');
require('product/product.php');
require('colors/colors.php');
require('categories/categories.php');
require('blog/blog.php');
require('orders/orders.php');
require('reviews/reviews.php');
require('bot/bot.php');


if (isset($_COOKIE['admin_id']) ) {
    $_SESSION['admin_id'] = $_COOKIE['admin_id'];
}


$db=new DBController();
$Users=new Users($db);
$Admins=new Admins($db);
$product=new Product($db);
$Categories=new Categories($db);
$Colors=new Colors($db);
$Blog=new Blog($db);
$Orders=new Orders($db);
$Reviews=new Reviews($db);
$Bot=new Bot($db);





// $Students=new Students($db);

