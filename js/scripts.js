// code for footer

var shortContent = function () {
  $('body').removeClass('shortContent');

  if ($(window).height() > $('#wrapper').height()) {
    $('body').addClass('shortContent');
  }

};

(function () {

  shortContent();

  $(window).resize(function () {
    shortContent();
  });

}());