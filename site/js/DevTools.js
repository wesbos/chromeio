$(function() {

	var chromeio = window.chromeio = {};
		chromeio.styles = {},
		chromeio.edit = {},
		chromeio.activeStyle;

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
		var classy = this.className.match(/webkit-[\w-]*/) + '';		
		
		// Update the style object
		if (!chromeio.styles[classy]) {
			console.log('nothing found for '+ classy);
			chromeio.styles[classy] = {
				"name" : classy,
				"color" : "#fff",
				"font-style" : "italic"
			};
		} 
		else {
			console.log('found it! we will update your styles',chromeio.styles[classy]);
		}
		
		chromeio.activeStyle = chromeio.styles[classy].name; 
		chromeio.viewStyles(chromeio.styles[classy]);
		
		

	});
	
	chromeio.viewStyles = function(obj) {
		html = "<h3>"+ obj.name +"</h3>";
		for (key in obj) {
			if (obj.hasOwnProperty(key) && key !== "name") {
				//console.log(key, obj[key])
				html += "<hr />";
				html += key + "- <input type='text' data-cssRule='"+ obj.name +"' class='colorwheel' value='" + obj[key] + "' />";
			}
		}
		$('.editorInner').html(html);
		startColorPicker(); 
	}
	
	
	// colorpicker
	function startColorPicker() {
		$('.colorwheel').ColorPicker({
			onSubmit: function(hsb, hex, rgb, el) {
				$(el).val(hex);
				$(el).ColorPickerHide();
			},
			onBeforeShow: function () {
				$(this).ColorPickerSetColor(this.value);
			},
			onChange: function (hsb, hex, rgb) {
				$('#elements-content2 .'+chromeio.activeStyle).css('color', '#' + hex);
			}
		})
		.bind('keyup', function(){
			$(this).ColorPickerSetColor(this.value);
		});
	}	
});