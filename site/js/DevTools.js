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

	
	// finding the class name
	$("[class^=webkit]").click(function() {
		var classes = this.className.match(/webkit-[\w-]*/);		
		console.log(classes);
	});
	
	
	// mimic inspector element finder
	$('li *').hover(function() {
		//$('.elhov').removeClass('elHov');
		//$(this).addClass('elHov');
		$(this).css('outline', '1px solid red');
	}, function() {
		//$('.elhov').removeClass('elHov');
		//$(this).removeClass('elHov');
		$(this).css('outline', 'none')
	});
	
	
});



