$('.colors span').click(function () {
  $('.colors span').removeClass('active');
  $(this).addClass('active');
  $('.card-box').css('background', $(this).attr('data-color'));
  $('.pic').css('background-image', $(this).attr('data-pic'));
  $('.price').css('color', $(this).attr('data-color'));
  $('.btn').css('color', $(this).attr('data-color'));
})