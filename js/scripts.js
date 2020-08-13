// @prepros-append vendor/jquery-3.3.1.min.js
// @prepros-append vendor/popper.min.js
// @prepros-append vendor/bootstrap.min.js
// @prepros-append vendor/owl.carousel.min.js
// @prepros-append vendor/aos.js
// @prepros-append vendor/isotope.pkgd.min.js
// @prepros-append vendor/jquery.animateNumber.min.js
// @prepros-append vendor/jquery.waypoints.min.js
// @prepros-append vendor/TweenMax.min.js
// @prepros-append vendor/jquery.easing.1.3.js
// @prepros-append vendor/jarallax.min.js
// @prepros-append vendor/jarallax-video.min.js
// @prepros-append vendor/jquery.validate.min.js
// @prepros-append vendor/jquery.fancybox.min.js
// @prepros-append vendor/stickyfill.min.js
// @prepros-append vendor/imagesloaded.pkgd.min.js
// @prepros-append vendor/ScrollMagic.min.js
// @prepros-append vendor/scrollmagic.animation.gsap.min.js
var tl = new TimelineMax({ onUpdate: updatePercentage });
const control = new ScrollMagic.Controller();
var kick = document.querySelector(".sometext");
var scooter = document.querySelector(".scooterimg");
var pop = document.querySelector(".popup");

if (window.innerWidth > 700) {
  tl.to(kick, 0.8, { y: -70, opacity: 0, fontSize: "110px" });
  tl.to(scooter, 1.5, { x: -250, opacity: 1 }, "=-1.5");
  tl.from(pop, 0.8, { x: -30, opacity: 0 });
}

if (window.innerWidth > 600 && window.innerWidth <= 700) {
  tl.to(kick, 0.8, { y: -70, opacity: 0, fontSize: "90px" });
  tl.to(scooter, 1.5, { x: -250, opacity: 1 }, "=-1.5");
  tl.from(pop, 0.8, { x: -30, opacity: 0 });
}

if (window.innerWidth > 560 && window.innerWidth <= 600) {
  tl.to(kick, 0.8, { y: -70, opacity: 0, fontSize: "90px" });
  tl.to(scooter, 1.5, { x: -200, opacity: 1 }, "=-1.5");
  tl.from(pop, 0.8, { x: -30, opacity: 0 });
}

if (window.innerWidth > 510 && window.innerWidth <= 560) {
  tl.to(kick, 0.8, { y: -70, opacity: 0, fontSize: "80px" });
  tl.to(scooter, 1.5, { x: -200, opacity: 1 }, "=-1.5");
  tl.from(pop, 0.8, { x: -30, opacity: 0 });
}

if (window.innerWidth > 445 && window.innerWidth <= 510) {
  tl.to(kick, 0.8, { y: -70, opacity: 0, fontSize: "70px" });
  tl.to(scooter, 1.5, { x: -200, opacity: 1 }, "=-1.5");
  tl.from(pop, 0.8, { x: -30, opacity: 0 });
}

if (window.innerWidth > 400 && window.innerWidth <= 445) {
  tl.to(kick, 0.8, { y: -70, opacity: 0, fontSize: "60px" });
  tl.to(scooter, 1.5, { x: -150, opacity: 1 }, "=-1.5");
  tl.from(pop, 0.8, { x: -30, opacity: 0 });
}

if (window.innerWidth <= 400) {
  tl.to(kick, 0.8, { y: -70, opacity: 0, fontSize: "50px" });
  tl.to(scooter, 1.5, { x: -150, opacity: 1 }, "=-1.5");
  tl.from(pop, 0.8, { x: -30, opacity: 0 });
}

console.log(window.innerWidth);
const scene = new ScrollMagic.Scene({
  triggerElement: "",
  triggerHook: "onLeave",
  duration: "100%",
})
  .setPin(".hero")
  .setTween(tl)
  .addTo(control);

function updatePercentage() {
  tl.progress();
  console.log(tl.progress());
}
