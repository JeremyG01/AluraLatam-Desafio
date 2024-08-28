const inputText = document.querySelector(".input-text");
const outputText = document.querySelector(".output-text");
const emptyState = document.querySelector(".empty-state");
const resultBox = document.querySelector(".result-box");
const encryptionKey = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
const allowedCharacters = /^[a-z !¡¿?,.]+$/;

function encrypt() {
    if (validateInput(inputText.value)) {
        const encryptedText = transformText(inputText.value, encryptionKey);
        displayResult(encryptedText);
    } else {
        alert("El texto solo debe contener letras minúsculas sin acentos ni caracteres especiales.");
        clearInput();
    }
}

function decrypt() {
    if (validateInput(inputText.value)) {
        const decryptedText = transformText(inputText.value, encryptionKey.map(([a, b]) => [b, a]));
        displayResult(decryptedText);
    } else {
        alert("El texto solo debe contener letras minúsculas sin acentos ni caracteres especiales.");
        clearInput();
    }
}

function validateInput(text) {
    return allowedCharacters.test(text);
}

function transformText(text, key) {
    key.forEach(([original, replacement]) => {
        text = text.replaceAll(original, replacement);
    });
    return text;
}

function displayResult(text) {
    outputText.value = text;
    emptyState.style.display = "none";
    resultBox.style.display = "block";
}

function clearInput() {
    inputText.value = "";
    outputText.value = "";
}

function copyToClipboard() {
    outputText.select();
    document.execCommand("copy");
    alert("El texto ha sido copiado al portapapeles.");
}