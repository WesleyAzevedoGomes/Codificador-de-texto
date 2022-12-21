function Codificador() {
  const btnEncrypt = document.querySelector(".btn-encrypt"); // button criptografar
  const btnDecrypt = document.querySelector(".btn-decrypt"); // button descriptografar
  const inputEncrypt = document.querySelector(".input-encrypt-encrypt"); // input 1
  const encryptResult = document.querySelector(".input-encrypt-result"); // resultado input
  const encryptCopy = document.querySelector(".encrypt-copy"); // copiar resultado

  btnEncrypt.addEventListener("click", (e) => {
    e.preventDefault();
    const n = inputEncrypt.value;
    if (!n) {
      alert("Digite algo!!");
      return;
    }
    encrypt = (n) => {
      const text = n.split("");
      text.map((e, i) => {
        if (e == "a") {
          text[i] = "ai";
        } else if (e == "e") {
          text[i] = "enter";
        } else if (e == "i") {
          text[i] = "imes";
        } else if (e == "o") {
          text[i] = "ober";
        } else if (e == "u") {
          text[i] = "ufat";
        }
      });
      return text.join("");
    };
    console.log(encrypt(n));
    encryptResult.setAttribute("value", encrypt(n));
  });

  btnDecrypt.addEventListener("click", (e) => {
    e.preventDefault();
    const textEncrypt = inputEncrypt.value;
    if (inputEncrypt.value === "") {
      alert("Digite algo!!");
    } else {
      const resultDes = textEncrypt
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
      encryptResult.setAttribute("value", resultDes);
      inputEncrypt.value = "";
    }
  });
  encryptCopy.addEventListener("click", (e) => {
    e.preventDefault();
    let textCopy = encryptResult;
    textCopy.select();
    textCopy.setSelectionRange(0, 99999);
    document.execCommand("copy");
  });
}
Codificador();

/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação
/

/ Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação
*/
