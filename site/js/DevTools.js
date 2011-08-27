$(function() {

	var chromeio = window.chromeio = {};
		chromeio.styles = {},
		chromeio.edit = {} 

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
		
		// stop the event from bubbling up into parent spans
		e.stopPropagation();
		
		// Match the classes
		var class = this.className.match(/webkit-[\w-]*/);		
		console.log(class + '');
		
		// Update the style object
		if (!chromeio.styles[class]) {
			console.log('nothing found for '+ class);
			chromeio.styles[class] = {};
		} 
		else {
			console.log('found it! we will update your styles');
		}
		

	});
	
	
});






