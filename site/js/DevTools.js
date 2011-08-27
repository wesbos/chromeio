$(function() {

	var chromeio = window.chromeio = {};

	// Events
	
	// mimic inspector hover
	$('li').hover(function() {
		$(this).addClass('hovered');
	}, function() {
		$(this).removeClass('hovered');
	});
	
	// mimic webkit current selected line
	$('li').click(function() {
		$('.selected').removeClass('selected');
		$(this).addClass('selected');
	});
	
	// mimic inspector element finder
	$("[class^=webkit]").hover(function(e) {
		$('.elHov').removeClass('elHov');
		$(this).addClass('elHov');
		e.stopPropagation();
	}, function(e) {
		$('.elHov').removeClass('elHov');
		$(this).removeClass('elHov');
		e.stopPropagation();
	});
	
	// finding the class name
	$("[class^=webkit]").click(function(e) {
		e.stopPropagation();
		var class = this.className.match(/webkit-[\w-]*/);		
		console.log(class + '');
		if (!chromeio[class]) {
			console.log('nothing found for '+ class);
			chromeio[class] = {};
		} 
		else {
			console.log('found it! we will update your styles');
		}
	});
	
	
});






