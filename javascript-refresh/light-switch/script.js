const btn = document.querySelector(".btn");
const text = document.querySelector(".displayed-text");
const container = document.querySelector(".container");

btn.addEventListener("click", function () {
  if (container.classList.contains("bgr-color")) {
    text.textContent = "Room is dark 🌙";
    btn.textContent = "Turn on light";
  } else {
    text.textContent = "Room is bright ☀️";
    btn.textContent = "Turn off light";
  }
  container.classList.toggle("bgr-color");
  text.classList.toggle("text-color");
});
