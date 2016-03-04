$(document).ready(function () {

    $('.readmore').click(function (show_hide) {
        show_hide.preventDefault();
        jQuery('#show-this-on-click').slideDown();
        jQuery('.readmore').hide();
        jQuery('.readless').show();
    });

    $('.readless').click(function (show_hide) {
        show_hide.preventDefault();
        $('#show-this-on-click').slideUp();
        $('.readless').hide();
        $('.readmore').show();
    });

    $('.learnmore').click(function (show_hide) {
        show_hide.preventDefault();
        $('#learnmoretext').slideDown();
        $('.learnmore').hide();
    });

});