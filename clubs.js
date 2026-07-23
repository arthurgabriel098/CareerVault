// ========================================
// BANCO DE CLUBES - CAREER VAULT 26
// PARTE 1/3
// ALEMANHA + INGLATERRA + ITÁLIA
// ========================================


function criarClube(nome, logo = "") {

    return {
        name: nome,
        logo: logo
    };

}


function criarClubes(lista) {

    return lista.map(function (clube) {

        return criarClube(
            clube.name,
            clube.logo
        );

    });

}


const footballDatabase = {

    // ========================================
    // ALEMANHA
    // ========================================

    "Alemanha": {

        // ========================================
        // BUNDESLIGA
        // ========================================

        "Bundesliga": criarClubes([

            {
                name: "Bayern München",
                logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg"
            },

            {
                name: "Borussia Dortmund",
                logo: "https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg"
            },

            {
                name: "Bayer 04 Leverkusen",
                logo: "https://upload.wikimedia.org/wikipedia/en/5/59/Bayer_04_Leverkusen_logo.svg"
            },

            {
                name: "RB Leipzig",
                logo: "https://upload.wikimedia.org/wikipedia/en/0/04/RB_Leipzig_2014_logo.svg"
            },

            {
                name: "Eintracht Frankfurt",
                logo: "https://upload.wikimedia.org/wikipedia/en/0/04/Eintracht_Frankfurt_Logo.svg"
            },

            {
                name: "SC Freiburg",
                logo: "https://upload.wikimedia.org/wikipedia/en/6/6c/SC_Freiburg_logo.svg"
            },

            {
                name: "Mainz 05",
                logo: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Logo_Mainz_05.svg"
            },

            {
                name: "VfB Stuttgart",
                logo: "https://upload.wikimedia.org/wikipedia/commons/5/5d/VfB_Stuttgart_1893_Logo.svg"
            },

            {
                name: "Borussia Mönchengladbach",
                logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/Borussia_M%C3%B6nchengladbach_logo.svg"
            },

            {
                name: "VfL Wolfsburg",
                logo: "https://upload.wikimedia.org/wikipedia/commons/f/f3/VfL_Wolfsburg_Logo.svg"
            },

            {
                name: "Werder Bremen",
                logo: "https://upload.wikimedia.org/wikipedia/commons/b/be/SV-Werder-Bremen-Logo.svg"
            },

            {
                name: "FC Augsburg",
                logo: "https://upload.wikimedia.org/wikipedia/en/7/79/FC_Augsburg_logo.svg"
            },

            {
                name: "TSG Hoffenheim",
                logo: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Logo_TSG_Hoffenheim.svg"
            },

            {
                name: "Union Berlin",
                logo: "https://upload.wikimedia.org/wikipedia/commons/6/6d/1._FC_Union_Berlin_logo.svg"
            },

            {
                name: "FC St. Pauli",
                logo: "https://upload.wikimedia.org/wikipedia/commons/8/8c/FC_St._Pauli_logo.svg"
            },

            {
                name: "1. FC Heidenheim",
                logo: "https://upload.wikimedia.org/wikipedia/en/8/8e/1._FC_Heidenheim_1846_logo.svg"
            },

            {
                name: "Hamburger SV",
                logo: "https://upload.wikimedia.org/wikipedia/commons/6/66/HSV-Logo.svg"
            },

            {
                name: "FC Köln",
                logo: "https://upload.wikimedia.org/wikipedia/en/5/53/FC_K%C3%B6ln_logo.svg"
            }

        ]),


        // ========================================
        // 2. BUNDESLIGA
        // ========================================

        "2. Bundesliga": criarClubes([

            {
                name: "Schalke 04",
                logo: "https://upload.wikimedia.org/wikipedia/commons/9/97/FC_Schalke_04_Logo.svg"
            },

            {
                name: "Hertha BSC",
                logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/Hertha_BSC_Logo_2012.svg"
            },

            {
                name: "Hannover 96",
                logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Hannover_96_logo.svg"
            },

            {
                name: "Fortuna Düsseldorf",
                logo: "https://upload.wikimedia.org/wikipedia/commons/9/94/Fortuna_D%C3%BCsseldorf.svg"
            },

            {
                name: "1. FC Nürnberg",
                logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/1._FC_N%C3%BCrnberg_logo.svg"
            },

            {
                name: "Karlsruher SC",
                logo: "https://upload.wikimedia.org/wikipedia/en/2/2e/Karlsruher_SC_logo.svg"
            },

            {
                name: "SC Paderborn",
                logo: "https://upload.wikimedia.org/wikipedia/en/5/5e/SC_Paderborn_07_logo.svg"
            },

            {
                name: "Holstein Kiel",
                logo: "https://upload.wikimedia.org/wikipedia/en/3/3c/Holstein_Kiel_logo.svg"
            },

            {
                name: "Darmstadt 98",
                logo: "https://upload.wikimedia.org/wikipedia/en/4/4e/SV_Darmstadt_98_logo.svg"
            },

            {
                name: "VfL Bochum",
                logo: "https://upload.wikimedia.org/wikipedia/commons/7/72/VfL_Bochum_logo.svg"
            },

            {
                name: "Arminia Bielefeld",
                logo: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Arminia_Bielefeld_logo.svg"
            },

            {
                name: "Dynamo Dresden",
                logo: "https://upload.wikimedia.org/wikipedia/commons/1/1c/SG_Dynamo_Dresden_logo.svg"
            },

            {
                name: "Eintracht Braunschweig",
                logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Eintracht_Braunschweig_logo.svg"
            },

            {
                name: "Preußen Münster",
                logo: "https://upload.wikimedia.org/wikipedia/en/5/5d/Preu%C3%9Fen_M%C3%BCnster_logo.svg"
            },

            {
                name: "SpVgg Greuther Fürth",
                logo: "https://upload.wikimedia.org/wikipedia/en/8/8a/SpVgg_Greuther_F%C3%BCrth_logo.svg"
            },

            {
                name: "SV Elversberg",
                logo: "https://upload.wikimedia.org/wikipedia/en/6/6d/SV_Elversberg_logo.svg"
            },

            {
                name: "FC Kaiserslautern",
                logo: "https://upload.wikimedia.org/wikipedia/commons/5/5d/1._FC_Kaiserslautern_logo.svg"
            },

            {
                name: "Hansa Rostock",
                logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/F.C._Hansa_Rostock_logo.svg"
            }

        ]),


        // ========================================
        // 3. LIGA
        // ========================================

        "3. Liga": criarClubes([

            {
                name: "1860 München",
                logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/TSV_1860_M%C3%BCnchen_logo.svg"
            },

            {
                name: "1. FC Saarbrücken",
                logo: "https://upload.wikimedia.org/wikipedia/en/2/2d/1._FC_Saarbr%C3%BCcken_logo.svg"
            },

            {
                name: "Rot-Weiss Essen",
                logo: "https://upload.wikimedia.org/wikipedia/en/7/7b/Rot-Weiss_Essen_logo.svg"
            },

            {
                name: "Erzgebirge Aue",
                logo: "https://upload.wikimedia.org/wikipedia/en/6/6d/FC_Erzgebirge_Aue_logo.svg"
            },

            {
                name: "Energie Cottbus",
                logo: "https://upload.wikimedia.org/wikipedia/en/6/6e/FC_Energie_Cottbus_logo.svg"
            },

            {
                name: "FC Ingolstadt",
                logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/FC_Ingolstadt_04_logo.svg"
            },

            {
                name: "Viktoria Köln",
                logo: "https://upload.wikimedia.org/wikipedia/en/7/7d/FC_Viktoria_K%C3%B6ln_logo.svg"
            },

            {
                name: "SV Wehen Wiesbaden",
                logo: "https://upload.wikimedia.org/wikipedia/en/8/8c/SV_Wehen_Wiesbaden_logo.svg"
            },

            {
                name: "Alemannia Aachen",
                logo: "https://upload.wikimedia.org/wikipedia/en/3/3c/Alemannia_Aachen_logo.svg"
            },

            {
                name: "SC Verl",
                logo: "https://upload.wikimedia.org/wikipedia/en/5/5e/SC_Verl_logo.svg"
            },

            {
                name: "VfL Osnabrück",
                logo: "https://upload.wikimedia.org/wikipedia/en/6/6e/VfL_Osnabr%C3%BCck_logo.svg"
            },

            {
                name: "TSV Havelse",
                logo: "https://upload.wikimedia.org/wikipedia/en/3/3b/TSV_Havelse_logo.svg"
            },

            {
                name: "Jahn Regensburg",
                logo: "https://upload.wikimedia.org/wikipedia/en/3/3b/SSV_Jahn_Regensburg_logo.svg"
            },

            {
                name: "SSV Ulm 1846",
                logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/SSV_Ulm_1846_Fu%C3%9Fball_logo.svg"
            },

            {
                name: "Waldhof Mannheim",
                logo: "https://upload.wikimedia.org/wikipedia/en/8/8e/SV_Waldhof_Mannheim_logo.svg"
            },

            {
                name: "Unterhaching",
                logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/SpVgg_Unterhaching_logo.svg"
            }

        ])

    },


    // ========================================
    // INGLATERRA
    // ========================================

    "Inglaterra": {

        // ========================================
        // PREMIER LEAGUE
        // ========================================

        "Premier League": criarClubes([

            {
                name: "Arsenal",
                logo: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg"
            },

            {
                name: "Aston Villa",
                logo: "https://upload.wikimedia.org/wikipedia/en/9/9f/Aston_Villa_FC_new_crest.svg"
            },

            {
                name: "AFC Bournemouth",
                logo: "https://upload.wikimedia.org/wikipedia/en/e/e5/AFC_Bournemouth_%282013%29.svg"
            },

            {
                name: "Brentford",
                logo: "https://upload.wikimedia.org/wikipedia/en/2/2a/Brentford_FC_crest.svg"
            },

            {
                name: "Brighton & Hove Albion",
                logo: "https://upload.wikimedia.org/wikipedia/en/f/fd/Brighton_Hove_Albion_logo.svg"
            },

            {
                name: "Burnley",
                logo: "https://upload.wikimedia.org/wikipedia/en/6/62/Burnley_F.C._Logo.svg"
            },

            {
                name: "Chelsea",
                logo: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg"
            },

            {
                name: "Crystal Palace",
                logo: "https://upload.wikimedia.org/wikipedia/en/a/a2/Crystal_Palace_FC_logo.svg"
            },

            {
                name: "Everton",
                logo: "https://upload.wikimedia.org/wikipedia/en/7/7c/Everton_FC_logo.svg"
            },

            {
                name: "Fulham",
                logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Fulham_FC_%28shield%29.svg"
            },

            {
                name: "Leeds United",
                logo: "https://upload.wikimedia.org/wikipedia/en/5/54/Leeds_United_F.C._logo.svg"
            },

            {
                name: "Liverpool",
                logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg"
            },

            {
                name: "Manchester City",
                logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg"
            },

            {
                name: "Manchester United",
                logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
            },

            {
                name: "Newcastle United",
                logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Newcastle_United_Logo.svg"
            },

            {
                name: "Nottingham Forest",
                logo: "https://upload.wikimedia.org/wikipedia/en/e/e5/Nottingham_Forest_F.C._logo.svg"
            },

            {
                name: "Sunderland",
                logo: "https://upload.wikimedia.org/wikipedia/en/7/77/Sunderland_A.F.C._logo.svg"
            },

            {
                name: "Tottenham Hotspur",
                logo: "https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg"
            },

            {
                name: "West Ham United",
                logo: "https://upload.wikimedia.org/wikipedia/en/c/c2/West_Ham_United_FC_logo.svg"
            },

            {
                name: "Wolverhampton Wanderers",
                logo: "https://upload.wikimedia.org/wikipedia/en/c/c9/Wolverhampton_Wanderers_FC_crest.svg"
            }

        ]),


        // ========================================
        // CHAMPIONSHIP
        // ========================================

        "Championship": criarClubes([

            {
                name: "Birmingham City",
                logo: "https://upload.wikimedia.org/wikipedia/en/6/68/Birmingham_City_FC_crest.svg"
            },

            {
                name: "Blackburn Rovers",
                logo: "https://upload.wikimedia.org/wikipedia/en/0/0f/Blackburn_Rovers.svg"
            },

            {
                name: "Bristol City",
                logo: "https://upload.wikimedia.org/wikipedia/en/0/0e/Bristol_City_FC.svg"
            },

            {
                name: "Charlton Athletic",
                logo: "https://upload.wikimedia.org/wikipedia/en/5/5f/Charlton_Atletic.svg"
            },

            {
                name: "Coventry City",
                logo: "https://upload.wikimedia.org/wikipedia/en/1/1a/Coventry_City_FC_badge.svg"
            },

            {
                name: "Derby County",
                logo: "https://upload.wikimedia.org/wikipedia/en/4/43/Derby_County_crest.svg"
            },

            {
                name: "Hull City",
                logo: "https://upload.wikimedia.org/wikipedia/en/5/54/Hull_City_AFC_logo.svg"
            },

            {
                name: "Ipswich Town",
                logo: "https://upload.wikimedia.org/wikipedia/en/4/43/Ipswich_Town.svg"
            },

            {
                name: "Leicester City",
                logo: "https://upload.wikimedia.org/wikipedia/en/2/2d/Leicester_City_crest.svg"
            },

            {
                name: "Middlesbrough",
                logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Middlesbrough_FC_crest.svg"
            },

            {
                name: "Millwall",
                logo: "https://upload.wikimedia.org/wikipedia/en/c/c9/Millwall_FC_logo.svg"
            },

            {
                name: "Norwich City",
                logo: "https://upload.wikimedia.org/wikipedia/en/8/8c/Norwich_City.svg"
            },

            {
                name: "Oxford United",
                logo: "https://upload.wikimedia.org/wikipedia/en/8/8f/Oxford_United_FC_logo.svg"
            },

            {
                name: "Portsmouth",
                logo: "https://upload.wikimedia.org/wikipedia/en/3/3c/Portsmouth_FC_crest.svg"
            },

            {
                name: "Preston North End",
                logo: "https://upload.wikimedia.org/wikipedia/en/2/2d/Preston_North_End_FC.svg"
            },

            {
                name: "Queens Park Rangers",
                logo: "https://upload.wikimedia.org/wikipedia/en/3/31/Queens_Park_Rangers_crest.svg"
            },

            {
                name: "Sheffield United",
                logo: "https://upload.wikimedia.org/wikipedia/en/9/9c/Sheffield_United_FC_logo.svg"
            },

            {
                name: "Sheffield Wednesday",
                logo: "https://upload.wikimedia.org/wikipedia/en/8/87/Sheffield_Wednesday_badge.svg"
            },

            {
                name: "Southampton",
                logo: "https://upload.wikimedia.org/wikipedia/en/c/c9/FC_Southampton.svg"
            },

            {
                name: "Stoke City",
                logo: "https://upload.wikimedia.org/wikipedia/en/2/29/Stoke_City_FC_crest.svg"
            },

            {
                name: "Swansea City",
                logo: "https://upload.wikimedia.org/wikipedia/en/f/f9/Swansea_City_AFC_logo.svg"
            },

            {
                name: "Watford",
                logo: "https://upload.wikimedia.org/wikipedia/en/e/e2/Watford.svg"
            },

            {
                name: "West Bromwich Albion",
                logo: "https://upload.wikimedia.org/wikipedia/en/8/8c/West_Bromwich_Albion.svg"
            },

            {
                name: "Wrexham",
                logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Wrexham_AFC.svg"
            }

        ]),


        // ========================================
        // LEAGUE ONE
        // ========================================

        "League One": criarClubes([

            {
                name: "AFC Wimbledon",
                logo: "https://upload.wikimedia.org/wikipedia/en/1/1a/AFC_Wimbledon.svg"
            },

            {
                name: "Barnsley",
                logo: "https://upload.wikimedia.org/wikipedia/en/3/3e/Barnsley_FC.svg"
            },

            {
                name: "Blackpool",
                logo: "https://upload.wikimedia.org/wikipedia/en/6/68/Blackpool_FC_logo.svg"
            },

            {
                name: "Bolton Wanderers",
                logo: "https://upload.wikimedia.org/wikipedia/en/7/79/Bolton_Wanderers_FC_logo.svg"
            },

            {
                name: "Bradford City",
                logo: "https://upload.wikimedia.org/wikipedia/en/3/3f/Bradford_City_A.F.C._logo.svg"
            },

            {
                name: "Burton Albion",
                logo: "https://upload.wikimedia.org/wikipedia/en/8/82/Burton_Albion_FC_logo.svg"
            },

            {
                name: "Cardiff City",
                logo: "https://upload.wikimedia.org/wikipedia/en/3/3c/Cardiff_City_crest.svg"
            },

            {
                name: "Doncaster Rovers",
                logo: "https://upload.wikimedia.org/wikipedia/en/2/2f/Doncaster_Rovers_FC_logo.svg"
            },

            {
                name: "Exeter City",
                logo: "https://upload.wikimedia.org/wikipedia/en/9/9c/Exeter_City_FC_logo.svg"
            },

            {
                name: "Fleetwood Town",
                logo: "https://upload.wikimedia.org/wikipedia/en/6/6d/Fleetwood_Town_FC_logo.svg"
            },

            {
                name: "Huddersfield Town",
                logo: "https://upload.wikimedia.org/wikipedia/en/5/5e/Huddersfield_Town_A.F.C._logo.svg"
            },

            {
                name: "Leyton Orient",
                logo: "https://upload.wikimedia.org/wikipedia/en/3/3b/Leyton_Orient_logo.svg"
            },

            {
                name: "Lincoln City",
                logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/Lincoln_City_FC_logo.svg"
            },

            {
                name: "Luton Town",
                logo: "https://upload.wikimedia.org/wikipedia/en/9/9a/Luton_Town_FC_logo.svg"
            },

            {
                name: "Mansfield Town",
                logo: "https://upload.wikimedia.org/wikipedia/en/3/3b/Mansfield_Town_FC_logo.svg"
            },

            {
                name: "Northampton Town",
                logo: "https://upload.wikimedia.org/wikipedia/en/7/7e/Northampton_Town_logo.svg"
            },

            {
                name: "Peterborough United",
                logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Peterborough_United_FC.svg"
            },

            {
                name: "Plymouth Argyle",
                logo: "https://upload.wikimedia.org/wikipedia/en/7/7e/Plymouth_Argyle_F.C._logo.svg"
            },

            {
                name: "Reading",
                logo: "https://upload.wikimedia.org/wikipedia/en/1/11/Reading_FC.svg"
            },

            {
                name: "Rotherham United",
                logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/Rotherham_United_FC.svg"
            },

            {
                name: "Stevenage",
                logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/Stevenage_FC_logo.svg"
            },

            {
                name: "Stockport County",
                logo: "https://upload.wikimedia.org/wikipedia/en/4/4c/Stockport_County_FC_logo.svg"
            },

            {
                name: "Wycombe Wanderers",
                logo: "https://upload.wikimedia.org/wikipedia/en/6/6c/Wycombe_Wanderers_FC_logo.svg"
            },

            {
                name: "Wigan Athletic",
                logo: "https://upload.wikimedia.org/wikipedia/en/4/43/Wigan_Athletic.svg"
            }

        ]),


        // ========================================
        // LEAGUE TWO
        // ========================================

        "League Two": criarClubes([

            {
                name: "Accrington Stanley",
                logo: "https://upload.wikimedia.org/wikipedia/en/9/9c/Accrington_Stanley_FC_logo.svg"
            },

            {
                name: "Barrow",
                logo: "https://upload.wikimedia.org/wikipedia/en/1/1e/Barrow_A.F.C._logo.svg"
            },

            {
                name: "Bromley",
                logo: "https://upload.wikimedia.org/wikipedia/en/1/1e/Bromley_FC_logo.svg"
            },

            {
                name: "Cambridge United",
                logo: "https://upload.wikimedia.org/wikipedia/en/8/8c/Cambridge_United_FC_logo.svg"
            },

            {
                name: "Cheltenham Town",
                logo: "https://upload.wikimedia.org/wikipedia/en/7/7e/Cheltenham_Town_F.C._logo.svg"
            },

            {
                name: "Chesterfield",
                logo: "https://upload.wikimedia.org/wikipedia/en/2/2d/Chesterfield_F.C._logo.svg"
            },

            {
                name: "Colchester United",
                logo: "https://upload.wikimedia.org/wikipedia/en/0/04/Colchester_United_FC_logo.svg"
            },

            {
                name: "Crawley Town",
                logo: "https://upload.wikimedia.org/wikipedia/en/2/2f/Crawley_Town_F.C._logo.svg"
            },

            {
                name: "Crewe Alexandra",
                logo: "https://upload.wikimedia.org/wikipedia/en/4/4e/Crewe_Alexandra_F.C._logo.svg"
            },

            {
                name: "Gillingham",
                logo: "https://upload.wikimedia.org/wikipedia/en/8/8d/Gillingham_F.C._logo.svg"
            },

            {
                name: "Grimsby Town",
                logo: "https://upload.wikimedia.org/wikipedia/en/5/51/Grimsby_Town_FC_logo.svg"
            },

            {
                name: "Harrogate Town",
                logo: "https://upload.wikimedia.org/wikipedia/en/8/8e/Harrogate_Town_A.F.C._logo.svg"
            },

            {
                name: "Milton Keynes Dons",
                logo: "https://upload.wikimedia.org/wikipedia/en/7/7e/Milton_Keynes_Dons_FC_logo.svg"
            },

            {
                name: "Newport County",
                logo: "https://upload.wikimedia.org/wikipedia/en/7/7e/Newport_County_A.F.C._logo.svg"
            },

            {
                name: "Notts County",
                logo: "https://upload.wikimedia.org/wikipedia/en/6/67/Notts_County_F.C._logo.svg"
            },

            {
                name: "Oldham Athletic",
                logo: "https://upload.wikimedia.org/wikipedia/en/4/4e/Oldham_Athletic_A.F.C._logo.svg"
            },

            {
                name: "Salford City",
                logo: "https://upload.wikimedia.org/wikipedia/en/8/8e/Salford_City_F.C._logo.svg"
            },

            {
                name: "Shrewsbury Town",
                logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Shrewsbury_Town_F.C._logo.svg"
            },

            {
                name: "Swindon Town",
                logo: "https://upload.wikimedia.org/wikipedia/en/6/6d/Swindon_Town_F.C._logo.svg"
            },

            {
                name: "Tranmere Rovers",
                logo: "https://upload.wikimedia.org/wikipedia/en/4/4a/Tranmere_Rovers_F.C._logo.svg"
            },

            {
                name: "Walsall",
                logo: "https://upload.wikimedia.org/wikipedia/en/4/4a/Walsall_F.C._logo.svg"
            },

            {
                name: "Wimbledon",
                logo: "https://upload.wikimedia.org/wikipedia/en/1/1a/AFC_Wimbledon.svg"
            }

        ])

    },


    // ========================================
    // ITÁLIA
    // ========================================

    "Itália": {

        // ========================================
        // SERIE A
        // ========================================

        "Serie A": criarClubes([

            {
                name: "Atalanta",
                logo: "https://upload.wikimedia.org/wikipedia/en/6/66/AtalantaBC.svg"
            },

            {
                name: "Bologna",
                logo: "https://upload.wikimedia.org/wikipedia/en/5/5e/Bologna_F.C._1909_logo.svg"
            },

            {
                name: "Cagliari",
                logo: "https://upload.wikimedia.org/wikipedia/en/3/3e/Cagliari_Calcio_1920.svg"
            },

            {
                name: "Como",
                logo: "https://upload.wikimedia.org/wikipedia/en/7/7b/Como_1907_logo.svg"
            },

            {
                name: "Cremonese",
                logo: "https://upload.wikimedia.org/wikipedia/en/6/6b/US_Cremonese_logo.svg"
            },

            {
                name: "Fiorentina",
                logo: "https://upload.wikimedia.org/wikipedia/en/8/8c/A.C._Fiorentina_logo.svg"
            },

            {
                name: "Genoa",
                logo: "https://upload.wikimedia.org/wikipedia/en/6/6c/Genoa_CFC_logo.svg"
            },

            {
                name: "Hellas Verona",
                logo: "https://upload.wikimedia.org/wikipedia/en/6/6e/Hellas_Verona_FC_logo.svg"
            },

            {
                name: "Inter",
                logo: "https://upload.wikimedia.org/wikipedia/en/0/05/FC_Internazionale_Milano_2021.svg"
            },

            {
                name: "Juventus",
                logo: "https://upload.wikimedia.org/wikipedia/commons/1/15/Juventus_FC_2017_logo.svg"
            },

            {
                name: "Lazio",
                logo: "https://upload.wikimedia.org/wikipedia/en/c/ce/S.S._Lazio_badge.svg"
            },

            {
                name: "Lecce",
                logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/US_Lecce_crest.svg"
            },

            {
                name: "Milan",
                logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg"
            },

            {
                name: "Napoli",
                logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/SSC_Napoli_Logo.svg"
            },

            {
                name: "Parma",
                logo: "https://upload.wikimedia.org/wikipedia/en/2/2e/Parma_Calcio_1913_logo.svg"
            },

            {
                name: "Pisa",
                logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/Pisa_S.C._logo.svg"
            },

            {
                name: "Roma",
                logo: "https://upload.wikimedia.org/wikipedia/en/f/f7/AS_Roma_logo_%282017%29.svg"
            },

            {
                name: "Sassuolo",
                logo: "https://upload.wikimedia.org/wikipedia/en/1/1c/US_Sassuolo_Calcio_logo.svg"
            },

            {
                name: "Torino",
                logo: "https://upload.wikimedia.org/wikipedia/en/2/2e/Torino_FC_Logo.svg"
            },

            {
                name: "Udinese",
                logo: "https://upload.wikimedia.org/wikipedia/en/9/9a/Udinese_Calcio_logo.svg"
            }

        ]),


        // ========================================
        // SERIE B
        // ========================================

        "Serie B": criarClubes([

            {
                name: "Avellino",
                logo: "https://upload.wikimedia.org/wikipedia/en/8/8d/US_Avellino_1912_logo.svg"
            },

            {
                name: "Bari",
                logo: "https://upload.wikimedia.org/wikipedia/en/6/6b/SSC_Bari_logo.svg"
            },

            {
                name: "Carrarese",
                logo: "https://upload.wikimedia.org/wikipedia/en/3/3b/Carrarese_Calcio_logo.svg"
            },

            {
                name: "Catanzaro",
                logo: "https://upload.wikimedia.org/wikipedia/en/1/1e/US_Catanzaro_1929_logo.svg"
            },

            {
                name: "Cesena",
                logo: "https://upload.wikimedia.org/wikipedia/en/8/8e/Cesena_FC_logo.svg"
            },

            {
                name: "Empoli",
                logo: "https://upload.wikimedia.org/wikipedia/en/5/5e/Empoli_FC_crest.svg"
            },

            {
                name: "Frosinone",
                logo: "https://upload.wikimedia.org/wikipedia/en/3/3d/Frosinone_Calcio_logo.svg"
            },

            {
                name: "Juve Stabia",
                logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/SS_Juve_Stabia_logo.svg"
            },

            {
                name: "Mantova",
                logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/Mantova_1911_logo.svg"
            },

            {
                name: "Modena",
                logo: "https://upload.wikimedia.org/wikipedia/en/4/4b/Modena_FC_2018_logo.svg"
            },

            {
                name: "Monza",
                logo: "https://upload.wikimedia.org/wikipedia/en/1/1d/AC_Monza_logo.svg"
            },

            {
                name: "Padova",
                logo: "https://upload.wikimedia.org/wikipedia/en/4/4d/Calcio_Padova_logo.svg"
            },

            {
                name: "Palermo",
                logo: "https://upload.wikimedia.org/wikipedia/en/7/7e/Palermo_FC_logo.svg"
            },

            {
                name: "Pescara",
                logo: "https://upload.wikimedia.org/wikipedia/en/7/7e/Delfino_Pescara_1936_logo.svg"
            },

            {
                name: "Reggiana",
                logo: "https://upload.wikimedia.org/wikipedia/en/3/3e/AC_Reggiana_1919_logo.svg"
            },

            {
                name: "Sampdoria",
                logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/U.C._Sampdoria_logo.svg"
            },

            {
                name: "Spezia",
                logo: "https://upload.wikimedia.org/wikipedia/en/3/3c/Spezia_Calcio_logo.svg"
            },

            {
                name: "Sudtirol",
                logo: "https://upload.wikimedia.org/wikipedia/en/4/4a/F.C._S%C3%BCdtirol_logo.svg"
            },

            {
                name: "Venezia",
                logo: "https://upload.wikimedia.org/wikipedia/en/7/7c/Venezia_FC_logo.svg"
            },

            {
                name: "Virtus Entella",
                logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/Virtus_Entella_logo.svg"
            }

        ])

    },

// ========================================
// BANCO DE CLUBES - CAREER VAULT 26
// PARTE 2/3
// ESPANHA + FRANÇA + HOLANDA
// ========================================


// ========================================
// ESPANHA
// ========================================

"España": {

    // ========================================
    // LALIGA
    // ========================================

    "LaLiga": criarClubes([

        {
            name: "Athletic Club",
            logo: "https://upload.wikimedia.org/wikipedia/en/9/98/Club_Athletic_Bilbao_logo.svg"
        },

        {
            name: "Atlético de Madrid",
            logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Atletico_Madrid_2017_logo.svg"
        },

        {
            name: "Barcelona",
            logo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg"
        },

        {
            name: "Celta de Vigo",
            logo: "https://upload.wikimedia.org/wikipedia/en/1/12/RC_Celta_de_Vigo_logo.svg"
        },

        {
            name: "Elche",
            logo: "https://upload.wikimedia.org/wikipedia/en/0/00/Elche_CF_logo.svg"
        },

        {
            name: "Espanyol",
            logo: "https://upload.wikimedia.org/wikipedia/en/1/1e/RCD_Espanyol_crest.svg"
        },

        {
            name: "Getafe",
            logo: "https://upload.wikimedia.org/wikipedia/en/4/46/Getafe_logo.svg"
        },

        {
            name: "Girona",
            logo: "https://upload.wikimedia.org/wikipedia/en/9/90/Girona_FC_logo.svg"
        },

        {
            name: "Levante",
            logo: "https://upload.wikimedia.org/wikipedia/en/0/0d/Levante_UD_logo.svg"
        },

        {
            name: "Mallorca",
            logo: "https://upload.wikimedia.org/wikipedia/en/5/5e/RCD_Mallorca.svg"
        },

        {
            name: "Osasuna",
            logo: "https://upload.wikimedia.org/wikipedia/en/d/d8/CA_Osasuna_logo.svg"
        },

        {
            name: "Rayo Vallecano",
            logo: "https://upload.wikimedia.org/wikipedia/en/1/1f/Rayo_Vallecano_logo.svg"
        },

        {
            name: "Real Betis",
            logo: "https://upload.wikimedia.org/wikipedia/en/1/13/Real_betis_logo.svg"
        },

        {
            name: "Real Madrid",
            logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg"
        },

        {
            name: "Real Oviedo",
            logo: "https://upload.wikimedia.org/wikipedia/en/7/7b/Real_Oviedo_logo.svg"
        },

        {
            name: "Real Sociedad",
            logo: "https://upload.wikimedia.org/wikipedia/en/f/f1/Real_Sociedad_logo.svg"
        },

        {
            name: "Sevilla",
            logo: "https://upload.wikimedia.org/wikipedia/en/3/3b/Sevilla_FC_logo.svg"
        },

        {
            name: "Valencia",
            logo: "https://upload.wikimedia.org/wikipedia/en/c/ce/Valenciacf.svg"
        },

        {
            name: "Villarreal",
            logo: "https://upload.wikimedia.org/wikipedia/en/7/70/Villarreal_CF_logo.svg"
        },

        {
            name: "Deportivo Alavés",
            logo: "https://upload.wikimedia.org/wikipedia/en/3/37/Deportivo_Alaves_logo.svg"
        }

    ]),


    // ========================================
    // SEGUNDA DIVISIÓN
    // ========================================

    "Segunda División": criarClubes([

        {
            name: "Albacete",
            logo: "https://upload.wikimedia.org/wikipedia/en/2/2f/Albacete_Balompie_logo.svg"
        },

        {
            name: "Almería",
            logo: "https://upload.wikimedia.org/wikipedia/en/7/79/UD_Almeria_logo.svg"
        },

        {
            name: "Burgos",
            logo: "https://upload.wikimedia.org/wikipedia/en/1/1f/Burgos_CF_logo.svg"
        },

        {
            name: "Cádiz",
            logo: "https://upload.wikimedia.org/wikipedia/en/2/2d/Cadiz_CF_logo.svg"
        },

        {
            name: "Castellón",
            logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/CD_Castellon_logo.svg"
        },

        {
            name: "Córdoba",
            logo: "https://upload.wikimedia.org/wikipedia/en/8/8b/Cordoba_CF_logo.svg"
        },

        {
            name: "Deportivo La Coruña",
            logo: "https://upload.wikimedia.org/wikipedia/en/2/2e/Deportivo_de_La_Coruna_logo.svg"
        },

        {
            name: "Eibar",
            logo: "https://upload.wikimedia.org/wikipedia/en/1/1c/Sociedad_Deportiva_Eibar.svg"
        },

        {
            name: "Eldense",
            logo: "https://upload.wikimedia.org/wikipedia/en/8/8a/CD_Eldense_logo.svg"
        },

        {
            name: "Granada",
            logo: "https://upload.wikimedia.org/wikipedia/en/0/01/Granada_CF_logo.svg"
        },

        {
            name: "Huesca",
            logo: "https://upload.wikimedia.org/wikipedia/en/0/0e/SD_Huesca_logo.svg"
        },

        {
            name: "Las Palmas",
            logo: "https://upload.wikimedia.org/wikipedia/en/4/46/UD_Las_Palmas_logo.svg"
        },

        {
            name: "Leganés",
            logo: "https://upload.wikimedia.org/wikipedia/en/8/8c/CD_Legan%C3%A9s_logo.svg"
        },

        {
            name: "Málaga",
            logo: "https://upload.wikimedia.org/wikipedia/en/2/2d/Malaga_CF.svg"
        },

        {
            name: "Mirandés",
            logo: "https://upload.wikimedia.org/wikipedia/en/5/5d/CD_Mirandes_logo.svg"
        },

        {
            name: "Racing de Santander",
            logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/Racing_de_Santander_logo.svg"
        },

        {
            name: "Real Sporting",
            logo: "https://upload.wikimedia.org/wikipedia/en/4/4e/Real_Sporting_de_Gijon_logo.svg"
        },

        {
            name: "Real Valladolid",
            logo: "https://upload.wikimedia.org/wikipedia/en/6/6e/Real_Valladolid_crest.svg"
        },

        {
            name: "Real Zaragoza",
            logo: "https://upload.wikimedia.org/wikipedia/en/1/1c/Real_Zaragoza_logo.svg"
        },

        {
            name: "Racing de Ferrol",
            logo: "https://upload.wikimedia.org/wikipedia/en/2/2b/Racing_Club_de_Ferrol_logo.svg"
        },

        {
            name: "Ceuta",
            logo: "https://upload.wikimedia.org/wikipedia/en/9/9d/AD_Ceuta_FC_logo.svg"
        },

        {
            name: "Tenerife",
            logo: "https://upload.wikimedia.org/wikipedia/en/7/7c/CD_Tenerife_logo.svg"
        }

    ])

},


// ========================================
// FRANÇA
// ========================================

"França": {

    // ========================================
    // LIGUE 1
    // ========================================

    "Ligue 1": criarClubes([

        {
            name: "Angers",
            logo: "https://upload.wikimedia.org/wikipedia/en/7/79/Angers_SCO_logo.svg"
        },

        {
            name: "Auxerre",
            logo: "https://upload.wikimedia.org/wikipedia/en/3/3a/AJ_Auxerre_logo.svg"
        },

        {
            name: "Brest",
            logo: "https://upload.wikimedia.org/wikipedia/en/0/05/Stade_Brestois_29_logo.svg"
        },

        {
            name: "Le Havre",
            logo: "https://upload.wikimedia.org/wikipedia/en/8/8c/Le_Havre_AC_logo.svg"
        },

        {
            name: "Lens",
            logo: "https://upload.wikimedia.org/wikipedia/en/c/cc/RC_Lens_logo.svg"
        },

        {
            name: "Lille",
            logo: "https://upload.wikimedia.org/wikipedia/en/3/3f/Lille_OSC_2018_logo.svg"
        },

        {
            name: "Lorient",
            logo: "https://upload.wikimedia.org/wikipedia/en/7/70/FC_Lorient_logo.svg"
        },

        {
            name: "Lyon",
            logo: "https://upload.wikimedia.org/wikipedia/en/4/47/Olympique_Lyonnais.svg"
        },

        {
            name: "Marseille",
            logo: "https://upload.wikimedia.org/wikipedia/en/4/43/Olympique_de_Marseille_logo.svg"
        },

        {
            name: "Monaco",
            logo: "https://upload.wikimedia.org/wikipedia/en/b/ba/AS_Monaco_FC.svg"
        },

        {
            name: "Montpellier",
            logo: "https://upload.wikimedia.org/wikipedia/en/a/a8/Montpellier_HSC_logo.svg"
        },

        {
            name: "Nantes",
            logo: "https://upload.wikimedia.org/wikipedia/en/1/17/FC_Nantes_logo.svg"
        },

        {
            name: "Nice",
            logo: "https://upload.wikimedia.org/wikipedia/en/2/2e/OGC_Nice_logo.svg"
        },

        {
            name: "Paris FC",
            logo: "https://upload.wikimedia.org/wikipedia/en/4/4b/Paris_FC_logo.svg"
        },

        {
            name: "Paris Saint-Germain",
            logo: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg"
        },

        {
            name: "Reims",
            logo: "https://upload.wikimedia.org/wikipedia/en/2/29/Stade_de_Reims_logo.svg"
        },

        {
            name: "Rennes",
            logo: "https://upload.wikimedia.org/wikipedia/en/e/e5/Stade_Rennais_FC.svg"
        },

        {
            name: "Saint-Étienne",
            logo: "https://upload.wikimedia.org/wikipedia/en/7/7c/AS_Saint-Etienne_logo.svg"
        },

        {
            name: "Strasbourg",
            logo: "https://upload.wikimedia.org/wikipedia/en/8/8c/RC_Strasbourg_Alsace_logo.svg"
        },

        {
            name: "Toulouse",
            logo: "https://upload.wikimedia.org/wikipedia/en/6/6f/Toulouse_FC_2018_logo.svg"
        }

    ]),


    // ========================================
    // LIGUE 2
    // ========================================

    "Ligue 2": criarClubes([

        {
            name: "Amiens",
            logo: "https://upload.wikimedia.org/wikipedia/en/8/8e/Amiens_SC_logo.svg"
        },

        {
            name: "Annecy",
            logo: "https://upload.wikimedia.org/wikipedia/en/4/4c/FC_Annecy_logo.svg"
        },

        {
            name: "Bastia",
            logo: "https://upload.wikimedia.org/wikipedia/en/1/1a/SC_Bastia_logo.svg"
        },

        {
            name: "Clermont Foot",
            logo: "https://upload.wikimedia.org/wikipedia/en/8/8e/Clermont_Foot_63_logo.svg"
        },

        {
            name: "Dunkerque",
            logo: "https://upload.wikimedia.org/wikipedia/en/8/8d/USL_Dunkerque_logo.svg"
        },

        {
            name: "Grenoble",
            logo: "https://upload.wikimedia.org/wikipedia/en/6/6a/Grenoble_Foot_38_logo.svg"
        },

        {
            name: "Guingamp",
            logo: "https://upload.wikimedia.org/wikipedia/en/3/3b/En_Avant_de_Guingamp_logo.svg"
        },

        {
            name: "Laval",
            logo: "https://upload.wikimedia.org/wikipedia/en/4/4b/Stade_Lavallois_logo.svg"
        },

        {
            name: "Le Mans",
            logo: "https://upload.wikimedia.org/wikipedia/en/9/9b/Le_Mans_FC_logo.svg"
        },

        {
            name: "Montpellier",
            logo: "https://upload.wikimedia.org/wikipedia/en/a/a8/Montpellier_HSC_logo.svg"
        },

        {
            name: "Nancy",
            logo: "https://upload.wikimedia.org/wikipedia/en/8/8c/AS_Nancy_Lorraine_logo.svg"
        },

        {
            name: "Pau",
            logo: "https://upload.wikimedia.org/wikipedia/en/8/8e/Pau_FC_logo.svg"
        },

        {
            name: "Red Star",
            logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/Red_Star_F.C._logo.svg"
        },

        {
            name: "Reims",
            logo: "https://upload.wikimedia.org/wikipedia/en/2/29/Stade_de_Reims_logo.svg"
        },

        {
            name: "Rodez",
            logo: "https://upload.wikimedia.org/wikipedia/en/6/6c/Rodez_Aveyron_Football_logo.svg"
        },

        {
            name: "Saint-Étienne",
            logo: "https://upload.wikimedia.org/wikipedia/en/7/7c/AS_Saint-Etienne_logo.svg"
        },

        {
            name: "Troyes",
            logo: "https://upload.wikimedia.org/wikipedia/en/3/3e/ES_Troyes_AC_logo.svg"
        },

        {
            name: "Lorient",
            logo: "https://upload.wikimedia.org/wikipedia/en/7/70/FC_Lorient_logo.svg"
        }

    ])

},


// ========================================
// HOLANDA
// ========================================

"Holanda": {

    // ========================================
    // EREDIVISIE
    // ========================================

    "Eredivisie": criarClubes([

        {
            name: "Ajax",
            logo: "https://upload.wikimedia.org/wikipedia/en/7/79/Ajax_Amsterdam.svg"
        },

        {
            name: "AZ Alkmaar",
            logo: "https://upload.wikimedia.org/wikipedia/en/1/1f/Alkmaar_Zaanstreek.svg"
        },

        {
            name: "Feyenoord",
            logo: "https://upload.wikimedia.org/wikipedia/en/6/6f/Feyenoord_logo.svg"
        },

        {
            name: "Fortuna Sittard",
            logo: "https://upload.wikimedia.org/wikipedia/en/5/5f/Fortuna_Sittard.svg"
        },

        {
            name: "Go Ahead Eagles",
            logo: "https://upload.wikimedia.org/wikipedia/en/7/7c/Go_Ahead_Eagles_logo.svg"
        },

        {
            name: "Groningen",
            logo: "https://upload.wikimedia.org/wikipedia/en/7/7c/FC_Groningen_logo.svg"
        },

        {
            name: "Heracles Almelo",
            logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/Heracles_Almelo_logo.svg"
        },

        {
            name: "NAC Breda",
            logo: "https://upload.wikimedia.org/wikipedia/en/3/3e/NAC_Breda_logo.svg"
        },

        {
            name: "NEC Nijmegen",
            logo: "https://upload.wikimedia.org/wikipedia/en/5/5e/NEC_Nijmegen_logo.svg"
        },

        {
            name: "PEC Zwolle",
            logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/PEC_Zwolle_logo.svg"
        },

        {
            name: "PSV Eindhoven",
            logo: "https://upload.wikimedia.org/wikipedia/en/0/05/PSV_Eindhoven.svg"
        },

        {
            name: "RKC Waalwijk",
            logo: "https://upload.wikimedia.org/wikipedia/en/4/4e/RKC_Waalwijk_logo.svg"
        },

        {
            name: "Sparta Rotterdam",
            logo: "https://upload.wikimedia.org/wikipedia/en/2/2e/Sparta_Rotterdam_logo.svg"
        },

        {
            name: "FC Twente",
            logo: "https://upload.wikimedia.org/wikipedia/en/3/3f/FC_Twente.svg"
        },

        {
            name: "FC Utrecht",
            logo: "https://upload.wikimedia.org/wikipedia/en/3/3e/FC_Utrecht_logo.svg"
        },

        {
            name: "Go Ahead Eagles",
            logo: "https://upload.wikimedia.org/wikipedia/en/7/7c/Go_Ahead_Eagles_logo.svg"
        },

        {
            name: "Vitesse",
            logo: "https://upload.wikimedia.org/wikipedia/en/5/5f/Vitesse_logo.svg"
        },

        {
            name: "Willem II",
            logo: "https://upload.wikimedia.org/wikipedia/en/4/4f/Willem_II_logo.svg"
        }

    ])

}

};if (typeof module !== "undefined") {
    module.exports = footballDatabase;
}