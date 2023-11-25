$('.slider').slick({
    slidesToShow: 8,
    slidesToScroll: 0,
    autoplay: false,
    autoplaySpeed: 2000,
});

$('.slider3').slick({
    centerMode: true,
    centerPadding: '240px',
    slidesToShow: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          infinite: true,
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "200px",
          dots:false,
        }
      },
      {
        breakpoint: 850,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          dots:false,
        }
      },
    ]
  });