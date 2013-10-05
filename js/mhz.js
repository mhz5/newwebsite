$(document).ready(function() {
	$('#mail').popup();
	$('#github').popup();
	$('#linkedin').popup();
	$('#facebook').popup();



	$('[data-tab="about"]').click(function() {
		$('#content').animate({'margin-left': '0px'}, 333);
	});
	$('[data-tab="contact"]').click(function() {
		$('#content').animate({'margin-left': '-100%'}, 333);
	});
	$('[data-tab="experience"]').click(function() {
		$('#content').animate({'margin-left': '-200%'}, 333);
	});
	$('[data-tab="dance"]').click(function() {
		$('#content').animate({'margin-left': '-300%'}, 333);
	});
});