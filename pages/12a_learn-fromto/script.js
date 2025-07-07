import gsap from "gsap";

const bars = document.querySelectorAll(".bar");

bars.forEach((bar, idx) => {
  gsap.fromTo(
    bar,
    {
      scaleY: 0.4,
    },
    {
      scaleY: 1.6,
      duration: 0.6,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: idx * 0.1,
    }
  );
});
