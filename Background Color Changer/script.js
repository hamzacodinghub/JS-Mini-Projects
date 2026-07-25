let changeBtn = document.querySelector("#changeBtn");
let colorName = document.querySelector("#colorName");
let body = document.querySelector("body");
let randomIndex;
let colorPicked;
let colorsList = [
  {
    color: "red",
  },
  { color: "orange" },
  { color: "yellow" },
  { color: "green" },
  { color: "blue" },
  { color: "purple" },
  { color: "pink" },
  { color: "brown" },
  { color: "black" },
  { color: "white" },
  { color: "gray" },
];
function changeText() {
  colorName.value = colorPicked;
}
function selectColor() {
  randomIndex = Math.floor(Math.random() * colorsList.length);
  colorPicked = colorsList[randomIndex].color;
}
selectColor();
function changeColor() {
  body.style.backgroundColor = colorPicked;
}
changeBtn.addEventListener("click", function () {
  selectColor();
  changeColor();
  changeText();
});
selectColor();
changeColor();
changeText();
