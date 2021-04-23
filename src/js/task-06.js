let inputValue = document.getElementById("validation-input");

let totalLenght = inputValue.getAttribute("data-length");
let intTotallenght = parseInt(totalLenght, 10);

inputValue.oninput = function() {
  if (inputValue.value.length === intTotallenght) {
    inputValue.classList.remove("invalid");
    inputValue.classList.add("valid");
  }
  if (inputValue.value.length === 0) {
    inputValue.classList.remove("valid");
    inputValue.classList.remove("invalid");
  }
  if (inputValue.value.length !== intTotallenght && inputValue.value.length !== 0) {
    inputValue.classList.add("invalid");
  }
};

// Напиши скрипт, который бы при потере фокуса на инпуте,
//  проверял его содержимое
// на правильное количество символов.
