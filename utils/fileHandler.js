// Leitura e escrita do JSON

const fs = require("fs");
const path = "./products.json";


function LoadProdutos() {
    try {
        if (!fs.existsSync(path)) return [];

        const data = fs.readFileSync(path, "utf-8");
        return JSON.parse(data);

    } catch (error) {
        console.error("Erro ao carregar produtos:", error);
        return [];

    }
}

function SalvarProdutos(produtos) {
    try {
        fs.writeFileSync(path, JSON.stringify(produtos, null, 2));
    } catch (error) {
        console.error("Erro ao salvar produtos:", error);
    }
}

module.exports = {
    LoadProdutos,
    SalvarProdutos
};
