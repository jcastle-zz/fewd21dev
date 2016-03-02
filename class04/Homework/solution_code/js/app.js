jQuery(document).ready(function () {

    jQuery('.readmore').click(function (e) {
        e.preventDefault();
        jQuery('#show-this-on-click').slideDown();
        jQuery('.readmore').hide();
        jQuery('.readless').show();
    });

    jQuery('.readless').click(function (e) {
        e.preventDefault();
        jQuery('#show-this-on-click').slideUp();
        jQuery('.readless').hide();
        jQuery('.readmore').show();
    });

    jQuery('.learnmore').click(function (e) {
        e.preventDefault();
        jQuery('#learnmoretext').slideDown();
        jQuery('.learnmore').hide();
    });

});