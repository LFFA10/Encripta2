document.getElementById("encryptBtn").addEventListener("click", function() {
    let text = document.getElementById("textInput").value;
    let encryptedText = encrypt(text);
    displayMessage(encryptedText);
});

document.getElementById("decryptBtn").addEventListener("click", function() {
    let text = document.getElementById("textInput").value;
    let decryptedText = decrypt(text);
    displayMessage(decryptedText);
});

function encrypt(text) {
    // Reemplazar las letras minúsculas sin acentos por un cifrado simple (ejemplo de cifrado)
    return text.replace(/e/g, "enter")
               .replace(/i/g, "imes")
               .replace(/a/g, "ai")
               .replace(/o/g, "ober")
               .replace(/u/g, "ufat");
}

function decrypt(text) {
    // Revertir el cifrado
    return text.replace(/enter/g, "e")
               .replace(/imes/g, "i")
               .replace(/ai/g, "a")
               .replace(/ober/g, "o")
               .replace(/ufat/g, "u");
}

function displayMessage(message) {
    document.querySelector(".output-message p").innerText = message;
}
