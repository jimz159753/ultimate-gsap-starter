import gsap from 'gsap';

const card = document.querySelector('#card');


card.addEventListener('mouseover', () => {
    gsap.to(card, {
        rotateY: 180,
        duration: 1,
        ease: 'power2.out'
    })
})

card.addEventListener('mouseleave', () => {
    gsap.to(card, {
        rotateY: 0,
        duration: 1,
        ease: 'power2.out'
    })
})