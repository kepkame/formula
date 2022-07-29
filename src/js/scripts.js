/* jshint browser: true */

// jQuery
jQuery(document).ready(function($){

  // Initializing the script animation – AOS JS
  AOS.init();

  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
        $('.banner-stock').addClass('banner-stock--show');
    }
  });

  // Define the browser
  function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
  }
  
  // If the browser is IE9 or IE10, then add the id «ie»
  if( isIE() == 9 || isIE() == 10 ) {
    $('body').attr('id', 'ie');
  }

  /**
   * No-JS - Adds a no-js class that hides JavaScript dependent site elements.
   */
  var elemsClassNojs = $('.no-js');
  if (elemsClassNojs[0] !== undefined) {
    elemsClassNojs.removeClass('no-js');
  }

  // Mask phone
  $('input[type="tel"]').mask("+7 (___) ___ - __ - __");

});
// jQuery/
