import gsap from "gsap";

const scrollToTop = document.querySelector(".scroll-to-top");
let isFloating = false;

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    scrollToTop.classList.add("show");

    if (!isFloating) {
      gsap.to(scrollToTop, {
        y: -10,
        duration: 1,
        repeat: -1,
        yoyo: true,
        animation: "sine.out",
      });

      isFloating = false;
    }
  } else {
    scrollToTop.classList.remove("show");
  }
});

scrollToTop.addEventListener('mouseenter', () => {
    gsap.to(scrollToTop, {
        scale: 1.1,
        duration: 0.2,
    })
})

scrollToTop.addEventListener('mouseleave', () => {
    gsap.to(scrollToTop, {
        scale: 1,
        duration: 0.2,
    })
})

scrollToTop.addEventListener('click', () => {
    window.scrollTo(0, 0);
})