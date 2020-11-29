/*! GSAP related scripts */

//------------------------------------
// GSAP Register Plugins

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);





//------------------------------------
// GSAP ScrollTo

let scsseco_scrollTo = document.querySelectorAll(".scsseco_scrollTo");

scsseco_scrollTo.forEach(function (el, index) {
  el.addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    gsap.to(window, {
      duration: 1, 
      scrollTo: el.getAttribute("href")
    });
  });
});





//------------------------------------
// GSAP Animations
const patrat = document.querySelector(".patrat");

const tl = gsap.timeline({
  defaults: { // children inherit these defaults
    duration: 1,
    ease: "linear" 
  }
});

tl
  .to(patrat, {
    duration: 3,
    x: 300,
    y: -260,
    rotate: 360,
  })

ScrollTrigger.create({
  animation: tl,
  trigger: patrat,
  start: "top center",
  end: "bottom center",
  markers: true,
  // scrub: 3
});