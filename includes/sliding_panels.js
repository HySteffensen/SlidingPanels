/*  JavaScript Document                      */
/*  Written by Chris Converse for lynda.com  */

var panelWidth = 0;
$(document).ready(function() {
  window.panelWidth = $('.sp').width();

  $('.panel_container .panel').each(function(index) {
    $(this).css({'width': window.panelWidth + 'px', 'left': (index * window.panelWidth) + 'px'});

    $('.sp .panels').css('width', (index + 1) * window.panelWidth + 'px');
  });

  $('.sp .tabs span').each(function() {

    $(this).on('click', function() {
      changePanels();
    });

  });

  

});
