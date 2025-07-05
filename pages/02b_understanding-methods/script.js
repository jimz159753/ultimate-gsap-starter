import gsap from "gsap";

const animation = gsap.to(".box", {
    opacity: 1,
    rotation: 360,
    borderRadius: "50%",
    scale: 1.5,
    duration: 2,
});

const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const reverse = document.querySelector(".reverse");
const restart = document.querySelector(".restart");
const resume = document.querySelector(".resume");
const repeat = document.querySelector(".repeat");
const kill = document.querySelector(".kill");
const yoyo = document.querySelector(".yoyo");

play.addEventListener("click", () => {
    animation.play();
});

pause.addEventListener("click", () => {
    animation.pause();
});

reverse.addEventListener("click", () => {
    animation.reverse();
});

restart.addEventListener("click", () => {
    animation.restart();
});

resume.addEventListener("click", () => {
    animation.resume();
});

repeat.addEventListener("click", () => {
    animation.repeat(2);
});

kill.addEventListener("click", () => {
    animation.kill();
});

yoyo.addEventListener("click", () => {
    animation.yoyo();
});