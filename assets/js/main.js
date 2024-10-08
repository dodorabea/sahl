(function ($) {
  "use strict";
  /*====Dom is loaded==== */
  var $loader = document.querySelector('#preloader-background');
  
  window.onload = function() {
    setTimeout(function() {
      $loader.remove(); 
    }); 
  };
  /*====Back to top==== */
  var amountScrolled = 200;
  var amountScrolledNav = 25;

  $(window).scroll(function () {
    if ($(window).scrollTop() > amountScrolled) {
      $('button.back-to-top').addClass('show');
    } else {
      $('button.back-to-top').removeClass('show');
    }
  });

  $('button.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
  /*=====AOS animation=====*/
  AOS.init({
    // Global settings:
    duration: 900,
    easing: 'ease-in-cubic',
    disable: 'mobile',
  });
  AOS.refresh();
  /*=====video paly=====*/
  const video = document.getElementById("video");
  function togglePlay() {
    if (video.paused || video.ended) {
      video.play();
    } else {
      video.pause();
    }
  }
  const circlePlayButton = document.querySelector("#circle-play");

  if (circlePlayButton) {
    circlePlayButton.addEventListener("click", togglePlay);
  }
  if (video) {
    video.addEventListener("playing", function () {
      if (circlePlayButton) {
        circlePlayButton.style.opacity = 0;
      }
    });

    video.addEventListener("pause", function () {
      if (circlePlayButton) {
        circlePlayButton.style.opacity = 1;
      }
    });
  }
  /*==========Counter=========*/
  $(window).on('scroll', function() {
    $('.counting').each(function() {
      var $this = $(this),
          countTo = $this.attr('data-count');
      
      // Check if the element is in view
      if ($this.offset().top <= $(window).scrollTop() + $(window).height()) {
        
        // Start the counting animation
        $({ countNum: $this.text() }).animate({
          countNum: countTo
        }, {
          duration: 1000,
          easing: 'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }
        });
      }
    });
  });
})(jQuery);
/*=====Header=====*/
const menu = document.querySelector(".menu");
const menuInner = menu.querySelector(".menu__inner");
const menuArrow = menu.querySelector(".menu__arrow");
const menuTitle = menu.querySelector(".menu__title");
const burger = document.querySelector(".burger");
const overlay = document.querySelector(".overlay");

// Navbar Menu Toggle Function
function toggleMenu() {
  menu.classList.toggle("is-active");
  overlay.classList.toggle("is-active");
}

// Show Mobile Submenu Function
function showSubMenu(children) {
  subMenu = children.querySelector(".submenu");
  subMenu.classList.add("is-active");
  subMenu.style.animation = "slideLeft 0.35s ease forwards";
  const menuTitle = children.querySelector("img").parentNode.childNodes[0]
    .textContent;
  menu.querySelector(".menu__title").textContent = menuTitle;
  menu.querySelector(".menu__header").classList.add("is-active");
}

// Hide Mobile Submenu Function
function hideSubMenu() {
  subMenu.style.animation = "slideRight 0.35s ease forwards";
  setTimeout(() => {
    subMenu.classList.remove("is-active");
  }, 300);

  menu.querySelector(".menu__title").textContent = "";
  menu.querySelector(".menu__header").classList.remove("is-active");
}

// Toggle Mobile Submenu Function
function toggleSubMenu(e) {
  if (!menu.classList.contains("is-active")) {
    return;
  }
  if (e.target.closest(".menu__dropdown")) {
    const children = e.target.closest(".menu__dropdown");
    showSubMenu(children);
  }
}

// Fixed Navbar Menu on Window Resize
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    if (menu.classList.contains("is-active")) {
      toggleMenu();
    }
  }
});


// Initialize All Event Listeners
burger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);
menuArrow.addEventListener("click", hideSubMenu);
menuTitle.addEventListener("click", hideSubMenu);
menuInner.addEventListener("click", toggleSubMenu);


