/* jQuery anchor link */
$(function () {
	$('a[href^="#"]').on('click', function (event) {
		var href = $(this).attr('href'),
			target = $(href == '#' || href == '' ? 'html' : href),
			position = target.offset().top;
		$('body, html').animate({scrollTop: position}, 250, 'swing');
		event.preventDefault();
	});



	


	$(function () {
		var $element = $('#iz-img1');
		setInterval(function () {
			$element.fadeIn(1000, function () {
				$element.fadeOut(1500, function () {
					$element.delay(15000).fadeIn(1500)
				});
			});
		}, 5000);
	});



});
