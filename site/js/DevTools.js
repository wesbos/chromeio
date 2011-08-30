$(function() {

	var chromeio = window.chromeio = {};
		chromeio.styles = {},
		chromeio.edit = {},
		chromeio.activeSelector,
		chromeio.activeProperty;

	
	/*
		 mimic inspector hover
	*/
	
	$('li').hover(function() {
		$(this).addClass('hovered');
	}, function() {
		$(this).removeClass('hovered');
	});
	
	
	/*
		 mimic webkit current selected line
	*/ 
	$('li').click(function() {
		$('.selected').removeClass('selected');
		$(this).addClass('selected');
	});
	
	
	/*
		mimic inspector element finder
	*/
	$("[class^=webkit], #elements-content2").hover(function(e) {
		$('.elHov').removeClass('elHov');
		$(this).addClass('elHov');
		e.stopPropagation();
	}, function(e) {
		$('.elHov').removeClass('elHov');
		$(this).removeClass('elHov');
		e.stopPropagation();
	});
	
	/*
		finding the class name
	*/ 
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

		chromeio.viewStyles(chromeio.styles[classy]);
	});
	
	
	/*
		View & Edit Styles Pane 
	*/
	
	chromeio.viewStyles = function(obj) {
		html = "<div class='element' rel='"+obj.name+"' ><h3>"+ obj.name +"</h3>";
		for (key in obj) {
			if (obj.hasOwnProperty(key) && key !== "name") {
				html += key + "- <input type='text' data-cssselector='"+ obj.name +"' data-cssproperty='"+key+"' class='colorwheel' value='" + obj[key] + "' /></div>";
			}
		}
		
		$('.editorInner').append(html);
		chromeio.startColorPicker();
	}
	
	/* 
		Element Input Boxes 
	*/
	
	$('.element input').live('focus',function() {
		var that = $(this);
		chromeio.activeSelector = that.data('cssselector');
		chromeio.activeProperty = that.data('cssproperty');
		console.log('set the active states');
	});
	
	
	/* 
		Colour Picker - Yeah - thats ColoUr 
	*/ 
	
	chromeio.startColorPicker = function() {
		$('.colorwheel').ColorPicker({
			onSubmit: function(hsb, hex, rgb, el) {
				$(el).val(hex);
				$(el).ColorPickerHide();
			},
			onBeforeShow: function () {
				$(this).ColorPickerSetColor(this.value);
			},
			onChange: function (hsb, hex, rgb) {
				$('.'+chromeio.activeSelector).css(chromeio.activeProperty, '#' + hex);
			}
		})
		.bind('keyup', function(){
			$(this).ColorPickerSetColor(this.value);
		});
	}
	
	/* 
		Generate CSS! 
	*/
	
	$('a#generate').click(function() {
		var data = JSON.stringify(chromeio.styles);
		$.post("generate.php", data,function(d) {
			console.log(d);
		})
	});
	
	
	/* Init */
	chromeio.startColorPicker();
	
		
});