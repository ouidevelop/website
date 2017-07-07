// display side-bar items
if ($(window).width() > 480) {
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 539) {
      $('.side-transparent .side-header').css({'display': 'none'});
      $('.side .side-header, .side-menu, .side-footer').css({'display': 'block'});
      $('.side .side-header, .side-menu, .side-footer').css({'position': 'fixed', 'color': 'white'});
      $('.side .side-header').css({'top': '0'});
      $('.side-menu').css({'top': '200px'});
      $('.side-footer').css({'bottom': '0'});
    } else {
      $('.side-transparent .side-header').css({'display': 'block'});
      $('.side .side-header, .side-menu, .side-footer').css({'display': 'none'});
    }
  });
}


$('.link-to-section').on('click', function() {
  // adds selected state to section in side menu
  $('.link-to-section').removeClass('selected');
  $($(this)).addClass('selected');
  // scrolls to section from side menu
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 600);
});


// shows overley on click
$('.portfolio-link').on('click', function() {
  var href = $(this).attr('href');
  $(href).addClass('visible');
});
// hides overlay on click outside from descrition container
$('.project-overlay').on('click', function() {
  var id = $(this).attr('id');
  $('#'+id).removeClass('visible');
});
// prevents from hiding overlay on click inside description container
$(".project-content").on('click', function(event) {
  event.stopPropagation();
});
// hides overlay on close
$('.close a').on('click', function() {
  $('body').css({'overflow': 'auto'});
  var id = $(this).parent().parent().parent().attr('id');
  $('#'+id).removeClass('visible');
});
// prevents background from scrolling when portfolio item is open
$('.portfolio-item a').on('click', function() {
  $('body').css({'overflow': 'hidden'});
});

// set height of computer background picture
// var w = $(window).width();
// var val = w/1.6;
// console.log(w, val);
// $('.header').css('height', val+'px');


$(window).scroll(function () {
  // fades out org name on scroll
  $('.org-name').css('opacity', 1 - $(window).scrollTop() / 200);
  // fades in transparent side-bar on scroll
  if ($(window).width() > 480) {
    $('.side-transparent').css('display', 'block');
    $('.side-transparent').css('opacity', 0 + $(window).scrollTop() / 500);
  }
});