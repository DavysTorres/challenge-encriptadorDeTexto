document.addEventListener("DOMContentLoaded", function() {
    const encryptButton = document.querySelector(".encrypt-button");
    const decryptButton = document.querySelector(".decrypt-button");
    const textInput = document.querySelector(".text-input");
    const messageText = document.querySelector(".message-text");
    const subText = document.querySelector(".sub-text");
    const copyButton = document.querySelector(".copytext");
    const image = document.querySelector(".Imagen.descriptiva");
    const defaultMessage = document.querySelector(".areaRespueta .sub-text");

    function encriptar(texto) {
        return texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
    }

    function desencriptar(texto) {
        return texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
    }

    function updateUIWithResult(texto) {
        messageText.textContent = texto;
        image.style.display = "none";
        defaultMessage.style.display = "none";
        subText.textContent = "";
    }

    encryptButton.addEventListener("click", function() {
        const texto = textInput.value;
        const textoEncriptado = encriptar(texto);
        updateUIWithResult(textoEncriptado);
    });

    decryptButton.addEventListener("click", function() {
        const texto = textInput.value;
        const textoDesencriptado = desencriptar(texto);
        updateUIWithResult(textoDesencriptado);
    });

    copyButton.addEventListener("click", function() {
        const text = messageText.textContent;
        navigator.clipboard.writeText(text).then(() => {
            alert("Texto copiado al portapapeles");
        });
    });
});
