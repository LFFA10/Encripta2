document.getElementById('encryptBtn').addEventListener('click', function() {
    const text = document.getElementById('textInput').value;
    const encryptedText = encrypt(text);
    displayMessage(encryptedText);
});

document.getElementById('decryptBtn').addEventListener('click', function() {
    const text = document.getElementById('textInput').value;
    const decryptedText = decrypt(text);
    displayMessage(decryptedText);
});

function encrypt(text) {
    // Aquí va tu lógica de encriptación
    return text.split('').reverse().join(''); // Ejemplo simple de inversión de texto
}

function decrypt(text) {
    // Aquí va tu lógica de desencriptación
    return text.split('').reverse().join(''); // Ejemplo simple de inversión de texto
}

function displayMessage(message) {
    const outputMessage = document.querySelector('.output-message p');
    outputMessage.textContent = message ? message : 'Ningún mensaje fue encontrado';
}
