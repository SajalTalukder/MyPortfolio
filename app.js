//////////
//Navbar//
/////////
const navbar = () => {
  const navigaton__overlay = document.querySelector(".navigation__overlay");
  const navigaton__burger = document.querySelector(".navigation__burger");
  const navigation = document.querySelector(".navigation");
  const body = document.body;

  navigaton__burger.addEventListener("click", () => {
    navigaton__overlay.classList.toggle("navigation__overlay__show");
    navigaton__burger.classList.toggle("navigation__toggle");
    if (navigaton__overlay.classList.contains("navigation__overlay__show")) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "scroll";
    }
  });
  navigation.addEventListener("click", (e) => {
    if (e.target.classList.contains("nav__link")) {
      navigaton__overlay.classList.remove("navigation__overlay__show");
      navigaton__burger.classList.remove("navigation__toggle");
      body.style.overflowY = "scroll";
    }
  });
};

navbar();

/* Top to bottom */

const topBottom = () => {
  const top_bottom = document.querySelector(".top-bottom");
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 500) {
      top_bottom.classList.add("top-bottom__show");
    } else {
      top_bottom.classList.remove("top-bottom__show");
    }
  });
};
topBottom();

/* Smooth scroll*/
let scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
});

///////////////////////////////////////
// Slider
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
  setInterval(nextSlide, 10000);
};
slider();

//////
// preloader //
/////
const preloaderFunc = () => {
  document.body.style.overflowY = "hidden";
  const loader = document.querySelector(".preloader");
  window.addEventListener("load", () => {
    loader.style.display = "none";
    document.body.style.overflowY = "scroll";
  });
};
preloaderFunc();

// animation
AOS.init({
  delay: 200,
  duration: 800,
  once: true,
});
