$(function(){
	/*


		hmh...


			just the fastest way to create this layout....... nothing fancy here.
	*/

	var iscrollOptions = {
		mouseWheel:true,
		scrollbars:true,
		hideScrollbar:true,
		
	}

	var slider = $('#slider'),
		indicator = $('#indicator'),
		cvScroll = new IScroll('#cv-scroll',iscrollOptions),
		pfScroll = new IScroll('#pf-scroll',iscrollOptions),
		fullViewScroll = false;

	
		// starting position for bottom page indicator circles..
	indicator.find('[data-target="center"]').addClass('selected');

	// all .sliderButtons should work the same way... so...
	$('#wrapper').on('click','.sliderButton',function(){
		// data-target attribute gives the class name for the slider to use (positions defined in css)
		showPage($(this).attr('data-target'));
	});



	// simple swipe mechanism, when user swipes over container element, the page is changed accordingly
	var startEvent = false;
	$('#wrapper').on('mousedown touchstart',function(e){
		startEvent = e;
	});


	$('#wrapper').on('mouseup touchend',function(e){
		// when enough time has passed and distance is over set limit, then we can assume the swipe
		// event has occurred and start thinking about the appropriate action.
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


	// this just actually adds a class to the slider element, positions defined in css
	// so it will animate itself into the position with css transforms...
	function showPage(name){
		// clear all page classes from the slider
		slider.removeClass('center').removeClass('left').removeClass('right');
		slider.addClass(name); // show the new page

		// setup the indicators
		indicator.find('.selected').removeClass('selected');
		indicator.find('[data-target="'+name+'"]').addClass('selected');		
	}


	$('ul#list').on('click','li',function(){
		if ($(this).find('.fullview').length > 0){
			showFull( $(this).find('.fullview') );
		}
	});




	var fullviewer = $('#fullviewer'),
		overlay = $('#overlay');

	overlay.on('click',hideViewer);
	fullviewer.on('click','.close',hideViewer);

	function hideViewer(){		
		overlay.addClass('hidden');
		fullviewer.addClass('hidden');
		fullViewScroll.destroy();
	}

	function showFull(item){
		fullviewer.html(item.clone());	
		fullviewer.removeClass('hidden');
		overlay.removeClass('hidden');
		
		fullViewScroll = new IScroll('#fullviewer',iscrollOptions);
	}
});