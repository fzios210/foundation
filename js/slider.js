$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  autoplay: true,
  autoplaySpeed: 5000,
  infinite: true,
  dots: true,
  arrows: true,
  prevArrow: "<img class='a-left control-c prev slick-prev' src='img/L.png'>",
  nextArrow: "<img class='a-right control-c next slick-next' src='img/R.png'>",
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  arrows: false,
  focusOnSelect: true,
  verticalSwiping: true,
  vertical: true
});

$('a[data-slide]').click(function (e) {
  e.preventDefault();
  var slideno = $(this).data('slide');
  $('.slider-nav').slick('slickGoTo', slideno - 1);
});