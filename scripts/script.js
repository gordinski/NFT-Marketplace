// Filter //
// =========
let filterBtn = document.querySelectorAll(".collection .collection__buttons .filter");
let filterItem = document.querySelectorAll(".collection .gallery .card");

filterBtn.forEach((button) => {
  button.onclick = () => {
    filterBtn.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    let dataFilter = button.getAttribute("data-filter");

    filterItem.forEach((item) => {
      item.classList.add("hide");

      if (item.classList.contains(dataFilter) || dataFilter === "all") {
        item.classList.remove("hide");
        item.classList.add("show");
      }
    });
  };
});

// Swiper //
// =========
var swiper = new Swiper(".card-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 20,
    stretch: 20,
    depth: 140,
    modifier: 2,
    slideShadows: true,
  },
  spaceBetween: 15,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
});

// Spoiler //
// ==========
var coll = document.getElementsByClassName("faq__title");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("open");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

// Particle //
// ===========
particlesJS("particles-js", {
  particles: {
    number: { value: 142, density: { enable: true, value_area: 1972.8691040806818 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
    size: { value: 3, random: true, anim: { enable: false, speed: 5, size_min: 0.1, sync: false } },
    line_linked: { enable: true, distance: 236.74429248968178, color: "#ffffff", opacity: 0.4, width: 1 },
    move: {
      enable: true,
      speed: 3,
      direction: "top-right",
      random: true,
      straight: false,
      out_mode: "bounce",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "window",
    events: { onhover: { enable: false, mode: "grab" }, onclick: { enable: false, mode: "push" }, resize: true },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});


// Menu //
// =======
const btnBurger = document.querySelector(".header__burger");
const btnClose = document.querySelector(".menu-popup__icon");
const menu = document.querySelector(".menu-popup");

btnBurger.onclick = () => {
  menu.classList.add("menu-popup--active");
}
btnClose.onclick = () => {
  menu.classList.remove("menu-popup--active");
}