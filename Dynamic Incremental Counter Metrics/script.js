let counterValue = document.querySelector("#counter-value");
let addBtn = document.querySelector("#add");
let subBtn = document.querySelector("#subtract");
let updateValue = 0;

addBtn.addEventListener("click", function () {
  updateValue++;
  counterValue.textContent = updateValue;
});

subBtn.addEventListener("click", function () {
  updateValue--;
  counterValue.textContent = updateValue;
});
