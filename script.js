"use strict";
document
  .querySelector(".humburger-menu")
  .addEventListener("click", function () {
    document.querySelector(".navbar").classList.toggle("change");
    document.querySelectorAll(".section").forEach((item) => {
      item.classList.toggle("change");
    });
    document.querySelector(".humburger-menu").classList.toggle("hide");
    document.querySelector(".close").classList.toggle("hide");
  });
document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".navbar").classList.toggle("change");
  document.querySelectorAll(".section").forEach((item) => {
    item.classList.toggle("change");
  });
  document.querySelector(".humburger-menu").classList.toggle("hide");
  document.querySelector(".close").classList.toggle("hide");
});

//Video Controls/////

const video = document.querySelector(".team-video");
const btn = document.querySelector(".buttons i");
const bar = document.querySelector(".video-bar");

const playPause = () => {
  if (video.paused) {
    video.play();
    btn.className = "far fa-pause-circle";
    video.style.opacity = 0.8;
  } else {
    video.pause();
    btn.className = "far fa-play-circle";
    video.style.opacity = 0.4;
  }
};
// play/pause
btn.addEventListener("click", () => {
  playPause();
});
//

// Video Bar
video.addEventListener("timeupdate", () => {
  const barWidth = video.currentTime / video.duration;
  bar.style.width = `${barWidth * 100}%`;
  if (video.ended) {
    btn.className = "far fa-play-circle";
    video.style.opacity = 0.4;
  }
});
// Swiper
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  // pagination: {
  //   el: ".swiper-pagination",
  // },
});
