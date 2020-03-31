/* jQuery anchor link */
$(function () {
	$('a[href^="#"]').on('click', function (event) {
		var href = $(this).attr('href'),
			target = $(href == '#' || href == '' ? 'html' : href),
			position = target.offset().top;
		$('body, html').animate({scrollTop: position}, 250, 'swing');
		event.preventDefault();
	});



	


	$('.izquierda').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		autoplay: true,
		
	});


});
