const fs = require("fs");
const path = require("path");
const axios = require("axios");

const caminhoClubs = path.join(__dirname, "clubs.js");
const caminhoCorrigido = path.join(__dirname, "clubs-corrigidos.js");

const codigoOriginal = fs.readFileSync(caminhoClubs, "utf8");

const regex = /name:\s*"([^"]+)"\s*,\s*logo:\s*"([^"]*)"/g;

let resultado;
let clubes = [];

while ((resultado = regex.exec(codigoOriginal)) !== null) {

    clubes.push({
        name: resultado[1],
        logo: resultado[2]
    });

}

console.log("Clubes encontrados:", clubes.length);

async function buscarLogo(clube) {

    try {

        const busca = await axios.get(
            "https://www.wikidata.org/w/api.php",
            {
                params: {
                    action: "wbsearchentities",
                    search: clube.name,
                    language: "en",
                    format: "json",
                    limit: 5
                }
            }
        );

        const resultados = busca.data.search;

        for (const resultado of resultados) {

            const entidade = await axios.get(
                "https://www.wikidata.org/w/api.php",
                {
                    params: {
                        action: "wbgetentities",
                        ids: resultado.id,
                        props: "claims",
                        format: "json"
                    }
                }
            );

            const claims =
                entidade.data.entities[resultado.id].claims;

            if (claims && claims.P154) {

                const arquivo =
                    claims.P154[0].mainsnak.datavalue.value;

                const nomeArquivo =
                    arquivo.replace(/ /g, "_");

                const imagem = await axios.get(
                    "https://commons.wikimedia.org/w/api.php",
                    {
                        params: {
                            action: "query",
                            titles: "File:" + nomeArquivo,
                            prop: "imageinfo",
                            iiprop: "url",
                            format: "json"
                        }
                    }
                );

                const paginas =
                    imagem.data.query.pages;

                const pagina =
                    Object.values(paginas)[0];

                if (
                    pagina.imageinfo &&
                    pagina.imageinfo[0]
                ) {

                    return pagina.imageinfo[0].url;

                }

            }

        }

    } catch (erro) {

        console.log(
            "Erro ao buscar:",
            clube.name
        );

    }

    return null;

}

async function corrigirBanco() {

    let codigoCorrigido = codigoOriginal;

    let corrigidos = 0;

    for (const clube of clubes) {

        console.log(
            "\nBuscando:",
            clube.name
        );

        const novoLogo =
            await buscarLogo(clube);

        if (novoLogo) {

            const logoAntigo =
                clube.logo.replace(
                    /[.*+?^${}()|[\]\\]/g,
                    "\\$&"
                );

            codigoCorrigido =
                codigoCorrigido.replace(
                    new RegExp(logoAntigo, "g"),
                    novoLogo
                );

            corrigidos++;

            console.log(
                "CORRIGIDO:",
                clube.name
            );

        } else {

            console.log(
                "Não encontrado:",
                clube.name
            );

        }

    }

    fs.writeFileSync(
        caminhoCorrigido,
        codigoCorrigido,
        "utf8"
    );

    console.log("\n================================");
    console.log("PROCESSO TERMINADO");
    console.log("================================");
    console.log(
        "Clubes corrigidos:",
        corrigidos
    );
    console.log(
        "Arquivo criado:",
        "clubs-corrigidos.js"
    );

}

corrigirBanco();
console.log("O SCRIPT FOI EXECUTADO!");