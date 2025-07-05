gsap.to(".card", {
  opacity: 1,
  duration: 2,
  ease: "power2.inOut",
  onComplete: () => {
    gsap.to(".card", {
      y: -20,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
    });
  },
});