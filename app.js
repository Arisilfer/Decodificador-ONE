const textInsert = document.getElementById("textInsert");
const noneMsg = document.getElementById("noneMsg");
const btnCrypt = document.getElementById("btnCrypt");
const btnDecrypt = document.getElementById("btnDecrypt");
const menino = document.getElementById("menino");
const btnCopy = document.getElementById("btnCopy");
const infoMsg = document.getElementById("infoMsg");
const right = document.getElementById("right");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

let replace = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

const displayResult = (newValue) => {
    noneMsg.innerHTML = newValue;
    menino.classList.add("hide");
    menino.style.display = "none";
    infoMsg.style.display = "none";
    btnCopy.style.display = "block";
    right.classList.add("result");
    noneMsg.classList.add("result");
    textInsert.value = "";
};

//função crypt

function crypt(newText) {
    for(let i = 0; i < replace.length; i++){
        if (newText.includes(replace[i][0])){
            newText = newText.replaceAll(replace[i][0], replace[i][1])
           };
        };
    return newText;
   };

btnCrypt.addEventListener("click", () => {
 const text = textInsert.value.toLowerCase()
    if(text != "") {
     crypt(text)
    } 
    else{
        alert("Digite um texto para encriptar.");
    }


displayResult(crypt(text));


});
//Função decrypt

function decrypt(newText) {
    for (let i = 0; i< replace.length; i++){
        newText = newText.replaceAll(replace[i][1], replace [i][0]);
    }
    return newText;
}

btnDecrypt.addEventListener("click", () => {
    const text = textInsert.value.toLowerCase();
    if(text != "") {
        decrypt(text)
    }
    else {
        alert("Digite um texto para desencriptar.");
    }
displayResult (decrypt(text));
});

btnCopy.addEventListener("click", () => {
    let text = noneMsg.innerHTML;
    navigator.clipboard.writeText(text).then(() => {
        alert("Texto Copiado");

        noneMsg.innerHTML = "";
        menino.classList.remove("hide");
        menino.style.display = "block"; // Torna a imagem visível novamente
        infoMsg.style.display = "block";
        btnCopy.style.display = "none";
        right.classList.remove("result");
        noneMsg.classList.remove("result");
        textInsert.focus();
    }).catch(err => {
        console.error("Falha ao copiar o texto: ", err);
    });
});
