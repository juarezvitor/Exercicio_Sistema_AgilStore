//Regras de negócio (CRUD)

const readline = require("readline-sync");
const { generateId } = require("../utils/idGenerator");

// Função para adicionar um produto


function addProduto(produtos) {

    console.log("\n=== Adicionar Produto ===");

    const product = {
        id: generateId(produtos),
        nome: readline.question("Nome do produto: "),
        catergoria: readline.question("Categoria do produto:"),
        preco: parseFloat(readline.question("Preco do produto: ")),
        quantidade: parseInt(readline.question("Quantidade em estoque: "))

    }

    produtos.push(product);

    console.log("✅ Produto adicionado com sucesso!");
}

// Função para listar produtos
function listarProdutos(produtos) {
    console.log("\n=== Lista de Produtos ===");

    if (produtos.length === 0) {
        console.log("Nenhum produto cadastrado.");
        return;
    }

    console.table(produtos)


}

// Função para atualizar um produto
function atualizarProduto(produtos) {
    console.log("\n=== Atualizar Produto ===");

    const id = readline.questionInt("Informe o ID do produto: ");

    const product = produtos.find(p => p.id === id);

    if (!product) {
        console.log("Produto nao encontrado.");
        return;
    }

    console.log("Pressione ENTER para manter o valor atual.\n");

    const newName = readline.question(`Nome (${product.nome}): `);
    const newCategory = readline.question(`Categoria (${product.catergoria}): `);
    const newQuantity = readline.question(`Quantidade (${product.quantidade}): `);
    const newPrice = readline.question(`Preço (${product.preco}): `);

    if (newName) product.nome = newName;
    if (newCategory) product.catergoria = newCategory;
    if (newQuantity) product.quantidade = Number(newQuantity);
    if (newPrice) product.preco = Number(newPrice);

    console.log("✅ Produto atualizado com sucesso!");
}

// Função para remover um produto
function removerProduto(produtos) {
    console.log("\n=== Excluir Produto ===");

    const id = readline.questionInt("Informe o ID do produto: ");

    const index = produtos.findIndex(p => p.id === id);

    if (index === -1) {
        console.log("❌ Produto não encontrado.");
        return;
    }

    const confirm = readline.question(
        `Tem certeza que deseja excluir o produto "${produtos[index].name}"? (s/n): `
    );

    if (confirm.toLowerCase() === "s") {
        produtos.splice(index, 1);
        console.log("✅ Produto excluído com sucesso!");
    } else {
        console.log("❌ Exclusão cancelada.");
    }

}

// Função para buscar um produto
function buscarProduto(produtos) {
    console.log("\n=== Buscar Produto ===");

    const term = readline.question("Buscar por ID ou Nome:")

    //Buscar por id

    const ID = Number(term);

    let resultados

    if (!isNaN(ID)) {
        resultados = produtos.filter(prod => prod.id === ID);
    } else {
        resultados = produtos.filter(prod => prod.nome.toLowerCase().includes(term.toLowerCase()));
    }

    if (resultados.length === 0) {
        console.log("Nenhum produto encontrado.");
        return;
    }

    console.table(resultados);
}


// Exportando as funções para serem usadas em outros módulos
module.exports = {
    addProduto,
    listarProdutos,
    atualizarProduto,
    removerProduto,
    buscarProduto
};