const circles = document.querySelectorAll(".circle");
let activeCircle = 0;
const next = document.querySelector("#next");
const prev = document.querySelector("#previous");
const line = document.querySelector(".step");

next.addEventListener("click", () => {
  console.log("here");
  if (activeCircle < circles.length - 1) {
    activeCircle++;
    circles[activeCircle].classList.add("active");
  }
  if (activeCircle === circles.length - 1) next.disabled = true;
  if (activeCircle != 0) prev.disabled = false;
  line.style.width = `${activeCircle * 33.3333}%`;
});

prev.addEventListener("click", () => {
  if (activeCircle > 0) {
    circles[activeCircle].classList.remove("active");
    activeCircle--;
  }
  if (activeCircle === 0) {
    prev.disabled = true;
  }
  if (activeCircle != circles.length - 1) {
    next.disabled = false;
  }
  line.style.width = `${activeCircle * 33.333}%`;
});
