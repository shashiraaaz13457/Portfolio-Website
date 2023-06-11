const cursor = document.querySelector('.cursor');
const cursor2 = document.querySelector('.border');

window.onmousemove = function(e) {
    const keyframe  = { top: `${e.clientY - 5 }px`, left: `${e.clientX - 5}px`};
    cursor.animate(keyframe, {
        fill: 'forwards',
        duration: 1800,
    });
    const keyframe2 = { top: `${e.clientY - 15 }px`, left: `${e.clientX - 15}px`};
    cursor2.animate(keyframe2, {
        fill: 'forwards',
        duration:1000,
    });
}
// Due to this the text is changing all text in heading
var typeData = new Typed(".role", {
    strings: [
      "Full Stack Developer",
      "Web Developer",
      "UI-UX Designer",
      "Backend Developer",
      "Coder",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
  });