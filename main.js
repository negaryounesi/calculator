let clearAll = document.querySelector(".clearAll");
let clear = document.querySelector(".clear");
let equal = document.querySelector(".equal");
let display = document.querySelector(".display");
let keyAll = document.querySelectorAll(".displayShow");
let result, text, btnRes;



function showDisplay(event) {
    btnRes = event.target.innerText;
    if (display.innerHTML == 0) {
        return display.innerHTML = btnRes;
    }
    else {
        return display.innerHTML += event.target.innerText;
    }

}
function calc() {
    result = display.innerText;
    display.innerText = eval(result)
}

function ClearAll() {
    display.innerText = 0;
}

function Clear() {
    text = display.innerText;
    if (text.length == 1) {
        display.innerText = 0;
    }
    else
        display.innerText = text.substring(0, text.length - 1)
}
//event
keyAll.forEach(item => {
    item.addEventListener("click", showDisplay)
})
equal.addEventListener("click", calc);
clearAll.addEventListener("click", ClearAll);
clear.addEventListener("click", Clear)

