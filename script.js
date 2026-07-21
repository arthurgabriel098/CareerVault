
const newCareerButton = document.getElementById("new-career-button");
const careerForm = document.getElementById("career-form");
const createCareerButton = document.getElementById("create-career-button");

const clubName = document.getElementById("club-name");
const season = document.getElementById("season");
const manager = document.getElementById("manager");

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

const addSquadPlayerButton =
    document.getElementById("add-squad-player-button");

const squadPlayerName =
    document.getElementById("squad-player-name");

const squadPlayerPosition =
    document.getElementById("squad-player-position");

const squadPlayerNumber =
    document.getElementById("squad-player-number");

const squadPlayerOverall =
    document.getElementById("squad-player-overall");

const squadList =
    document.getElementById("squad-list");


const statsButton =
    document.getElementById("stats-button");

const statsSection =
    document.getElementById("stats-section");

const saveStatsButton =
    document.getElementById("save-stats-button");

const statsTitles =
    document.getElementById("stats-titles");

const statsPoints =
    document.getElementById("stats-points");

const statsTopScorer =
    document.getElementById("stats-top-scorer");

const statsTopScorerGoals =
    document.getElementById("stats-top-scorer-goals");

const statsBestCampaign =
    document.getElementById("stats-best-campaign");

const statsHighestPosition =
    document.getElementById("stats-highest-position");


const displayTitles =
    document.getElementById("display-titles");

const displayPoints =
    document.getElementById("display-points");

const displayTopScorer =
    document.getElementById("display-top-scorer");

const displayTopScorerGoals =
    document.getElementById("display-top-scorer-goals");

const displayBestCampaign =
    document.getElementById("display-best-campaign");

const displayHighestPosition =
    document.getElementById("display-highest-position");


let totalTransfers = 0;
let totalSales = 0;


let carreiraAtual = null;

// NOVA CARREIRA

newCareerButton.addEventListener("click", function() {

    careerForm.style.display = "flex";

});


// CRIAR CARREIRA

createCareerButton.addEventListener("click", function() {
carreiraAtual = {
    clube: clubName.value,
    temporada: season.value,
    tecnico: manager.value,
    contratacoes: [],
    vendas: [],
    elenco: [],
    estatisticas: {},
    historico: []
};
    const newCareer = document.createElement("article");

    newCareer.classList.add("career-card");


    const newClubName = document.createElement("h3");

    newClubName.textContent = clubName.value;


    const newSeason = document.createElement("p");

    newSeason.textContent =
        "Temporada: " + season.value;


    const newManager = document.createElement("p");

    newManager.textContent =
        "Técnico: " + manager.value;


    const viewCareerButton =
        document.createElement("button");

    viewCareerButton.textContent =
        "Ver Carreira";

    viewCareerButton.classList.add(
        "view-career-button"
    );


    newCareer.appendChild(newClubName);

    newCareer.appendChild(newSeason);

    newCareer.appendChild(newManager);

    newCareer.appendChild(viewCareerButton);

    const removeCareerButton =
    document.createElement("button");

removeCareerButton.textContent =
    "Remover";

removeCareerButton.classList.add(
    "remove-career-button"
);

newCareer.appendChild(
    removeCareerButton
);

    careersContainer.appendChild(newCareer);


salvarCarreiras();
    viewCareerButton.addEventListener(
        "click",
        function() {

            careersContainer.style.display =
                "none";

            careerDetails.style.display =
                "block";


            detailsClubName.textContent =
                newClubName.textContent;

            detailsSeason.textContent =
                newSeason.textContent;

            detailsManager.textContent =
                newManager.textContent;

        }
    );


    careerForm.style.display =
        "none";


    clubName.value = "";

    season.value = "";

    manager.value = "";

});


// VOLTAR

backButton.addEventListener("click", function() {
salvarCarreira();
    careerDetails.style.display =
        "none";

    careersContainer.style.display =
        "grid";

});


// CONTRATAÇÕES

transfersButton.addEventListener("click", function() {

    transfersSection.scrollIntoView({
        behavior: "smooth"
    });

});


addTransferButton.addEventListener("click", function() {

    const newTransfer =
        document.createElement("div");

    newTransfer.classList.add(
        "transfer-card"
    );


    const transferPlayer =
        document.createElement("h3");

    transferPlayer.textContent =
        playerName.value;


    const transferPosition =
        document.createElement("p");

    transferPosition.textContent =
        "Posição: " +
        playerPosition.value;


    const transferPreviousClub =
        document.createElement("p");

    transferPreviousClub.textContent =
        "Clube anterior: " +
        previousClub.value;


    const transferPrice =
        document.createElement("p");

    transferPrice.textContent =
        "Valor: €" +
        transferValue.value +
        "M";


    newTransfer.appendChild(
        transferPlayer
    );

    newTransfer.appendChild(
        transferPosition
    );

    newTransfer.appendChild(
        transferPreviousClub
    );

    newTransfer.appendChild(
        transferPrice
    );


    transfersList.appendChild(
        newTransfer
    );


    transfersCount.textContent =
        transfersList.children.length;


    totalTransfers +=
        Number(transferValue.value);


    transferBalance.textContent =
        "€" +
        (totalSales - totalTransfers) +
        "M";


    playerName.value = "";

    playerPosition.value = "";

    previousClub.value = "";

    transferValue.value = "";

});


// VENDAS

salesButton.addEventListener("click", function() {

    salesSection.scrollIntoView({
        behavior: "smooth"
    });

});


addSaleButton.addEventListener("click", function() {

    const newSale =
        document.createElement("div");

    newSale.classList.add(
        "transfer-card"
    );


    const salePlayer =
        document.createElement("h3");

    salePlayer.textContent =
        soldPlayerName.value;


    const salePosition =
        document.createElement("p");

    salePosition.textContent =
        "Posição: " +
        soldPlayerPosition.value;


    const saleNewClub =
        document.createElement("p");

    saleNewClub.textContent =
        "Novo clube: " +
        newClub.value;


    const salePrice =
        document.createElement("p");

    salePrice.textContent =
        "Valor: €" +
        saleValue.value +
        "M";


    newSale.appendChild(
        salePlayer
    );

    newSale.appendChild(
        salePosition
    );

    newSale.appendChild(
        saleNewClub
    );

    newSale.appendChild(
        salePrice
    );


    salesList.appendChild(
        newSale
    );


    salesCount.textContent =
        salesList.children.length;


    totalSales +=
        Number(saleValue.value);


    transferBalance.textContent =
        "€" +
        (totalSales - totalTransfers) +
        "M";


    soldPlayerName.value = "";

    soldPlayerPosition.value = "";

    newClub.value = "";

    saleValue.value = "";

});


// VISÃO GERAL

overviewButton.addEventListener("click", function() {

    overviewSection.scrollIntoView({
        behavior: "smooth"
    });

});


// ELENCO

squadButton.addEventListener("click", function() {

    squadSection.scrollIntoView({
        behavior: "smooth"
    });

});


addSquadPlayerButton.addEventListener(
    "click",
    function() {

        const newPlayer =
            document.createElement("div");

        newPlayer.classList.add(
            "transfer-card"
        );


        const player =
            document.createElement("h3");

        player.textContent =
            squadPlayerName.value;


        const position =
            document.createElement("p");

        position.textContent =
            "Posição: " +
            squadPlayerPosition.value;


        const number =
            document.createElement("p");

        number.textContent =
            "Camisa: " +
            squadPlayerNumber.value;


        const overall =
            document.createElement("p");

        overall.textContent =
            "Overall: " +
            squadPlayerOverall.value;


        newPlayer.appendChild(player);

        newPlayer.appendChild(position);

        newPlayer.appendChild(number);

        newPlayer.appendChild(overall);


        squadList.appendChild(newPlayer);


        squadPlayerName.value = "";

        squadPlayerPosition.value = "";

        squadPlayerNumber.value = "";

        squadPlayerOverall.value = "";

    }
);


// ESTATÍSTICAS

statsButton.addEventListener("click", function() {

    statsSection.scrollIntoView({
        behavior: "smooth"
    });

});


saveStatsButton.addEventListener("click", function() {

    displayTitles.textContent =
        statsTitles.value;

    displayPoints.textContent =
        statsPoints.value;

    displayTopScorer.textContent =
        statsTopScorer.value;

    displayTopScorerGoals.textContent =
        statsTopScorerGoals.value +
        " gols";

    displayBestCampaign.textContent =
        statsBestCampaign.value;

    displayHighestPosition.textContent =
        statsHighestPosition.value;


    statsTitles.value = "";

    statsPoints.value = "";

    statsTopScorer.value = "";

    statsTopScorerGoals.value = "";

    statsBestCampaign.value = "";

    statsHighestPosition.value = "";

});
const newSeasonButton =
    document.getElementById("new-season-button");


newSeasonButton.addEventListener("click", function() {

    const currentSeason =
        detailsSeason.textContent.replace(
            "Temporada: ",
            ""
        );


    const seasonParts =
        currentSeason.split("/");


    const firstYear =
        Number(seasonParts[0]);


    const newFirstYear =
        firstYear + 1;


    const newSecondYear =
        newFirstYear + 1;


    const newSeason =
        newFirstYear +
        "/" +
        String(newSecondYear).slice(-2);


    detailsSeason.textContent =
        "Temporada: " +
        newSeason;


    transfersList.innerHTML = "";

    salesList.innerHTML = "";

    squadList.innerHTML = "";


    transfersCount.textContent =
        "0";

    salesCount.textContent =
        "0";


    transferBalance.textContent =
        "€0M";


    totalTransfers =
        0;

    totalSales =
        0;


    displayTitles.textContent =
        "0";

    displayPoints.textContent =
        "0";

    displayTopScorer.textContent =
        "-";

    displayTopScorerGoals.textContent =
        "0 gols";

    displayBestCampaign.textContent =
        "-";

    displayHighestPosition.textContent =
        "-";


    statsTitles.value =
        "";

    statsPoints.value =
        "";

    statsTopScorer.value =
        "";

    statsTopScorerGoals.value =
        "";

    statsBestCampaign.value =
        "";

    statsHighestPosition.value =
        "";


    alert(
        "Nova temporada iniciada!"
    );

});
// ===============================
// SALVAR E CARREGAR CARREIRAS
// ===============================

function salvarCarreiras() {

    localStorage.setItem(
        "carreiras",
        careersContainer.innerHTML
    );

}


function carregarCarreiras() {

    const carreirasSalvas =
        localStorage.getItem("carreiras");


    if (carreirasSalvas) {

        careersContainer.innerHTML =
            carreirasSalvas;


        adicionarBotoesDasCarreiras();

    }

}


function adicionarBotoesDasCarreiras() {

    const botoesVer =
        document.querySelectorAll(
            ".view-career-button"
        );


    botoesVer.forEach(function(button) {

        button.addEventListener(
            "click",
            function() {

const newSeasonButton =
    document.getElementById("new-season-button");

const historySection =
    document.getElementById("history-section");

const historyList =
    document.getElementById("history-list");


                const carreira =
                    button.parentElement;


                const nome =
                    carreira.querySelector("h3");

                const temporada =
                    carreira.querySelectorAll("p")[0];

                const tecnico =
                    carreira.querySelectorAll("p")[1];


                careersContainer.style.display =
                    "none";

                careerDetails.style.display =
                    "block";


                detailsClubName.textContent =
                    nome.textContent;

                detailsSeason.textContent =
                    temporada.textContent;

                detailsManager.textContent =
                    tecnico.textContent;

            }

        );

    });


    const botoesRemover =
        document.querySelectorAll(
            ".remove-career-button"
        );


    botoesRemover.forEach(function(button) {

        button.addEventListener(
            "click",
            function() {

                const confirmou =
                    confirm(
                        "Tem certeza que deseja remover esta carreira?"
                    );


                if (confirmou) {

                    button.parentElement.remove();

                    salvarCarreiras();

                }

            }

        );

    });

}


// CARREGAR AO ABRIR O SITE

carregarCarreiras();

// ===============================
// NOVA TEMPORADA
// ===============================

newSeasonButton.addEventListener("click", function() {

    const confirmou =
        confirm(
            "Deseja encerrar esta temporada e começar uma nova?"
        );


    if (!confirmou) {
        return;
    }


    // CRIA O CARD DA TEMPORADA ENCERRADA

    const oldSeason =
        document.createElement("div");

    oldSeason.classList.add(
        "history-card"
    );


    const seasonTitle =
        document.createElement("h3");

    seasonTitle.textContent =
        detailsSeason.textContent;


    const titles =
        document.createElement("p");

    titles.textContent =
        "🏆 Títulos: " +
        displayTitles.textContent;


    const points =
        document.createElement("p");

    points.textContent =
        "📊 Pontos: " +
        displayPoints.textContent;


    const scorer =
        document.createElement("p");

    scorer.textContent =
        "⚽ Artilheiro: " +
        displayTopScorer.textContent +
        " - " +
        displayTopScorerGoals.textContent;


    const campaign =
        document.createElement("p");

    campaign.textContent =
        "📈 Melhor campanha: " +
        displayBestCampaign.textContent;


    const position =
        document.createElement("p");

    position.textContent =
        "🥇 Melhor posição: " +
        displayHighestPosition.textContent;


    oldSeason.appendChild(
        seasonTitle
    );

    oldSeason.appendChild(
        titles
    );

    oldSeason.appendChild(
        points
    );

    oldSeason.appendChild(
        scorer
    );

    oldSeason.appendChild(
        campaign
    );

    oldSeason.appendChild(
        position
    );


    historyList.appendChild(
        oldSeason
    );


    // AVANÇA A TEMPORADA

    const temporadaAtual =
        detailsSeason.textContent
            .replace("Temporada: ", "");


    const partes =
        temporadaAtual.split("/");


    if (partes.length === 2) {

        const anoInicial =
            Number(partes[0]);

        const anoFinal =
            Number(partes[1]);


        const novaTemporada =
            (anoInicial + 1) +
            "/" +
            (anoFinal + 1);


        detailsSeason.textContent =
            "Temporada: " +
            novaTemporada;

    }


    // ZERA CONTRATAÇÕES

    transfersList.innerHTML =
        "";

    transfersCount.textContent =
        "0";


    // ZERA VENDAS

    salesList.innerHTML =
        "";

    salesCount.textContent =
        "0";


    // ZERA VALORES DE TRANSFERÊNCIA

    totalTransfers =
        0;

    totalSales =
        0;
let carreiraAtual = null;

    transferBalance.textContent =
        "€0M";


    // ZERA ELENCO

    squadList.innerHTML =
        "";


    // ZERA ESTATÍSTICAS

    displayTitles.textContent =
        "0";

    displayPoints.textContent =
        "0";

    displayTopScorer.textContent =
        "-";

    displayTopScorerGoals.textContent =
        "0 gols";

    displayBestCampaign.textContent =
        "-";

    displayHighestPosition.textContent =
        "-";


    // SALVA O HISTÓRICO

    salvarHistorico();

});

// ===============================
// SALVAR HISTÓRICO
// ===============================

function salvarHistorico() {

    localStorage.setItem(
        "historicoTemporadas",
        historyList.innerHTML
    );

}


function carregarHistorico() {

    const historicoSalvo =
        localStorage.getItem(
            "historicoTemporadas"
        );


    if (historicoSalvo) {

        historyList.innerHTML =
            historicoSalvo;

    }

}


salvarCarreiras();
function salvarCarreira() {

    if (!carreiraAtual) {
        return;
    }

    carreiraAtual.temporada =
        detailsSeason.textContent;

    carreiraAtual.contratacoes =
        transfersList.innerHTML;

    carreiraAtual.vendas =
        salesList.innerHTML;

    carreiraAtual.elenco =
        squadList.innerHTML;

    carreiraAtual.titulos =
        displayTitles.textContent;

    carreiraAtual.pontos =
        displayPoints.textContent;

    carreiraAtual.artilheiro =
        displayTopScorer.textContent;

    carreiraAtual.golsArtilheiro =
        displayTopScorerGoals.textContent;

    carreiraAtual.melhorCampanha =
        displayBestCampaign.textContent;

    carreiraAtual.melhorPosicao =
        displayHighestPosition.textContent;

    localStorage.setItem(
        "carreiraAtual",
        JSON.stringify(carreiraAtual)
    );

}
