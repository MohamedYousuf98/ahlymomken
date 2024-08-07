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

// All Categories
function updateSelectedCategory(select) {
  var selectedCategorySpan = document.getElementById("selectedCategory");
  var selectedIndex = select.selectedIndex;
  var selectedOption = select.options[selectedIndex];
  selectedCategorySpan.textContent = selectedOption.textContent;
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

  const rightSectionImg = document.querySelector(".momken-pay-img");
  if (element.classList.contains("word-left")) {
    rightSectionImg.src = "assets/images/8a372abcb0f93a90b420760fcf4de367.jpeg";
  } else if (element.classList.contains("word-center")) {
    rightSectionImg.src = "assets/images/sl1.png";
  } else if (element.classList.contains("word-right")) {
    rightSectionImg.src = "assets/images/sl3-min.webp";
  }
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

// Recharge / Bill Payment Slider
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
      autoplaySpeed: 3000,
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
      autoplaySpeed: 3000,
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
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: "linear",
      infinite: true,
      arrows: false,
      dots: false,
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
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: "linear",
      infinite: true,
      arrows: false,
      dots: false,
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
/*function toggleSearch() {
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
}

/*
// Function to toggle search input visibility
function toggleSearch() {
  var searchInput = document.getElementById("searchInput");
  if (
    searchInput.style.display === "none" ||
    searchInput.style.display === ""
  ) {
    searchInput.style.display = "block";
    searchInput.focus();
  } else {
    searchInput.style.display = "none";
  }
}

// Add click event listener to search icon
document.getElementById("searchIcon").addEventListener("click", toggleSearch);
*/

/*
// Search input without hover
// Function to toggle search input visibility
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

 Function to handle key press event
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
}

// Function to toggle search input visibility
function toggleSearch() {
  var searchInput = document.getElementById("searchInput");
  if (
    searchInput.style.display === "none" ||
    searchInput.style.display === ""
  ) {
    searchInput.style.display = "block";
    searchInput.focus();
  } else {
    searchInput.style.display = "none";
  }
}

// Add click event listener to search icon
document.getElementById("searchIcon").addEventListener("click", toggleSearch);
*/

// Search input with hover
// Function to toggle search input visibility
function toggleSearch() {
  var searchInput = document.getElementById("searchInput");
  if (
    searchInput.style.display === "none" ||
    searchInput.style.display === ""
  ) {
    searchInput.style.display = "block";
    searchInput.focus();
  } else {
    searchInput.style.display = "none";
  }
}

function submitForm(element) {
  element.submit();
}

// Function to handle click event anywhere on the document
function handleDocumentClick(event) {
  var searchInput = document.getElementById("searchInput");
  var searchIcon = document.querySelector(".search-icon");

  // Check if clicked element is not the search input or search icon
  if (event.target !== searchInput && event.target !== searchIcon) {
    searchInput.style.display = "none";
  }
}

// Add mouse enter event listener to search icon (optional, for hover effect)
document
  .querySelector(".search-icon")
  .addEventListener("mouseenter", function () {
    var searchInput = document.getElementById("searchInput");
    searchInput.style.display = "block";
    searchInput.focus();
  });

// Add event listener for key press on search input
document
  .getElementById("searchInput")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      // Check if the Enter key was pressed
      // Perform custom submit action here
      submitForm(event);
    }
  });

// Add click event listener to search icon (can be removed if not needed)
document.querySelector(".search-icon").addEventListener("click", toggleSearch);

// Add click event listener to the entire document (for hiding search input)
document.addEventListener("click", handleDocumentClick);
