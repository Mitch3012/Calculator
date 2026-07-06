
const display = document.getElementById("display");
const valuesButtons = document.getElementsByClassName("values");

   for (let i = 0; i < valuesButtons.length; i++) {
  valuesButtons[i].addEventListener("click", function () {
        display.value += this.value;         
  });
}
function appendValue(value) {
  display.value += value;
}
function clearDisplay() {
  display.value = "";
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";}}