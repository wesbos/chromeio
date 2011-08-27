$(function() {
	$('li').hover(function() {
		$(this).addClass('hovered');
	}, function() {
		$(this).removeClass('hovered');
	});
	
	$('li').click(function() {
		$('.selected').removeClass('selected');
		$(this).addClass('selected');
	});
	
	$('*').click(function() {
		console.log(this.className );
	});
});