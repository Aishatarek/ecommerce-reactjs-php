<?php
ob_start();
include('dashboard/functions.php');

if ($_SERVER['REQUEST_METHOD'] == "POST") {
	if (isset($_POST['submit'])) {
		$email ="'". $_POST['email']."'";
		$password ="'". md5($_POST['password'])."'";
		$Admins->signIn($email, $password);
	}
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>E_Commerce</title>
    <meta content="" name="description">
    <meta content="" name="keywords">

    <!-- Favicons -->
    <!-- <link href="dashboard/assets/img/favicon.png" rel="icon"> -->
    <link href="dashboard/assets/img/apple-touch-icon.png" rel="apple-touch-icon">

    <!-- Google Fonts -->
    <link href="dashboard/https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

    <!-- Vendor CSS Files -->
    <link href="dashboard/assets/vendor/aos/aos.css" rel="stylesheet">
    <link href="dashboard/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="dashboard/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
    <link href="dashboard/assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
    <link href="dashboard/assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
    <link href="dashboard/assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

    <!-- Template Main CSS File -->
    <link href="dashboard/assets/css/style.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />

</head>

<body>


	<div class="thesignin">
		<div class="container-fluid page-body-wrapper">
			<!-- partial:partials/_sidebar.html -->
			<div class="main-panel maindashboard" style="width: 100%; min-height:100vh;">
				<div class="content-wrapper">
					<div class="row">
						<div class="col-12 grid-margin">
							<div class="card theform2"  style="width: 80%; text-align: center; margin:80px auto ;">
								<div class="card-body" >
									<div class="theform2">

										<form action="" method="POST">
											<h3>تسجيل الدخول</h3>
											<input type="email" class="form-control" placeholder="Email" name="email" required>
											<br>
											<input type="password" class="form-control" placeholder="Password" name="password" required>
											<br>
											<input type="submit" name="submit" class="btn btn-main addtotable ">
										</form>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>


    <!-- Vendor JS Files -->
    <script src="dashboard/assets/vendor/aos/aos.js"></script>
    <script src="dashboard/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="dashboard/assets/vendor/glightbox/js/glightbox.min.js"></script>
    <script src="dashboard/assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
    <script src="dashboard/assets/vendor/swiper/swiper-bundle.min.js"></script>
    <script src="dashboard/assets/vendor/php-email-form/validate.js"></script>

    <!-- Template Main JS File -->
    <script src="dashboard/assets/js/main.js"></script>

</body>

</html>