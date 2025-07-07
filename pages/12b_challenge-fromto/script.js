import gsap from "gsap";

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    gsap.fromTo(
      button,
      {
        y: -150,
        scale: 1,
        rotateY: 0
      },
      {
        rotateY: 360,
        y: 0,
        scale: 1.5  ,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.inOut',
        onComplete: () => {
            gsap.set(button, {
                opacity: 1,
                y: 0,
                scale: 1
            })
        }
      }
    );
  });
});
