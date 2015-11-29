$(document).ready(function() {

	// Nav Bar
$("#navbar").waypoint(function(direction) {
	if (direction == "down") {
		$('#navbar').addClass('sticky');	
	} else {
		$("#navbar").removeClass('sticky');
	}
});

$("a").click(function() {
	$('html, body').animate({
	scrollTop: $( $.attr(this, 'href')).offset().top
	}, 500);
});

	
	// Our story

$("#heart1").click(function() {
	$("#event-container").show();
	$(".events").hide();
	$("#event1").fadeIn();
});

$("#heart2").click(function() {
	$("#event-container").show();
	$(".events").hide();
	$("#event2").fadeIn();
});

$("#heart3").click(function() {
	$("#event-container").show();
	$(".events").hide();
	$("#event3").fadeIn();
});

$("#heart4").click(function() {
	$("#event-container").show();
	$(".events").hide();
	$("#event4").fadeIn();
});

$("#heart5").click(function() {
	$("#event-container").show();
	$(".events").hide();
	$("#event5").fadeIn();
});

	// Gallery

$("#thumbnail1").click(function() {
	$("#popup-container").fadeIn();
	$(".popup").hide();
	$("#p1").show();
	$("#popup-overlay").show();
});

$("#thumbnail2").click(function() {
	$("#popup-container").fadeIn();
	$(".popup").hide();
	$("#p2").show();
	$("#popup-overlay").show();
});

$("#thumbnail3").click(function() {
	$("#popup-container").fadeIn();
	$(".popup").hide();
	$("#p3").show();
	$("#popup-overlay").show();
});

$("#thumbnail4").click(function() {
	$("#popup-container").fadeIn();
	$(".popup").hide();
	$("#p4").show();
	$("#popup-overlay").show();
});

$("#thumbnail5").click(function() {
	$("#popup-container").fadeIn();
	$(".popup").hide();
	$("#p5").show();
	$("#popup-overlay").show();
});

$("#thumbnail6").click(function() {
	$("#popup-container").fadeIn();
	$(".popup").hide();
	$("#p6").show();
	$("#popup-overlay").show();
});

$("#thumbnail7").click(function() {
	$("#popup-container").fadeIn();
	$(".popup").hide();
	$("#p7").show();
	$("#popup-overlay").show();
});

$("#thumbnail8").click(function() {
	$("#popup-container").fadeIn();
	$(".popup").hide();
	$("#p8").show();
	$("#popup-overlay").show();
});

$("#thumbnail9").click(function() {
	$("#popup-container").fadeIn();
	$(".popup").hide();
	$("#p9").show();
	$("#popup-overlay").show();
});

$("#popup-overlay").click(function() {
	$("#popup-container").fadeOut();
	$("#popup-overlay").fadeOut();
});
	
});