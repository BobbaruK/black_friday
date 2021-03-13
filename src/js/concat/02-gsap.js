/*! GSAP related scripts */

//------------------------------------
// GSAP Register Plugins

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);





//------------------------------------
// GSAP Media query watcher

function installMediaQueryWatcher(mediaQuery, layoutChangedCallback) {

  var mql = window.matchMedia(mediaQuery);
  mql.addEventListener("change", function (e) { return layoutChangedCallback(e.matches); });
  layoutChangedCallback(mql.matches);

}





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
const burger = document.getElementById("burger");
const menu = document.querySelector(".menu");
const menu_elems = document.querySelectorAll(".menu li a span");
const menu_p = document.querySelector(".menu p")
const menu_close = document.querySelector(".close");


  // Menu
let menu_anim_in = gsap.timeline({
  paused: true,
  defaults: { // children inherit these defaults
    duration: .32,
    ease: "power2.in"
  }
});
  
menu_anim_in
  .set(menu, {
    borderRadius: "0 0 50% 0"
  })
  .to(menu, {
    top: 0,
    duration: .4,
  })
  .to(menu, {
    borderRadius: 0,
    rotation: 0,
    duration: .4,
    ease: "back"
  })
  .from(menu_close, { 
    rotate: 360, 
    duration: .4, 
  }, "<")
  .from(menu_elems, {
    opacity: 0,
    xPercent: -100,
    stagger: .1,
    ease: "back"
  }, "<")
  .from(menu_p, {
    opacity: 0
  }, "<")

let menu_anim_out = gsap.timeline({
  paused: true,
  defaults: { // children inherit these defaults
    duration: .32,
    ease: "none" ,
  }
});

menu_anim_out
  .set(menu, {
    transformOrigin: "top right",
  })
  .to(menu, {
    borderRadius: "50% 0 0 0",
    // duration: .4,
  })
  .to(menu_close, {
    rotate: -360,
    yPercent: -70,
    xPercent: 150,
    duration: .4,
  }, "<")
  .to(menu_elems, {
    opacity: 0,
    xPercent: 100,
    stagger: .1,
    ease: "back",
  }, "<")
  .to(menu_p, {
    opacity: 0
  }, "<")
  .to(menu, {
    rotate: -25,
    ease: "back",
    duration: .4,
  }, "-=.3")
  .to(menu, {
    top: "100%",
    duration: .4,
    clearProps: true
  })
  

installMediaQueryWatcher("(min-width: 992px)", function(matches) {

  if (matches) {

    gsap.set(menu_elems, { clearProps:true })

    gsap.set(menu, { clearProps:true })

  } else {
    
    gsap.set(menu_elems, {
      opacity: 0,
      xPercent: -300,
    })

  }

});

burger.addEventListener("click", (e) => { 
  gsap.set("body", { overflow: "hidden" })
  gsap.set(menu_close, { clearProps: true })
  menu_anim_in.restart(); 
})

menu_close.addEventListener("click", (e) => { 
  menu_anim_out.restart();
  gsap.set("body", {
    clearProps: true,
  })
})



  // Header Cog wheel icon
const header_cog = document.querySelector(".cogUser__cog");

let header_cog_hover_anim = gsap.timeline({
  repeat: -1,
  paused: true,
  defaults: { // children inherit these defaults
    ease: "none",
    duration: 8,
  }

});

gsap.set(header_cog, { transformOrigin: "center" })

header_cog_hover_anim.to(header_cog, { rotate: 360 })

header_cog.addEventListener("mouseenter", () => { header_cog_hover_anim.play(); })

header_cog.addEventListener("mouseleave", () => { header_cog_hover_anim.pause(); })





  // Header User icon
const header_userIcon = document.querySelector(".cogUser__user");

let header_userIcon_hover_anim = gsap.timeline({
  repeat: -1,
  paused: true,
  defaults: { ease: "none" }
});

header_userIcon_hover_anim.fromTo(header_userIcon, { scale: 1.1 }, { scale: 1 })

header_userIcon.addEventListener("mouseenter", () => { header_userIcon_hover_anim.play(); })

header_userIcon.addEventListener("mouseleave", () => { header_userIcon_hover_anim.pause(); })




  // Header Cog Wheel/User modal
const modalButtons = document.querySelectorAll("[data-cssecomodaltarget]")
const modalWrapper_cog = document.getElementById("modal_cog")
const modalWrapper_user = document.getElementById("modal_user")
const modal_modal = document.querySelectorAll(".scssecoModal")

// console.log(modalButtons)
// console.log(modal_modal)

let modalAnimCog_tl = gsap.timeline({
  paused: true,
  defaults: { 
    duration: .4,
    ease: "circ.inOut",
  },
  onReverseComplete: () => { gsap.set(modalWrapper_cog, {clearProps: true}) },
})

modalAnimCog_tl
  .to(modalWrapper_cog, {
    left: 0,
  })
  .from(modal_modal[0], {
    opacity: 0,
    scale: 1.2,
    // ease: "back" 
  })

let modalAnimUser_tl = gsap.timeline({
  paused: true,
  defaults: { 
    duration: .4,
    ease: "circ.inOut"
  },
  onReverseComplete: () => { gsap.set(modalWrapper_user, {clearProps: true}) },
})

modalAnimUser_tl
  .to(modalWrapper_user, {
    right: 0,
  })
  .from(modal_modal[1], {
    opacity: 0,
    scale: 0,
    // ease: "back" 
  })

modalButtons.forEach(function(elem, index){
  
  elem.addEventListener("click", () => {

    switch(elem.getAttribute("data-cssecomodaltarget")) {
      case "cog":
        modalAnimCog_tl.play()
        break;
      case "user":
        modalAnimUser_tl.play()
        break;
      case "close":
        modalAnimCog_tl.reverse()
        modalAnimUser_tl.reverse()
        break;
      default:
    }
  })

})