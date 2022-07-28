/* jshint browser: true */
"use strict";



jQuery(document).ready(function($){
  let btnOpenMenu = $('#site-menu-btn-open');
  let btnCloseMenu = $('#site-menu-btn-close');

  let menu = $('.site-header__col--menu');

  // Open
  function openMobileMenu() {
    $('body').addClass('fixed');
    menu.addClass('site-header__col--menu-show');

    setTimeout(function() {
        menu.addClass('site-header__col--menu-open');
    }, 100);
  }

  // Close
  function closeMobileMenu() {
    $('body').removeClass('fixed');
    menu.removeClass('site-header__col--menu-open');

    setTimeout(function() {
      menu.removeClass('site-header__col--menu-show');
      document.body.removeAttribute('style');
    }, 560);

    $('body').removeClass('fixed');
  }

  btnOpenMenu.on('click', function() {
    openMobileMenu(event);
  });

  btnCloseMenu.on('click', function() {
    closeMobileMenu(event);
  });
});


