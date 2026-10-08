// click the button and run the function

document.querySelector("#select-tea").addEventListener("click", selectTea);

// create a function where selections will determine the outcome

function selectTea() {
  // instructions
  // find the radio button that is currently checked
  const feelingChecked = document.querySelector(
    'input[name="feeling"]:checked',
  );
  const flavorChecked = document.querySelector('input[name="flavor"]:checked');
  const display = document.querySelector("#display");

  if (!feelingChecked || !flavorChecked) {
    display.innerHTML = "Select feeling and flavor";
    return;
  }

  const selectedFeelingValue = feelingChecked.value;
  const selectedFlavorValue = flavorChecked.value;

  // user has to select two options to get the recommendations
  if (
    (selectedFeelingValue === "tired" && selectedFlavorValue === "floral") ||
    (selectedFeelingValue === "energy" && selectedFlavorValue === "floral")
  ) {
    display.innerHTML =
      "<strong>Try: Earl Grey</strong><br>Bright, floral and comforting.<br>95&#176;C - 3-5min";
  } else if (
    selectedFeelingValue === "relax" &&
    selectedFlavorValue === "floral"
  ) {
    display.innerHTML =
      "<strong>Try: Chamomile Tea</strong><br>Soft, floral and calming.<br>95&#176;C - 5-7min";
  } else if (
    selectedFeelingValue === "relax" &&
    selectedFlavorValue === "fresh"
  ) {
    display.innerHTML =
      "<strong>Try: Peppermint Tea</strong><br>Cool, fresh and invigorating.<br>95&#176;C - 5-7min";
  } else if (
    selectedFeelingValue === "relax" &&
    selectedFlavorValue === "sweet"
  ) {
    display.innerHTML =
      "<strong>Try: Moroccan Mint Tea</strong><br>Fresh, sweet and aromatic.<br>90&#176;C - 3-5min";
  } else if (
    selectedFeelingValue === "relax" &&
    selectedFlavorValue === "earthy"
  ) {
    display.innerHTML =
      "<strong>Try: Chai Tea</strong><br>Warm, spicy and rich.<br>95&#176;C - 4-5min";
  } else if (
    selectedFeelingValue === "tired" &&
    selectedFlavorValue === "fresh"
  ) {
    display.innerHTML =
      "<strong>Try: Matcha</strong><br>Earthy, vibrant and refreshing.<br>80&#176;C - 1-2min";
  } else if (
    (selectedFeelingValue === "tired" && selectedFlavorValue === "earthy") ||
    (selectedFeelingValue === "energy" && selectedFlavorValue === "earthy") ||
    (selectedFeelingValue === "focus" && selectedFlavorValue === "earthy")
  ) {
    display.innerHTML =
      "<strong>Try: English Breakfast</strong><br>Bold, malty and energizing.<br>95&#176;C - 3-5min";
  } else if (
    (selectedFeelingValue === "tired" && selectedFlavorValue === "sweet") ||
    (selectedFeelingValue === "energy" && selectedFlavorValue === "fresh") ||
    (selectedFeelingValue === "focus" && selectedFlavorValue === "floral")
  ) {
    display.innerHTML =
      "<strong>Try: Jasmine Green Tea</strong><br>Light, floral and refreshing.<br>80&#176;C - 2-3min";
  } else if (
    selectedFeelingValue === "energy" &&
    selectedFlavorValue === "sweet"
  ) {
    display.innerHTML =
      "<strong>Try: Black Tea with Honey</strong><br>Bold, smooth and naturally energizing.<br>95&#176;C - 3-5min";
  } else if (
    selectedFeelingValue === "focus" &&
    selectedFlavorValue === "sweet"
  ) {
    display.innerHTML =
      "<strong>Try: Vanilla Black Tea</strong><br>Smooth, sweet and comforting.<br>95&#176;C - 3-5min";
  } else if (
    selectedFeelingValue === "focus" &&
    selectedFlavorValue === "fresh"
  ) {
    display.innerHTML =
      "<strong>Try: Peppermint Green Tea</strong><br>Cool, crisp and refreshing.<br>80&#176;C - 2-3min";
  }
}
