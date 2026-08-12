let inp = document.querySelector("#inp");
let limitText = document.querySelector("#limit-text");
let count;
inp.addEventListener("input", function () {
  count = inp.value.length;
  limitText.textContent = `${count} / 20`;
});
