<?php
	function startsWith($haystack, $needle)
	{
	    return !strncmp($haystack, $needle, strlen($needle));
	}
	
	function addCss($dir){
		$filenames = scandir($dir);

		foreach ($filenames as $key => $filename) {
			if ($filename != '.' && $filename != '..' && !startsWith($filename, '.')){
				echo '<link rel="stylesheet" type="text/css" href="'.$dir.'/'.$filename.'">';
			}
		}
	}

	function addScript($dir){
		$filenames = scandir($dir);

		foreach ($filenames as $key => $filename) {
			if ($filename != '.' && $filename != '..' && !startsWith($filename, '.')){
				echo '<script type="text/javascript" src="'.$dir.'/'.$filename.'"></script>';
			}
		}
	}

	function addCssTag($filename){
		echo '<link rel="stylesheet" type="text/css" href="'.$filename.'">';
	}

	function addScriptTag($filename){
		echo '<script type="text/javascript" src="'.$filename.'"></script>';
	}
?>