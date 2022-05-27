//-------------FUNÇÕES JOGO DA FORCA----------

pickRandomWord();
function pickRandomWord() {
  const indexPalavra = parseInt(Math.random() * palavras.length);

  secretWord = palavras[indexPalavra].nome;
  secretWordCategory = palavras[indexPalavra].categoria;
}

showWordInScreen();
function showWordInScreen() {
  const categoria = document.getElementById("categoria");
  categoria.innerHTML = secretWordCategory;

  const wordInScreen = document.getElementById("palavra-secreta");
  wordInScreen.innerHTML = "";

  for (i = 0; i < secretWord.length; i++) {
    if (dynamicList[i] == undefined) {
      dynamicList[i] = "&nbsp;";
      wordInScreen.innerHTML =
        wordInScreen.innerHTML +
        "<div class='letras'>" +
        dynamicList[i] +
        "</div>";
    } else {
      wordInScreen.innerHTML =
        wordInScreen.innerHTML +
        "<div class='letras'>" +
        dynamicList[i] +
        "</div>";
    }
  }
}

function checkChosenLetter(letra) {
  document.getElementById("tecla-" + letra).disabled = true;
  if (attempts > 0) {
    // changeLetterStyle("tecla-" + letra);
    compareLetter(letra);
    showWordInScreen();
  }
}

function letraErrada(tecla) {
  document.getElementById(tecla).style.background = "red";
  document.getElementById(tecla).style.border = "#d72";
  document.getElementById(tecla).style.color = "#eee";
}

function letraCerta(tecla) {
  document.getElementById(tecla).style.background = "green";
  document.getElementById(tecla).style.border = "#d72";
  document.getElementById(tecla).style.color = "#eee";
}

function compareLetter(letra) {
  const pos = secretWord.indexOf(letra);
  if (pos < 0) {
    attempts--;
    loadForca();
    letraErrada("tecla-" + letra);
    if (attempts == 0) {
      goToDefeatpage();
    }
  } else {
    letraCerta("tecla-" + letra);
    for (i = 0; i < secretWord.length; i++) {
      if (secretWord[i] == letra) {
        dynamicList[i] = letra;
      }
    }
  }

  let victory = true;
  for (i = 0; i < secretWord.length; i++) {
    if (secretWord[i] != dynamicList[i]) {
      victory = false;
    }
  }

  if (victory == true) {
    attempts = 0;
    goToVictoryPage();
  }
}

function loadForca() {
  var img = document.querySelector("#forca");

  //baseado na quantidade de attempts, mostra a a imagem de como está a forca
  switch (attempts) {
    case 5:
      img.setAttribute("src", "./img/tentativa-1.svg");
      break;
    case 4:
      img.setAttribute("src", "./img/tentativa-2.svg");
      break;
    case 3:
      img.setAttribute("src", "./img/tentativa-3.svg");
      break;
    case 2:
      img.setAttribute("src", "./img/tentativa-4.svg");
      break;
    case 1:
      img.setAttribute("src", "./img/tentativa-5.svg");
      break;
    case 0:
      img.setAttribute("src", "./img/tentativa-6.svg");
      break;
    default:
      img.setAttribute("src", "./img/Vectorforca.svg");
      break;
  }
}

function sendWord() {
  if (!isNaN(inputPalavra.value)) {
    inputPalavra.value = "";
    inputPalavra.placeholder = "APENAS LETRAS.";
    inputPalavra.focus();
    return false;
  }

  if (inputPalavra.value.length > maxLen) {
    inputPalavra.value = "";
    inputPalavra.placeholder = "MÁXIMO DE 8 LETRAS";
    inputPalavra.focus();
  }

  if (inputPalavra.value == "") {
    inputPalavra.focus();
    return false;
  } else if (inputCategoria.value == "") {
    inputCategoria.focus();
    return false;
  } else {
    palavras.push(
      (palavra6 = {
        nome: inputPalavra.value,
        categoria: inputCategoria.value,
      })
    );

    inputPalavra.value = "";
    inputCategoria.value = "";
    returnToMenu();
  }
}
