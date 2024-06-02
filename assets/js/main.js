/**
 * Preloader
 */
window.addEventListener("load", () => {
  document.getElementById("preloader").remove();
  document.getElementById("content").style.display = "block";
  document.querySelector(".back-to-top").style.display = "block"; // Show back to top button
});

/**
 * Back to top button
 */
let backtotop = document.querySelector(".back-to-top");
if (backtotop) {
  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      backtotop.classList.add("active");
    } else {
      backtotop.classList.remove("active");
    }
  };
  window.addEventListener("load", toggleBacktotop);
  window.addEventListener("scroll", toggleBacktotop);
}

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
}

/*
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

*/
$(document).ready(function () {
  var direction = $("body").css("direction");
  var screenWidth = $(window).width();
  var isMobile = screenWidth <= 768;
  var isArabic = direction === "rtl";

  var settings;
  if (isArabic) {
    settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
      dots: true,
      rtl: true,
      customPaging: function (slider, i) {
        if (!isMobile) {
          return '<span class="custom-dot-payment-slider"></span>';
        }
      },
    };
  } else {
    settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
      dots: true,
      customPaging: function (slider, i) {
        return '<span class="custom-dot-payment-slider"></span>';
      },
    };
  }

  $(".bill-payment-slider").slick(settings);
});

// brands section
$(document).ready(function () {
  var direction = $("body").css("direction");

  var settings;
  if (direction === "rtl") {
    settings = {
      slidesToShow: 8,
      slidesToScroll: 8,
      speed: 3500,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: "linear",
      arrows: false,
      dots: false,
      infinite: true,
      rtl: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 8,
            slidesToScroll: 8,
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
    };
  } else {
    settings = {
      slidesToShow: 8,
      slidesToScroll: 8,
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
            slidesToShow: 8,
            slidesToScroll: 8,
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
    };
  }

  $(".brands-row").slick(settings);
});

$(document).ready(function () {
  var direction = $("body").css("direction");

  var settings;
  if (window.matchMedia("(max-width: 768px)").matches) {
    if (direction === "rtl") {
      settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        dots: false,
        rtl: true,
      };
    } else {
      settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        dots: false,
      };
    }
    $(".explore-possible-slider").slick(settings);
  }
});

$(document).ready(function () {
  var direction = $("body").css("direction");

  var settings;
  if (direction === "rtl") {
    settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
      dots: false,
      rtl: true,
    };
  } else {
    settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
      dots: false,
      rtl: false,
    };
  }

  if (window.matchMedia("(max-width: 768px)").matches) {
    $(".careers-slider").slick(settings);
  }
});

// Search input
function toggleSearch() {
  var searchInput = document.getElementById("searchInput");
  if (searchInput.style.display === "none") {
    searchInput.style.display = "block";
    searchInput.focus();
  } else {
    searchInput.style.display = "none";
  }
}

// Function to handle form submission
function submitForm(event) {
  event.preventDefault();

  customSubmitAction();
}

// Function to handle key press event
function handleKeyPress(event) {
  if (event.keyCode === 13) {
    // Check if the Enter key was pressed
    // Perform custom submit action here
    customSubmitAction(); // Call custom action function
  }
}

// Add event listener for key press on search input
document
  .getElementById("searchInput")
  .addEventListener("keypress", handleKeyPress);

// Custom submit action function
function customSubmitAction() {
  // For example, you can submit the form:
  document.getElementById("searchForm").submit();
  // Show submit message using alert
  alert("Submitted!");
}
