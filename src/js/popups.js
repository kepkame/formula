// Popups

// Popup – Feedback
if ($('#popup-feedback') && $('.btn-feedback')) {
    var popup = $('#popup-feedback');
    var btnsOpenPopup = $('.btn-feedback');
    var btnClosePopup = $('#popup-feedback-close');

    btnsOpenPopup.on('click', function(event) {
        $('body').addClass('fixed');
        $('.popup').addClass('popup--open');
    });

    btnClosePopup.on('click', function(event) {
        $('body').removeClass('fixed');
        $('.popup').removeClass('popup--open');
    });

    $('.popup-feedback__bg').on('click', function(event) {
        $('body').removeClass('fixed');
        $('.popup').removeClass('popup--open');
    });

    $(document).keyup(function(e) {
        if (e.key === "Escape" || e.keyCode === 27) {
            $('body').removeClass('fixed');
            $('.popup').removeClass('popup--open');
        }
    });
}