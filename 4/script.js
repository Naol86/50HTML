const input = document.querySelector(".input");
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  input.classList.toggle("active");
});
