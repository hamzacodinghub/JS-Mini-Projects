let txtInp = document.querySelector("#text-input");
let hideShowBtn = document.querySelector("#hide-show-btn");
let warning = document.querySelector("#warning");

function changeInputTypeAndBtnHtml() {
  if (txtInp.type === "text") {
    txtInp.type = "password";
    hideShowBtn.innerHTML = `<i class="fa-regular fa-eye-slash" style="color: rgb(255, 255, 255);"></i>`;
  } else {
    txtInp.type = "text";
    hideShowBtn.innerHTML = `<i class="fa-regular fa-eye" style="color: rgb(255, 255, 255)"></i>`;
  }
}

hideShowBtn.addEventListener("click", function () {
  changeInputTypeAndBtnHtml();
});
