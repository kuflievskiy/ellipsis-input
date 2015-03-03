/**
  * Jquery plugin ellipsisInput
  * This plugin is used to make autocomplete `input` fields work like if it has `text-overflow:ellipsis` CSS attribute.
  * Usage Example : $('#inputid').ellipsisInput({'count':20});
  *
  * @version 0.0.1
  * @created 2015-03-03
  * @author Kuf
  * @param opt, object with params, 
  * 			opt.count - count of the symbols allowed in the input element
  */
 (function($) {
	$.fn.ellipsisInput = function(opt)
	{
		$.extend(this, opt);
		
		return this.each(function()
		{
			var el = $(this),
				text = el.val(),
				multiline = el.hasClass('multiline'),
				t = $(this.cloneNode(true))
					.hide()
					.css('position', 'absolute')
					.css('overflow', 'visible')
					.width(multiline ? el.width() : 'auto')
					.height(multiline ? 'auto' : el.height())
					;

			el.after(t);

			function height() { return t.height() > el.height(); };
			function width() { return t.width() > el.width(); };

			var func = multiline ? height : width;

			while (text.length > opt.count)
			{
				text = text.substr(0, text.length - 1);
				t.val(text + "...");
			}

			el.val(t.val());
			t.remove();

			/*
			// the code below works for `block` elements like `div` etc
			
			if(el.css("overflow") == "hidden")
			{				
				var text = el.html();
				var multiline = el.hasClass('multiline');
				var t = $(this.cloneNode(true))
					.hide()
					.css('position', 'absolute')
					.css('overflow', 'visible')
					.width(multiline ? el.width() : 'auto')
					.height(multiline ? 'auto' : el.height())
					;

				el.after(t);

				function height() { return t.height() > el.height(); };
				function width() { return t.width() > el.width(); };

				var func = multiline ? height : width;

				while (text.length > 0 && func())
				{
					text = text.substr(0, text.length - 1);
					t.html(text + "...");
				}

				el.html(t.html());
				t.remove();
			}*/
		});
	};
})(jQuery);
