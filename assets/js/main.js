//element.classList.add('selected');

function changeContent(element) {
  var contentMomknPay = document.querySelector(".content-momkn-pay");
  var contentMomknApp = document.querySelector(".content-momkn-app");
  var contentPointOfSale = document.querySelector(".content-point-of-sale");
  var rightSection = document.querySelector(".right-paymentsolution");

  if (element.classList.contains("word-left")) {
    contentMomknPay.style.display = "block";
    contentMomknApp.style.display = "none";
    contentPointOfSale.style.display = "none";
    rightSection.style.display = "block";
  } else if (element.classList.contains("word-center")) {
    contentMomknPay.style.display = "none";
    contentMomknApp.style.display = "block";
    contentPointOfSale.style.display = "none";
    rightSection.style.display = "block";
  } else if (element.classList.contains("word-right")) {
    contentMomknPay.style.display = "none";
    contentMomknApp.style.display = "none";
    contentPointOfSale.style.display = "block";
    rightSection.style.display = "block";
  }

  var words = document.querySelectorAll(".word");
  words.forEach(function (word) {
    word.classList.remove("selected");
  });

  element.classList.add("selected");

  const rightSectionImg = document.querySelector(".momken-pay-img");
  if (element.classList.contains("word-left")) {
    rightSectionImg.src = "assets/images/8a372abcb0f93a90b420760fcf4de367.jpeg";
  } else if (element.classList.contains("word-center")) {
    rightSectionImg.src = "assets/images/sl1.png";
  } else if (element.classList.contains("word-right")) {
    rightSectionImg.src = "assets/images/sl3.png";
  }
}

$(document).ready(function () {
  $(".payment-services-slider").slick({
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: $(".prev-arrow"),
    nextArrow: $(".next-arrow"),
    centerMode: true,
    centerPadding: "",
    customPaging: function (slider, i) {
      return '<span class="custom-dot-payservice "></span>';
    },
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".bill-payment-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: true,
    customPaging: function (slider, i) {
      return '<span class="custom-dot-payment-slider"></span>';
    },
  });
});

$(".brands-row").slick({
  slidesToShow: 8,
  slidesToScroll: 1,
  speed: 3500,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  arrows: false,
  dots: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});

$(document).ready(function () {
  if (window.matchMedia("(max-width: 768px)").matches) {
    $(".explore-possible-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
      dots: false,
    });
  }
});

const menuItems = document.querySelectorAll(".news-menu li");

// Make the "All" list item active by default
document.querySelector(".news-menu li:first-child").classList.add("selected");

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    document
      .querySelectorAll(".news-menu li.selected")
      .forEach((item) => item.classList.remove("selected"));
    menuItem.classList.add("selected");
  });
});

document
  .querySelector(".page-item.next")
  .addEventListener("click", function () {
    var previousActive = document.querySelector(".page-item.previous.active");
    if (previousActive) {
      previousActive.classList.remove("active");
    }

    this.classList.add("active");
  });

document
  .querySelector(".page-item.previous")
  .addEventListener("click", function () {
    var nextActive = document.querySelector(".page-item.next.active");
    if (nextActive) {
      nextActive.classList.remove("active");
    }

    this.classList.add("active");
  });
window.addEventListener("load", function () {
  var nextElement = document.querySelector(".page-item.next");
  if (nextElement) {
    nextElement.click();
  }
});
