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

  // Animation – Banner Waving-hand
  function wavingHand(banner) {
    var link = banner.find('.banner-stock__link');
    link.mouseenter(function() {
      // навели курсор на объект (не учитываются переходы внутри элемента)
      banner.addClass('banner-stock--hover');
    })
    .mouseleave(function() {
        // отвели курсор с объекта (не учитываются переходы внутри элемента)
      banner.removeClass('banner-stock--hover');
    });
  }

  if ($('#banner-stock').length) {
    wavingHand($('#banner-stock'));
  }

  // Mask phone
  $('input[type="tel"]').mask("+7 (___) ___ - __ - __");

});
// jQuery/
