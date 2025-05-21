"use strict";
var _a;
(_a = document.getElementById('calculadora')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', handleSubmit);
function getInputValue(elementId) {
    const inputElement = document.getElementById(elementId);
    const value = parseFloat(inputElement === null || inputElement === void 0 ? void 0 : inputElement.value);
    return isNaN(value) ? null : value;
}
function handleSubmit(event) {
    event.preventDefault();
    const num1 = getInputValue("num1");
    const num2 = getInputValue("num2");
    const result = document.getElementById("result");
    if (num1 != null && num2 != null) {
        const res = soma(num1, num2);
        if (result) {
            result.textContent = ` ${res}`;
        }
    }
    else {
        if (result) {
            result.textContent = `Erro`;
        }
    }
}
function soma(a, b) {
    return a + b;
}
