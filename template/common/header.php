<!DOCTYPE html>
<!--[if IE 8 ]><html lang="hr" class="no-js ie8"> <![endif]-->
<!--[if IE 9 ]><html lang="hr" class="no-js ie9"> <![endif]-->
<html lang="hr">

<head>
	<meta charset="utf-8">
	<title>Site title</title>	

	<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600;700&display=swap" rel="stylesheet">
	<link id="style" href="<?php echo Site::url(); ?>/css/style.css" rel="stylesheet" type="text/css">
	<!-- <link rel="stylesheet" href="<?php echo Site::url(); ?>css/768.css" type="text/css"  media="only screen and (min-width: 768px)"> -->

	<link rel="shortcut icon" href="<?php echo Site::url(); ?>/img/icons/favicon.ico">
	<meta name="description" content="">
	<meta name="keywords" content="">
	<meta name="format-detection" content="telephone=no">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<!--[if lt IE 9]>
		<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
	<meta property="og:site_name" content="">
	<meta property="og:title" content="">
	<meta property="og:image" content="">
	<meta property="og:description" content="">

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<script defer src="<?php echo Site::url(); ?>/js/script.js"></script>

</head>
<?php include_once('img/svg/sprite.svg');?>

<body class="<?php echo Site::$bodyClass; ?>">

	<!-- Header -->
	<header>
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="header-wrapper">
						<div class="logo">
							<img src = "img/logo.png">
						</div>
							<div class="navigation">
								<nav>
									<ul>
										<li><a href="#">HOME</a></li>
										<li><a href="#">ABOUT</a></li>
										<li><a href="#">WORK</a></li>
										<li><a href="#">BLOG</a></li>
										<li><a href="#">CONTACT</a></li>
									</ul>
								</nav>
							</div>
									
							<div class="nav-icon">
								<span></span>
								<span></span>
								<span></span>
							</div>

					
					</div>
				</div>
			</div>

		</div>  
	</header>
	<!-- /Header -->