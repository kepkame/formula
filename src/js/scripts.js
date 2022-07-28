/* jshint browser: true */






// jQuery
jQuery(document).ready(function($){

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



});
// jQuery/
