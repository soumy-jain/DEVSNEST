var screen = document.querySelector("input");
var btns = document.querySelectorAll("button");
var result = "";
console.log(btns);

btns.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (button.innerText == "AC") {
      result = "";
      screen.value = "";
    } else if (button.innerText == "=") {
      result = eval(result).toFixed(4);
      var p = result.indexOf(".");
      if (p != -1) {
        var s = result.slice(p + 1, result.length - 1);
        if (eval(s) == 0) {
          result = result.slice(0, p);
        }
      }
      screen.value = result;
    } else if (button.innerText == "⌫") {
      result = result.slice(0, -1);
      screen.value = result;
    } else {
      result += button.innerText;
      screen.value = result;
    }
    console.log(5);
  });
});
