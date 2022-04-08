import gsap from "gsap";

export function fadeIn(done) {
   console.log('fadeIn')
   gsap.from("p", {
      duration: 3,
      opacity: 0,
      onComplete: done
    });
}

export function fadeOut(done) {
   gsap.to("p", {
      duration: 3,
      opacity: 0,
      onComplete: done
    });
}