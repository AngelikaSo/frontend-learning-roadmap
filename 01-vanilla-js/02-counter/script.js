const counterDisplay = document.querySelector(".count");
const buttons = document.querySelectorAll(".btn");

let count = 0;

buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const action = e.target.dataset.action;

    if (action === "increase") {
      count++;
    } else if (action === "decrease") {
      count--;
    } else if (action === "reset") {
      count = 0;
    }
    updateUI();
  });
});

function updateUI() {
  counterDisplay.innerHTML = count;
  if (count > 0) {
    counterDisplay.style.color = "#239c33";
  } else if (count < 0) {
    counterDisplay.style.color = "#e71818";
  } else counterDisplay.style.color = "#000000";
}
