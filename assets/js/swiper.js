// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// init Swiper:
var swiper = new Swiper(".mySwiper", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  spaceBetween: 24,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    992: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1.1,
    },
  },
});

var swiper1 = new Swiper(".mySwiper-1", {
  modules: [Autoplay],
  spaceBetween: 24,
  slidesPerView: 1,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

var swiper2 = new Swiper(".mySwiper-2", {
  // configure Swiper to use modules
  modules: [Navigation],
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
    0: {
      slidesPerView: 1,
    },
  },
  spaceBetween: 4,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next-2",
    prevEl: ".swiper-button-prev-2",
  },
});
