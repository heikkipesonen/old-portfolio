<?php
include('collector.php');

addCss('css');
addScript('src');
addScript('js');
?>

<html>
	<head>
		<meta charset=utf-8>
		<title>Heikki Pesonen - portfolio</title>
	</head>
	<body>
		<div id="wrapper">


			<div id="indicator">
				<div data-target="left" class="item sliderButton"></div>
				<div data-target="center" class="item sliderButton"></div>
				<div data-target="right" class="item sliderButton"></div>
			</div>


			<div id="slider" class="right">

	

<?php
	include('cv.html');
	include('main.html');
	include('portfolio.html');

?>

			</div>
			<div id="overlay" class="hidden"></div>
			<div id="fullviewer" class="hidden">

			</div>
		</div>
	</body>
</html>