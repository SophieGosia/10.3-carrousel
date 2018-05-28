$(document).ready(function() {
	var $carouselList = $("#carousel ul");
	
	setInterval(changeSlide, 3000);
	
	function changeSlide() {
		$carouselList.animate({'marginLeft':$('img').width()}, 500, moveFirstSlide);
	}	

	function moveFirstSlide() {
		var $firstSlide = $carouselList.find("li:first");
		var $lastSlide = $carouselList.find("li:last");
		$lastSlide.after($firstSlide);
		$carouselList.css({marginLeft:0});
	}
});