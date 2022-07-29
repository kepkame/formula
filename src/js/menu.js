/* jshint browser: true */
"use strict";

jQuery(document).ready(function($){
  let menu = $('.site-header__col--menu');
  let btnOpenMenu = $('#site-menu-btn-open');
  let btnCloseMenu = $('#site-menu-btn-close');
  let btnFeedback = $('.site-header__col--menu .btn-feedback');
  let menuBg = null;

  // Open menu
  function openMobileMenu() {
    $('body').addClass('fixed');
    menu.addClass('site-header__col--menu-show');
    menu.prepend('<div class="site-header__mobile-menu-bg"></div>');

    setTimeout(function() {
        menu.addClass('site-header__col--menu-open');
    }, 100);
  }

  // Close menu
  function closeMobileMenu() {
    $('body').removeClass('fixed');
    menu.removeClass('site-header__col--menu-open');

    setTimeout(function() {
      menu.removeClass('site-header__col--menu-show');
      $('.site-header__mobile-menu-bg').remove();
    }, 560);

    $('body').removeClass('fixed');
  }

  // Click on the button to open mobile menu
  btnOpenMenu.on('click', function() {
    openMobileMenu();
  });

  // Click on the button to close mobile menu
  btnCloseMenu.on('click', function() {
    closeMobileMenu();
  });

  // Click on the background below the menu to close mobile menu
  menu.on('click', ('.site-header__mobile-menu-bg'), function() {
    closeMobileMenu();
  });

  // Click on the button to open Feedback popup
  btnFeedback.on('click', function() {
    closeMobileMenu();
  });
});
