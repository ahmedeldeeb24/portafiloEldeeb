
var typed = new Typed(".text", {
  strings: ["Frontend", "Web Developer", "YouTuber"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});


let section = document.querySelector(".three");
let spans = document.querySelectorAll(".progress span");
window.onscroll = function () {
  if (window.scrollY >= section.offsetTop-1000) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};







