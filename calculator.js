let display = document.getElementById("display");
function append(value) {
    if (display.innerText === "0") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = "0";
}

function deleteOne() {
    let text = display.innerText;
    if (text.length === 1) {
        display.innerText = "0";
    } else {
        display.innerText = text.slice(0, -1);
    }
}

function calculate() {
    try {
        let exp = display.innerText;
        exp = exp.replaceAll("%", "/100");
        display.innerText = eval(exp);
    } catch {
        display.innerText = "Error";
    }
}