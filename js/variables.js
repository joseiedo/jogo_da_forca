//---inicializando variaveis

const menuSection = document.querySelector(".menu-section");
const gameSection = document.querySelector(".game-section");
const newWordSection = document.querySelector(".new-word-section");
const victoryPage = document.querySelector(".victory-section");
const defeatPage = document.querySelector(".defeat-section");
let inputPalavra = document.querySelector(".inputPalavra");
let inputCategoria = document.querySelector(".inputCategoria");
const hearts = document.getElementById("hearts");
const maxLen = 8;
let actualPage = menuSection;
let attempts = 6;
let dynamicList = [];
let secretWordCategory;
let secretWord;
