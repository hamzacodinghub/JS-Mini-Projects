let inp = document.querySelector("#inp");
let limitText = document.querySelector("#limit-text");
let count = 20;
let length;
inp.addEventListener("input", function () {
  length = count - inp.value.length;
  limitText.textContent = `${length} / 20`;
});
