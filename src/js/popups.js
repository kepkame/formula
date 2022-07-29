/* jshint browser: true */
// Popups

// Popup – Feedback
if ($('.popup')) {
  let body = $('body');

  // Var Feedback popup
  let popupFeedback = $('#popup-feedback');
  let popupFeedbackBtnsOpen = $('.btn-feedback');
  let popupFeedbackBtnsClose = $('#popup-feedback-close');

  // Open popup
  function openPopup(classPopup = $('.popup')) {
    body.addClass('fixed');
    classPopup.addClass('popup--show');
    
    setTimeout(function() {
      classPopup.addClass('popup--open');
    }, 100);
  }
  
  // Close popup
  function closePopup(classPopup = $('.popup')) {
    body.removeClass('fixed');
    classPopup.addClass('popup--close');
    
    setTimeout(function() {
      classPopup.removeClass('popup--open');
      classPopup.removeClass('popup--show');
      $('.site-header__mobile-menu-bg').remove();
      classPopup.removeClass('popup--close');
    }, 760);

  }

  // Click on the button to open Feedback popup
  popupFeedbackBtnsOpen.on('click', function(event) {
    openPopup(popupFeedback);
  });

  // Click on the button to close Feedback popup
  popupFeedbackBtnsClose.on('click', function(event) {
    closePopup(popupFeedback);
  });

  // Click on the background below the popup to close Feedback popup
  $('#popup-feedback .popup__bg').on('click', function(event) {
    closePopup(popupFeedback);
  });

  // Click on the key Esc to close Feedback popup
  $(document).keyup(function(e) {
    if (e.key === "Escape" || e.keyCode === 27) {
      closePopup(popupFeedback);
    }
  });
}
