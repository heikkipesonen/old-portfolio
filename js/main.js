$(function(){
	/*

			this is by no means the show-off of my skillz as a web developer..
			this just was the easiest way to quickly implement new "carousel" to show content...
	*/

	var slider = $('#slider');
	var indicator = $('#indicator');		
	var cvScroll = new IScroll('#cv-scroll');

	indicator.find('[data-target="center"]').addClass('selected');

	$('#wrapper').on('click','.sliderButton',function(){
		showPage($(this).attr('data-target'));
	});



	// simple swipe mechanism, when user swipes over container element, the page is changed accordingly
	var startEvent = false;
	$('#wrapper').on('mousedown touchstart',function(e){
		startEvent = e;
	});

	$('#wrapper').on('mouseup touchend',function(e){
		if (e.timeStamp - startEvent.timeStamp > 100 && e.timeStamp - startEvent.timeStamp < 500){
			var diff = e.pageX - startEvent.pageX;

			if (diff > 200){
				if (slider.hasClass('right')){
					showPage('center');
				} else if (slider.hasClass('center')){
					showPage('left');
				}

			} else if (diff < -200){
				
				if (slider.hasClass('left')){
					showPage('center');
				} else if (slider.hasClass('center')){
					showPage('right');
				}
			}
		}
	});


	function showPage(name){
		slider.removeClass('center').removeClass('left').removeClass('right');
		slider.addClass(name);
		indicator.find('.selected').removeClass('selected');
		indicator.find('[data-target="'+name+'"]').addClass('selected');		
	}
});