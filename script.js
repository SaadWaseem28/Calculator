"use strict";
let string = "";
let buttons = document.querySelectorAll(".button");
let deleteBtn = document.querySelector(".deleteBtn");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (event) => {
    console.log(event.target);
    let btnPressed = event.target.innerHTML;
    if (btnPressed == "RESET") {
      string = "";
      document.querySelector(".display-content").value = string;
    } else if (btnPressed == "=") {
      console.log(string);
      let lastString = string.slice(-1);
      if (lastString == "+") {
        document.querySelector(".display-content").value = "Invalid Input";
      }
      string = eval(string);
      document.querySelector(".display-content").value = string;
    } else {
      string += event.target.innerHTML;
      document.querySelector(".display-content").value = string;
    }
  });
}
deleteBtn.addEventListener("click", () => {
  string = string.substring(0, string.length - 1);
  document.querySelector(".display-content").value = string;
});
