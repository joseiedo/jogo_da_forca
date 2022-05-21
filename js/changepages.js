//---------FUNÇÕES DE ALTERAÇÃO ENTRE AS PÁGINAS
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

function reload() {
  location.reload();
}
