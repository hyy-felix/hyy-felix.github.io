/*
 * Greedy Navigation
 *
 * http://codepen.io/lukejacksonn/pen/PwmwWV
 *
 */

var $btn   = $('#site-nav button');
var $hlinks = $('#site-nav .hidden-links');

function updateNav() {
  // Just update masthead height / padding — no collapsing at all.
  var mastheadHeight = $('.masthead').height();
  $('body').css('padding-top', mastheadHeight + 'px');
  if ($(".author__urls-wrapper button").is(":visible")) {
    $(".sidebar").css("padding-top", "");
  } else {
    $(".sidebar").css("padding-top", mastheadHeight + "px");
  }
}

// Window listeners
$(window).on('resize', updateNav);
screen.orientation.addEventListener("change", updateNav);

// Hide the toggle button permanently
$btn.addClass('hidden');
$hlinks.addClass('hidden');

// Initial call
updateNav();
