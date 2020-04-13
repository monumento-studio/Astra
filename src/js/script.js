/* jQuery anchor link */
$(function () {
	$('a[href^="#"]').on('click', function (event) {
		var href = $(this).attr('href'),
			target = $(href == '#' || href == '' ? 'html' : href),
			position = target.offset().top;
		$('body, html').animate({scrollTop: position}, 250, 'swing');
		event.preventDefault();
	});

	$('.izquierda').slick({
		autoplay: true,
		fade: true,
		pauseOnHover: false,
		arrows: false,
		speed: 1800,
		autoplaySpeed: 5000,
		draggable: false,
	  });
	  $('.derecha').slick({
		autoplay: true,
		fade: true,
		pauseOnHover: false,
		arrows: false,
		speed: 1800,
		autoplaySpeed: 2500,
		draggable: false,
	  });


	  $("#first a").mouseenter(function () {
		$("#home .projects .element.bg").css("background-image", 'url("../img/bg-01.jpg")');
		$("#home .projects .element.bg ul li a").css('color', 'white');
		$("#home .projects .element.bg svg path").css('fill', 'white');
	});
	$("#first a").mouseleave(function () {
		$("#home .projects .element.bg").css('background-image', 'none');
		$("#home .projects .element.bg ul li a").css('color', 'black');
		$("#home .projects .element.bg svg path").css('fill', 'black');
	});

///////////////

$("#second a").mouseenter(function () {
	$("#home .projects .element.bg").css("background-image", 'url("../img/d-01.jpg")');
	$("#home .projects .element.bg ul li a").css('color', 'white');
	$("#home .projects .element.bg svg path").css('fill', 'white');
});
$("#second a").mouseleave(function () {
	$("#home .projects .element.bg").css('background-image', 'none');
	$("#home .projects .element.bg ul li a").css('color', 'black');
	$("#home .projects .element.bg svg path").css('fill', 'black');
});

///////////////

$("#third a").mouseenter(function () {
	$("#home .projects .element.bg").css("background-image", 'url("../img/i-01.jpg")');
	$("#home .projects .element.bg ul li a").css('color', 'white');
	$("#home .projects .element.bg svg path").css('fill', 'white');
});
$("#third a").mouseleave(function () {
	$("#home .projects .element.bg").css('background-image', 'none');
	$("#home .projects .element.bg ul li a").css('color', 'black');
	$("#home .projects .element.bg svg path").css('fill', 'black');
});
	
	


$(".hamburger").on("click", function(){
	$("#menu").toggleClass("clicked")
});





//1
$("#nosotros .element#1 .uno .arrow").on("click", function(){
	$("#nosotros .element#1 .dos").toggleClass("hei");
	$("#nosotros .element#1 .uno").toggleClass("arrow");
});
//2
$("#nosotros .element#2 .uno .arrow").on("click", function(){
	$("#nosotros .element#2 .dos").toggleClass("hei");
	$("#nosotros .element#2 .uno").toggleClass("arrow");
});
//3
$("#nosotros .element#3 .uno .arrow").on("click", function(){
	$("#nosotros .element#3 .dos").toggleClass("hei");
	$("#nosotros .element#3 .uno").toggleClass("arrow");
});
//4
$("#nosotros .element#4 .uno .arrow").on("click", function(){
	$("#nosotros .element#4 .dos").toggleClass("hei");
	$("#nosotros .element#4 .uno").toggleClass("arrow");
});
//5
$("#nosotros .element#5 .uno .arrow").on("click", function(){
	$("#nosotros .element#5 .dos").toggleClass("hei");
	$("#nosotros .element#5 .uno").toggleClass("arrow");
});
//6
$("#nosotros .element#6 .uno .arrow").on("click", function(){
	$("#nosotros .element#6 .dos").toggleClass("hei");
	$("#nosotros .element#6 .uno").toggleClass("arrow");
});
//7
$("#nosotros .element#7 .uno .arrow").on("click", function(){
	$("#nosotros .element#7 .dos").toggleClass("hei");
	$("#nosotros .element#7 .uno").toggleClass("arrow");
});
//8
$("#nosotros .element#8 .uno .arrow").on("click", function(){
	$("#nosotros .element#8 .dos").toggleClass("hei");
	$("#nosotros .element#8 .uno").toggleClass("arrow");
});
//9
$("#nosotros .element#9 .uno .arrow").on("click", function(){
	$("#nosotros .element#9 .dos").toggleClass("hei");
	$("#nosotros .element#9 .uno").toggleClass("arrow");
});
//10
$("#nosotros .element#10 .uno .arrow").on("click", function(){
	$("#nosotros .element#10 .dos").toggleClass("hei");
	$("#nosotros .element#10 .uno").toggleClass("arrow");
});
//11
$("#nosotros .element#11 .uno .arrow").on("click", function(){
	$("#nosotros .element#11 .dos").toggleClass("hei");
	$("#nosotros .element#11 .uno").toggleClass("arrow");
});
//12
$("#nosotros .element#12 .uno .arrow").on("click", function(){
	$("#nosotros .element#12 .dos").toggleClass("hei");
	$("#nosotros .element#12 .uno").toggleClass("arrow");
});












if (window.matchMedia('(max-width: 750px)').matches)
{
	$("#proyectos .proyectos .half #1").css("background-image", 'url("../img/bg-03.jpg")');
	$("#proyectos .proyectos .half #2").css("background-image", 'url("../img/d-02.jpg")');
	$("#proyectos .proyectos .half #3").css("background-image", 'url("../img/i-01.jpg")');
	$("#proyectos .proyectos .half #4").css("background-image", 'url("../img/i-02.jpg")');

}else{
	$("#proyectos .proyectos .half #1 a").mouseenter(function () {
		$("#proyectos .proyectos .half #1").css("background-image", 'url("../img/bg-03.jpg")');
	});
	$("#proyectos .proyectos .half #1 a").mouseleave(function () {
		$("#proyectos .proyectos .half #1").css("background-image", 'none');
	});
	
	
	$("#proyectos .proyectos .half #2 a").mouseenter(function () {
		$("#proyectos .proyectos .half #2").css("background-image", 'url("../img/d-02.jpg")');
	});
	$("#proyectos .proyectos .half #2 a").mouseleave(function () {
		$("#proyectos .proyectos .half #2").css("background-image", 'none');
	});
	
	
	$("#proyectos .proyectos .half #3 a").mouseenter(function () {
		$("#proyectos .proyectos .half #3").css("background-image", 'url("../img/i-01.jpg")');
	});
	$("#proyectos .proyectos .half #3 a").mouseleave(function () {
		$("#proyectos .proyectos .half #3").css("background-image", 'none');
	});
	
	
	$("#proyectos .proyectos .half #4 a").mouseenter(function () {
		$("#proyectos .proyectos .half #4").css("background-image", 'url("../img/i-02.jpg")');
	});
	$("#proyectos .proyectos .half #4 a").mouseleave(function () {
		$("#proyectos .proyectos .half #4").css("background-image", 'none');
	});    
}

$('span.spe').on('click', function(){
	$('.spects').toggleClass('spects-ri');
});


$('.x').on('click', function(){
	$('.spects').removeClass('spects-ri');
});






$('#carrusel-items').slick({
	autoplay: true,
	infinite: true,
	dots: true,
	pauseOnHover: false,
	slidesToShow: 1,
	arrows: false,
	centerMode: true,
	variableWidth: true,
	responsive: [
		{
		  breakpoint: 750,
		  settings: {
			slidesToShow: 1,
			centerMode: false,
			variableWidth: false,
		  }
		}]
  });



  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 1000,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: true,
    timeoutCountdown: 2000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });



});
