jQuery(document).ready(function() {
    jQuery('.btn-open').on('click', function() {
      jQuery('#overlay').addClass('overlay-active');
      jQuery(".pop-up").fadeIn("fast", function() {
        jQuery('.pop-up').addClass('pop-up-active');
      });
    });
    jQuery('.btn-close,#overlay').on('click', function() {
        jQuery('#overlay').removeClass('overlay-active');
      jQuery(".pop-up").fadeOut("fast", function() {
        jQuery('.pop-up').removeClass('pop-up-active');
      });
    });
  });