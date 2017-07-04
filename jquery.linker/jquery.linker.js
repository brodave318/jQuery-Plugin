/*
 * name: Linker
 * author: David Hernandez
 * version: 0.0.0
 * licence: MIT
 */

(function($) {
  $.fn.linker = function(options) {
    // Default Settings
    var settings = $.extend({
      href          :null,
      text          :null,
      target        :'_self'
    }, options);

    // Validation
    if(settings.href == null) {
      console.log('You need an href option for Linker to work');
      return this;
    }

    return this.each(function() {
      var object = $(this);

      if(settings.text == null) {
        settings.text = object.text();
      }

      object.wrap('<a target="' + settings.target + '" href="' + settings.href + '"></a>').text(settings.text);
    });
  }
}(jQuery));
