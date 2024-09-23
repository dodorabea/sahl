const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical', // vertical, horizontal
  gestureDirection: 'vertical', // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const section_1 = document.getElementById("vertical");
const timeln = gsap.timeline({ paused: true });
const col_left = document.querySelector(".col_left");

timeln.fromTo(col_left, {y: 0}, {y: '170vh', duration: 1, ease: 'none'}, 0);

const scroll_1 = ScrollTrigger.create({
  animation: timeln,
  trigger: section_1,
  start: 'top top',
  end: 'bottom center',
  scrub: true
});
gsap.registerPlugin(ScrollTrigger);
/*============================================================*/
let revealContainers = document.querySelectorAll(".reveal");

revealContainers.forEach((container) => {
  let image = container.querySelector("img");
  let tl = gsap.timeline({
      scrollTrigger: {
          trigger: container,
          toggleActions: "restart none none reset"
      }
  });

  tl.set(container, {
      autoAlpha: 1
  });
  tl.from(container, 1.5, {
      xPercent: -100,
      ease: Power2.out
  });
  tl.from(image, 1.5, {
      xPercent: 100,
      scale: 1.3,
      delay: -1.5,
      ease: Power2.out
  });
});








