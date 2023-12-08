function openNav() {
  document.getElementById("navbar").classList.toggle("start-0");
  document.body.classList.toggle("overflow-hidden");
  document.querySelector(".menu").classList.toggle("cross")
  document.getElementById("buler-bg").classList.toggle("nav-bg")
}
$('.slider-1').slick({
  dots: false,
  infinite: true,
  speed: 3000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: 'Linear',
  slidesToShow: 8,
  slidesToScroll: 1,
  arrows: false,
  responsive: [{
    breakpoint: 1300,
    settings: {
      slidesToShow: 6,
      autoplay: true,
      speed: 3000,
      slidesToScroll: 1,
      autoplaySpeed: 0,
      cssEase: 'Linear',
      infinite: true,
      dots: false,
    }
  },
  {
    breakpoint: 900,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: 'Linear',
      speed: 1000,
    }
  },
  {
    breakpoint: 650,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplaySpeed: 0,
      cssEase: 'Linear',
    }
  },
  {
    breakpoint: 580,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplaySpeed: 0,
      cssEase: 'Linear',
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplaySpeed: 0,
      cssEase: 'Linear',
    }
  }
  ]

})
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("back-to-top");
  window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  };
  button.onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
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
        dots: false,
      }
    },
    {
      breakpoint: 850,
      settings: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        dots: false,
      }
    },
  ]
});
// accordian
let box = document.querySelectorAll(".box");
box.forEach((row) => {
  row.addEventListener("click", () => {
    const x = document.querySelector(".active");
    row.classList.toggle("active");
    x && x.classList.remove("active");

    if (!isOpen) {
      // Smoothly open the clicked item
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      // Close the clicked item
      content.style.maxHeight = null;
    }
  });
});