const newCareerButton = document.getElementById("new-career-button");
const careerForm = document.getElementById("career-form");
const createCareerButton = document.getElementById("create-career-button");

const clubName = document.getElementById("club-name");
const season = document.getElementById("season");
const manager = document.getElementById("manager");
const country = document.getElementById("country");
const titles = document.getElementById("titles");
const budget = document.getElementById("budget");
const clubLogo = document.getElementById("club-logo");

const careersContainer = document.getElementById("careers-container");
const careerDetails = document.getElementById("career-details");

const detailsClubName = document.getElementById("details-club-name");
const detailsSeason = document.getElementById("details-season");
const detailsManager = document.getElementById("details-manager");

const backButton = document.getElementById("back-button");

const transfersButton = document.getElementById("transfers-button");
const transfersSection = document.getElementById("transfers-section");
const addTransferButton = document.getElementById("add-transfer-button");

const playerName = document.getElementById("player-name");
const playerPosition = document.getElementById("player-position");
const previousClub = document.getElementById("previous-club");
const transferValue = document.getElementById("transfer-value");
const transfersList = document.getElementById("transfers-list");

const salesButton = document.getElementById("sales-button");
const salesSection = document.getElementById("sales-section");
const addSaleButton = document.getElementById("add-sale-button");

const soldPlayerName = document.getElementById("sold-player-name");
const soldPlayerPosition = document.getElementById("sold-player-position");
const newClub = document.getElementById("new-club");
const saleValue = document.getElementById("sale-value");
const salesList = document.getElementById("sales-list");

const overviewButton = document.getElementById("overview-button");
const overviewSection = document.getElementById("overview-section");

const transfersCount = document.getElementById("transfers-count");
const salesCount = document.getElementById("sales-count");
const transferBalance = document.getElementById("transfer-balance");

const squadButton = document.getElementById("squad-button");
const squadSection = document.getElementById("squad-section");
const addSquadPlayerButton = document.getElementById("add-squad-player-button");

const squadPlayerName = document.getElementById("squad-player-name");
const squadPlayerPosition = document.getElementById("squad-player-position");
const squadPlayerNumber = document.getElementById("squad-player-number");
const squadPlayerOverall = document.getElementById("squad-player-overall");
const squadList = document.getElementById("squad-list");

const statsButton = document.getElementById("stats-button");
const statsSection = document.getElementById("stats-section");
const saveStatsButton = document.getElementById("save-stats-button");

const statsTitles = document.getElementById("stats-titles");
const statsPoints = document.getElementById("stats-points");
const statsTopScorer = document.getElementById("stats-top-scorer");
const statsTopScorerGoals = document.getElementById("stats-top-scorer-goals");
const statsBestCampaign = document.getElementById("stats-best-campaign");
const statsHighestPosition = document.getElementById("stats-highest-position");

const displayTitles = document.getElementById("display-titles");
const displayPoints = document.getElementById("display-points");
const displayTopScorer = document.getElementById("display-top-scorer");
const displayTopScorerGoals = document.getElementById("display-top-scorer-goals");
const displayBestCampaign = document.getElementById("display-best-campaign");
const displayHighestPosition = document.getElementById("display-highest-position");

const newSeasonButton = document.getElementById("new-season-button");

const historyButton = document.getElementById("history-button");
const historySection = document.getElementById("history-section");
const historyList = document.getElementById("history-list");

let totalTransfers = 0;
let totalSales = 0;
let initialBudget = 0;
let carreiraAtual = null;


// ========================================
// HISTÓRICO COMEÇA OCULTO
// ========================================

historySection.style.display = "none";


// ========================================
// NOVA CARREIRA
// ========================================

newCareerButton.addEventListener("click", function () {

    careerForm.style.display = "flex";

    careersContainer.style.display = "none";

    careerDetails.style.display = "none";

});


// ========================================
// CRIAR CARREIRA
// ========================================

createCareerButton.addEventListener("click", function () {

    const nomeClube = clubName.value.trim();
    const temporadaInicial = season.value.trim();
    const nomeTecnico = manager.value.trim();
    const pais = country.value.trim();
    const titulosIniciais = titles.value.trim();
    const orcamentoInicial = Number(budget.value) || 0;
    const logo = clubLogo.value.trim();


    if (
        nomeClube === "" ||
        temporadaInicial === "" ||
        nomeTecnico === ""
    ) {

        alert("Preencha o clube, a temporada e o técnico!");

        return;

    }


    const newCareer = document.createElement("article");

    newCareer.className = "career-card";


    if (logo !== "") {

        const logoElement = document.createElement("img");

        logoElement.src = logo;

        logoElement.alt = "Escudo do " + nomeClube;

        logoElement.className = "career-logo";

        newCareer.appendChild(logoElement);

    }


    const clubTitle = document.createElement("h3");

    clubTitle.textContent = nomeClube;


    const seasonText = document.createElement("p");

    seasonText.textContent = "Temporada: " + temporadaInicial;


    const managerText = document.createElement("p");

    managerText.textContent = "Técnico: " + nomeTecnico;


    const countryText = document.createElement("p");

    countryText.textContent = "País: " + (pais || "-");


    const viewButton = document.createElement("button");

    viewButton.textContent = "Ver Carreira";

    viewButton.className = "view-career-button";


    const removeButton = document.createElement("button");

    removeButton.textContent = "Remover";

    removeButton.className = "remove-career-button";


    newCareer.appendChild(clubTitle);

    newCareer.appendChild(seasonText);

    newCareer.appendChild(managerText);

    newCareer.appendChild(countryText);

    newCareer.appendChild(viewButton);

    newCareer.appendChild(removeButton);


    careersContainer.appendChild(newCareer);


    localStorage.setItem(
        "orcamento_" + nomeClube,
        orcamentoInicial
    );


    localStorage.setItem(
        "titulos_" + nomeClube,
        titulosIniciais || "0"
    );


    viewButton.addEventListener("click", function () {

        abrirCarreira(newCareer);

    });


    removeButton.addEventListener("click", function () {

        const confirmou = confirm(
            "Tem certeza que deseja remover esta carreira?"
        );


        if (confirmou) {

            newCareer.remove();

            localStorage.removeItem(
                "dados_" + nomeClube
            );

            localStorage.removeItem(
                "orcamento_" + nomeClube
            );

            localStorage.removeItem(
                "titulos_" + nomeClube
            );

            salvarCarreiras();

        }

    });


    careerForm.style.display = "none";

    careersContainer.style.display = "grid";


    clubName.value = "";

    season.value = "";

    manager.value = "";

    country.value = "";

    titles.value = "";

    budget.value = "";

    clubLogo.value = "";


    salvarCarreiras();

});


// ========================================
// ABRIR CARREIRA
// ========================================

function abrirCarreira(careerCard) {

    carreiraAtual = careerCard;


    const nome = careerCard.querySelector("h3");

    const temporada = careerCard.querySelectorAll("p")[0];

    const tecnico = careerCard.querySelectorAll("p")[1];


    detailsClubName.textContent = nome.textContent;

    detailsSeason.textContent = temporada.textContent;

    detailsManager.textContent = tecnico.textContent;


    careersContainer.style.display = "none";

    careerForm.style.display = "none";

    careerDetails.style.display = "block";


    historySection.style.display = "none";


    carregarDadosDaCarreira();

}


// ========================================
// VOLTAR
// ========================================

backButton.addEventListener("click", function () {

    salvarDadosDaCarreira();

    salvarCarreiras();


    careerDetails.style.display = "none";

    careerForm.style.display = "none";

    careersContainer.style.display = "grid";

});


// ========================================
// NAVEGAÇÃO
// ========================================

transfersButton.addEventListener("click", function () {

    transfersSection.scrollIntoView({
        behavior: "smooth"
    });

});


salesButton.addEventListener("click", function () {

    salesSection.scrollIntoView({
        behavior: "smooth"
    });

});


overviewButton.addEventListener("click", function () {

    overviewSection.scrollIntoView({
        behavior: "smooth"
    });

});


squadButton.addEventListener("click", function () {

    squadSection.scrollIntoView({
        behavior: "smooth"
    });

});


statsButton.addEventListener("click", function () {

    statsSection.scrollIntoView({
        behavior: "smooth"
    });

});


// ========================================
// MOSTRAR / OCULTAR HISTÓRICO
// ========================================

historyButton.addEventListener("click", function () {

    if (historySection.style.display === "none") {

        historySection.style.display = "block";

        historySection.scrollIntoView({
            behavior: "smooth"
        });

    } else {

        historySection.style.display = "none";

    }

});


// ========================================
// CONTRATAÇÕES
// ========================================

addTransferButton.addEventListener("click", function () {

    if (playerName.value.trim() === "") {

        alert("Digite o nome do jogador!");

        return;

    }


    const newTransfer = document.createElement("div");

    newTransfer.className = "transfer-card";


    const name = document.createElement("h3");

    name.textContent = playerName.value;


    const position = document.createElement("p");

    position.textContent = "Posição: " + playerPosition.value;


    const club = document.createElement("p");

    club.textContent = "Clube anterior: " + previousClub.value;


    const value = document.createElement("p");

    value.textContent =
        "Valor: €" +
        (transferValue.value || 0) +
        "M";


    newTransfer.appendChild(name);

    newTransfer.appendChild(position);

    newTransfer.appendChild(club);

    newTransfer.appendChild(value);


    transfersList.appendChild(newTransfer);


    totalTransfers += Number(transferValue.value) || 0;


    atualizarTransferencias();


    playerName.value = "";

    playerPosition.value = "";

    previousClub.value = "";

    transferValue.value = "";


    salvarDadosDaCarreira();

});


// ========================================
// VENDAS
// ========================================

addSaleButton.addEventListener("click", function () {

    if (soldPlayerName.value.trim() === "") {

        alert("Digite o nome do jogador!");

        return;

    }


    const newSale = document.createElement("div");

    newSale.className = "transfer-card";


    const name = document.createElement("h3");

    name.textContent = soldPlayerName.value;


    const position = document.createElement("p");

    position.textContent =
        "Posição: " +
        soldPlayerPosition.value;


    const club = document.createElement("p");

    club.textContent =
        "Novo clube: " +
        newClub.value;


    const value = document.createElement("p");

    value.textContent =
        "Valor: €" +
        (saleValue.value || 0) +
        "M";


    newSale.appendChild(name);

    newSale.appendChild(position);

    newSale.appendChild(club);

    newSale.appendChild(value);


    salesList.appendChild(newSale);


    totalSales += Number(saleValue.value) || 0;


    atualizarTransferencias();


    soldPlayerName.value = "";

    soldPlayerPosition.value = "";

    newClub.value = "";

    saleValue.value = "";


    salvarDadosDaCarreira();

});


// ========================================
// SALDO
// ========================================

function atualizarTransferencias() {

    transfersCount.textContent =
        transfersList.children.length;


    salesCount.textContent =
        salesList.children.length;


    const saldo =
        initialBudget +
        totalSales -
        totalTransfers;


    transferBalance.textContent =
        "€" + saldo + "M";

}


// ========================================
// ELENCO
// ========================================

addSquadPlayerButton.addEventListener("click", function () {

    if (squadPlayerName.value.trim() === "") {

        alert("Digite o nome do jogador!");

        return;

    }


    const newPlayer = document.createElement("div");

    newPlayer.className = "transfer-card";


    const name = document.createElement("h3");

    name.textContent = squadPlayerName.value;


    const position = document.createElement("p");

    position.textContent =
        "Posição: " +
        squadPlayerPosition.value;


    const number = document.createElement("p");

    number.textContent =
        "Camisa: " +
        squadPlayerNumber.value;


    const overall = document.createElement("p");

    overall.textContent =
        "Overall: " +
        squadPlayerOverall.value;


    newPlayer.appendChild(name);

    newPlayer.appendChild(position);

    newPlayer.appendChild(number);

    newPlayer.appendChild(overall);


    squadList.appendChild(newPlayer);


    squadPlayerName.value = "";

    squadPlayerPosition.value = "";

    squadPlayerNumber.value = "";

    squadPlayerOverall.value = "";


    salvarDadosDaCarreira();

});


// ========================================
// ESTATÍSTICAS
// ========================================

saveStatsButton.addEventListener("click", function () {

    displayTitles.textContent =
        statsTitles.value || "0";


    displayPoints.textContent =
        statsPoints.value || "0";


    displayTopScorer.textContent =
        statsTopScorer.value || "-";


    displayTopScorerGoals.textContent =
        (statsTopScorerGoals.value || "0") +
        " gols";


    displayBestCampaign.textContent =
        statsBestCampaign.value || "-";


    displayHighestPosition.textContent =
        statsHighestPosition.value || "-";


    salvarDadosDaCarreira();

});


// ========================================
// NOVA TEMPORADA
// ========================================

newSeasonButton.addEventListener("click", function () {

    if (!carreiraAtual) {
        return;
    }

    const confirmou = confirm(
        "Deseja encerrar esta temporada e começar uma nova?"
    );

    if (!confirmou) {
        return;
    }

    const novoOrcamento = prompt(
        "Digite o novo orçamento para a próxima temporada em milhões de euros:"
    );

    if (novoOrcamento === null) {
        return;
    }

    const orçamentoNumerico = Number(novoOrcamento);

    if (isNaN(orçamentoNumerico) || orçamentoNumerico < 0) {

        alert("Digite um valor válido para o orçamento.");

        return;
    }


    const temporadaAtual =
        detailsSeason.textContent.replace(
            "Temporada: ",
            ""
        );


    const partes =
        temporadaAtual.split("/");


    if (partes.length !== 2) {

        alert("Use o formato 2025/26");

        return;

    }


    const anoInicial =
        Number(partes[0]);


    const anoFinal =
        Number(partes[1]);


    if (
        isNaN(anoInicial) ||
        isNaN(anoFinal)
    ) {

        alert("Temporada inválida.");

        return;

    }


    const oldSeason =
        document.createElement("div");


    oldSeason.className =
        "history-card";


    oldSeason.innerHTML =
        "<h3>" +
        detailsSeason.textContent +
        "</h3>" +

        "<p>🏆 Títulos: " +
        displayTitles.textContent +
        "</p>" +

        "<p>📊 Pontos: " +
        displayPoints.textContent +
        "</p>" +

        "<p>⚽ Artilheiro: " +
        displayTopScorer.textContent +
        " - " +
        displayTopScorerGoals.textContent +
        "</p>" +

        "<p>📈 Melhor campanha: " +
        displayBestCampaign.textContent +
        "</p>" +

        "<p>🥇 Melhor posição: " +
        displayHighestPosition.textContent +
        "</p>";


    historyList.appendChild(oldSeason);


    const novaTemporada =
        (anoInicial + 1) +
        "/" +
        (anoFinal + 1);


    detailsSeason.textContent =
        "Temporada: " +
        novaTemporada;


    const temporadaCard =
        carreiraAtual.querySelectorAll("p")[0];


    temporadaCard.textContent =
        "Temporada: " +
        novaTemporada;


    // ZERA AS CONTRATAÇÕES E VENDAS
    transfersList.innerHTML = "";

    salesList.innerHTML = "";

    squadList.innerHTML = "";


    totalTransfers = 0;

    totalSales = 0;


    // DEFINE O NOVO ORÇAMENTO
    initialBudget = orçamentoNumerico;


    // ATUALIZA O SALDO
    atualizarTransferencias();


    // ZERA AS ESTATÍSTICAS DA NOVA TEMPORADA
    displayTitles.textContent = "0";

    displayPoints.textContent = "0";

    displayTopScorer.textContent = "-";

    displayTopScorerGoals.textContent = "0 gols";

    displayBestCampaign.textContent = "-";

    displayHighestPosition.textContent = "-";


    // SALVA O NOVO ORÇAMENTO
    const nomeClube =
        detailsClubName.textContent;


    localStorage.setItem(
        "orcamento_" + nomeClube,
        orçamentoNumerico
    );


    salvarDadosDaCarreira();

    salvarCarreiras();


    alert(
        "Nova temporada iniciada!\n\n" +
        "Novo orçamento: €" +
        orçamentoNumerico +
        "M"
    );

});


// LOCAL STORAGE
// ========================================

function salvarCarreiras() {

    localStorage.setItem(
        "carreiras",
        careersContainer.innerHTML
    );

}


function carregarCarreiras() {

    const carreirasSalvas =
        localStorage.getItem("carreiras");


    if (!carreirasSalvas) {

        return;

    }


    careersContainer.innerHTML =
        carreirasSalvas;


    adicionarBotoesDasCarreiras();

}


function adicionarBotoesDasCarreiras() {

    const botoesVer =
        document.querySelectorAll(
            ".view-career-button"
        );


    botoesVer.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                abrirCarreira(
                    button.parentElement
                );

            }
        );

    });


    const botoesRemover =
        document.querySelectorAll(
            ".remove-career-button"
        );


    botoesRemover.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const card =
                    button.parentElement;


                const nomeClube =
                    card.querySelector("h3").textContent;


                const confirmou = confirm(
                    "Tem certeza que deseja remover esta carreira?"
                );


                if (confirmou) {

                    card.remove();


                    localStorage.removeItem(
                        "dados_" + nomeClube
                    );


                    localStorage.removeItem(
                        "orcamento_" + nomeClube
                    );


                    localStorage.removeItem(
                        "titulos_" + nomeClube
                    );


                    salvarCarreiras();

                }

            }
        );

    });

}


// ========================================
// SALVAR DADOS
// ========================================

function salvarDadosDaCarreira() {

    if (!carreiraAtual) {

        return;

    }


    const nomeClube =
        detailsClubName.textContent;


    const dados = {

        temporada:
            detailsSeason.textContent,

        orcamento:
            initialBudget,

        transferencias:
            transfersList.innerHTML,

        vendas:
            salesList.innerHTML,

        elenco:
            squadList.innerHTML,

        totalTransferencias:
            totalTransfers,

        totalVendas:
            totalSales,

        titulos:
            displayTitles.textContent,

        pontos:
            displayPoints.textContent,

        artilheiro:
            displayTopScorer.textContent,

        golsArtilheiro:
            displayTopScorerGoals.textContent,

        melhorCampanha:
            displayBestCampaign.textContent,

        melhorPosicao:
            displayHighestPosition.textContent,

        historico:
            historyList.innerHTML

    };


    localStorage.setItem(
        "dados_" + nomeClube,
        JSON.stringify(dados)
    );

}


// ========================================
// CARREGAR DADOS
// ========================================

function carregarDadosDaCarreira() {

    const nomeClube =
        detailsClubName.textContent;


    const dadosSalvos =
        localStorage.getItem(
            "dados_" + nomeClube
        );


    const orcamentoSalvo =
        localStorage.getItem(
            "orcamento_" + nomeClube
        );


    if (dadosSalvos) {

        const dados =
            JSON.parse(dadosSalvos);


        detailsSeason.textContent =
            dados.temporada;


        initialBudget =
            Number(dados.orcamento) || 0;


        transfersList.innerHTML =
            dados.transferencias || "";


        salesList.innerHTML =
            dados.vendas || "";


        squadList.innerHTML =
            dados.elenco || "";


        totalTransfers =
            Number(dados.totalTransferencias) || 0;


        totalSales =
            Number(dados.totalVendas) || 0;


        displayTitles.textContent =
            dados.titulos || "0";


        displayPoints.textContent =
            dados.pontos || "0";


        displayTopScorer.textContent =
            dados.artilheiro || "-";


        displayTopScorerGoals.textContent =
            dados.golsArtilheiro || "0 gols";


        displayBestCampaign.textContent =
            dados.melhorCampanha || "-";


        displayHighestPosition.textContent =
            dados.melhorPosicao || "-";


        historyList.innerHTML =
            dados.historico || "";

    }


    else {

        initialBudget =
            Number(orcamentoSalvo) || 0;


        totalTransfers = 0;

        totalSales = 0;


        displayTitles.textContent =
            localStorage.getItem(
                "titulos_" + nomeClube
            ) || "0";


        displayPoints.textContent = "0";

        displayTopScorer.textContent = "-";

        displayTopScorerGoals.textContent = "0 gols";

        displayBestCampaign.textContent = "-";

        displayHighestPosition.textContent = "-";


        transfersList.innerHTML = "";

        salesList.innerHTML = "";

        squadList.innerHTML = "";

        historyList.innerHTML = "";

    }


    historySection.style.display = "none";


    atualizarTransferencias();

}


// ========================================
// INICIAR
// ========================================

carregarCarreiras();

