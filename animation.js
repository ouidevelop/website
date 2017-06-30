$(window).scroll(function () {
  $('.brand').css('opacity', 1 - $(window).scrollTop() / 200);
  if ($(window).width() > 480) {
    $('.side-transparent').css('display', 'block');
    $('.side-transparent').css('opacity', 0 + $(window).scrollTop() / 500);
  }
});

if ($(window).width() > 480) {
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 500) {
      $('.side-footer').css('display', 'block');
      $('.pictures').css({'position': 'fixed', 'width': '30%', 'top': '0', 'left': '0', 'color': 'white'});
      $('.side-footer .link').css('color', 'white');
      $('.copyright').css('color', 'white');
      $('.side-footer .link').hover(function() {
        $(this).css('color', 'rgb(20, 164, 40)');
      }, function() {
        $(this).css('color', 'white');
      });
    } else {
      $('.side-footer').css('display', 'none');
      $('.pictures').css({'position': 'absolute', 'width': '100%', 'color': 'black'});
    }
  });
}