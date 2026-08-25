let display = document.getElementById("display");

function appendValue(value) {

    if (display.innerText == "0") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }

}

function clearDisplay() {
    display.innerText = "0";
}

function percentage() {
    display.innerText = display.innerText / 100;
}

function calculate() {
    let value = display.innerText;

    value = value.replaceAll("×", "*");
    value = value.replaceAll("÷", "/");
    value = value.replaceAll("−", "-");

    display.innerText = eval(value);
}