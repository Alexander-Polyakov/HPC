$(document).ready(function() {
    $('.js-open-popup').click(function (e) {
        e.preventDefault();
        var targetPopup = $(this).data('target-popup');

        $('.js-popups-overlay').fadeIn(400);
        $('.js-popups').fadeIn(400);
        $('[data-popup-name='+targetPopup+']').fadeIn(400);
    });

    $(".js-close-popups").click(function () {

        $('.js-popups').fadeOut(400);
        $('[data-popup-name]').fadeOut(400);
    });

});