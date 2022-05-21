///---------VARIÁVEIS
const menuSection = document.querySelector(".menu-section");
const gameSection = document.querySelector(".game-section");
const newWordSection = document.querySelector(".new-word-section");
const victoryPage = document.querySelector(".victory-section");
const defeatPage = document.querySelector(".defeat-section");
const botaoSalvar = document.querySelector(".btn-salvarpalavra");
let inputPalavra = document.querySelector(".inputPalavra");
let inputCategoria = document.querySelector(".inputCategoria");

const hearts = document.getElementById("hearts");

const maximoLenPalavra = 8;
let actualPage = menuSection;
let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
const palavras = [
  (palavra1 = {
    nome: "IRLANDA",
    categoria: "LUGARES",
  }),
  (palavra2 = {
    nome: "EQUADOR",
    categoria: "LUGARES",
  }),
  (palavra3 = {
    nome: "CREGUENHEM",
    categoria: "LUGARES",
  }),
  (palavra4 = {
    nome: "BICICLETA",
    categoria: "TRANSPORTE",
  }),
  (palavra5 = {
    nome: "MOTOCICLETA",
    categoria: "TRANSPORTE",
  }),
];

//-------

criarPalavraSecreta();
function criarPalavraSecreta() {
  const indexPalavra = parseInt(Math.random() * palavras.length);

  palavraSecretaSorteada = palavras[indexPalavra].nome;
  palavraSecretaCategoria = palavras[indexPalavra].categoria;
}

console.log(palavraSecretaSorteada);

montarPalavraNaTela();
function montarPalavraNaTela() {
  const categoria = document.getElementById("categoria");
  categoria.innerHTML = palavraSecretaCategoria;

  const palavraTela = document.getElementById("palavra-secreta");
  palavraTela.innerHTML = "";

  for (i = 0; i < palavraSecretaSorteada.length; i++) {
    if (listaDinamica[i] == undefined) {
      listaDinamica[i] = "&nbsp;";
      palavraTela.innerHTML =
        palavraTela.innerHTML +
        "<div class='letras'>" +
        listaDinamica[i] +
        "</div>";
    } else {
      palavraTela.innerHTML =
        palavraTela.innerHTML +
        "<div class='letras'>" +
        listaDinamica[i] +
        "</div>";
    }
  }
}

function verificaLetraEscolhida(letra) {
  document.getElementById("tecla-" + letra).disabled = true;
  if (tentativas > 0) {
    mudarStyleLetra("tecla-" + letra);
    comparalistas(letra);
    montarPalavraNaTela();
  }
}

function mudarStyleLetra(tecla) {
  document.getElementById(tecla).style.background = "#303841";
  document.getElementById(tecla).style.color = "#ca3116";
}

function comparalistas(letra) {
  const pos = palavraSecretaSorteada.indexOf(letra);
  if (pos < 0) {
    tentativas--;
    carregaImagemForca();
    removeCoracao();
    if (tentativas == 0) {
      goToDefeatpage();
    }
  } else {
    for (i = 0; i < palavraSecretaSorteada.length; i++) {
      if (palavraSecretaSorteada[i] == letra) {
        listaDinamica[i] = letra;
      }
    }
  }

  let vitoria = true;
  for (i = 0; i < palavraSecretaSorteada.length; i++) {
    if (palavraSecretaSorteada[i] != listaDinamica[i]) {
      vitoria = false;
    }
  }

  if (vitoria == true) {
    tentativas = 0;
    goToVictoryPage();
  }
}

function carregaImagemForca() {
  var img = document.querySelector("#forca");
  switch (tentativas) {
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

// abaixo são interações entre as páginas
function goToGamePage() {
  actualPage.classList.add("hide");
  gameSection.classList.remove("hide");

  actualPage = gameSection;
}

function goToNewWordPage() {
  actualPage.classList.add("hide");
  newWordSection.classList.remove("hide");

  actualPage = newWordSection;
}

function returnToMenu() {
  actualPage.classList.add("hide");
  menuSection.classList.remove("hide");

  actualPage = menuSection;
}

function goToDefeatpage() {
  actualPage.classList.add("hide");
  defeatPage.classList.remove("hide");

  actualPage = defeatPage;
}

function goToVictoryPage() {
  actualPage.classList.add("hide");
  victoryPage.classList.remove("hide");

  actualPage = victoryPage;
}

function reiniciar() {
  location.reload();
}

function removeCoracao() {
  const lastHeart = hearts.lastElementChild;
  lastHeart.src = "./img/heart-death.gif";

  setTimeout(() => {
    hearts.removeChild(lastHeart);
  }, 2500);
}

function enviar() {
  if (!isNaN(inputPalavra.value)) {
    inputPalavra.value = "";
    inputPalavra.placeholder = "APENAS LETRAS PERMITIDAS.";
    inputPalavra.focus();
    return false;
  }

  if (inputPalavra.value.length > 8) {
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
