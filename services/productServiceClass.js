const readline = require("readline-sync");
const { generateId } = require("../utils/idGenerator");
const { ProdutosEntity } = require("./productEntity");






class ProductService {
    constructor(produtos) {
        this.produtos = produtos;
    }

    //Método para adicionar um produto
    addProduto(dadosUsuarios) {
        console.log("\n=== === ===");

        const product = new ProdutosEntity(
            generateId(this.produtos),
            dadosUsuarios.nome,
            dadosUsuarios.categoria,
            dadosUsuarios.preco,
            dadosUsuarios.quantidade
        );

        this.produtos.push(product);


        console.log("✅ Produto adicionado com sucesso!");
    }

    //Método para listar produtos
    listarProdutos(produtos) {
        console.log("\n=== Lista de Produtos ===");

        if (produtos.length === 0) {
            console.log("Nenhum produto cadastrado.");
            return;

        }

        console.table(this.produtos)

    }

    //Método para atualizar um produto
    atualizarProduto(dadosUsuarios) {
        console.log("\n=== Atualizar Produto ===");


        const product = this.produtos.find(p => p.id === Number(dadosUsuarios.iD))

        if (!product) {
            console.log("Produto nao encontrado.");
            return;
        }

        const newName = dadosUsuarios.nome;
        const newCategory = dadosUsuarios.categoria;
        const newQuantity = dadosUsuarios.quantidade;
        const newPrice = dadosUsuarios.preco;

        if (newName) product.nome = newName;
        if (newCategory) product.categoria = newCategory;
        if (newQuantity) product.quantidade = parseInt(newQuantity);
        if (newPrice) product.preco = parseFloat(newPrice);

        console.log("✅ Produto atualizado com sucesso!");
        console.table(this.produtos)

    }

    //Método para remover um produto
    removerProduto() {
        console.log("\n=== Remover Produto ===");

        const id = readline.question("ID do produto: ");

        const index = this.produtos.findIndex(p => p.id === Number(id));

        if (index === -1) {
            console.log("Produto nao encontrado.");
            return;
        }

        const confirm = readline.question(
            `Tem certeza que deseja excluir o produto "${this.produtos[index].nome}"? (s/n): `);

        if (confirm.toLowerCase() === "s") {
            this.produtos.splice(index, 1);
            console.log("✅ Produto removido com sucesso!");
            console.table(this.produtos)
        } else {
            console.log("Operação cancelada.");
        }
    }

    //Função para buscar um produto

    buscarProduto(produtos) {
        console.log("\n=== Buscar Produto ===");

        const termo = readline.question("Informe o nome ou ID ou NOME do produto: ");

        const ID = Number(termo);

        let resultados

        if (!isNaN(ID)) {
            resultados = produtos.filter(p => p.id === ID);
        } else {
            resultados = produtos.filter(p => p.nome.toLowerCase().includes(termo.toLocaleLowerCase()))
        }
        if (resultados.length === 0) {
            console.log("Nenhum produto encontrado.");
            return;
        }
        console.table(resultados);
    }

}

module.exports = ProductService;

/*module.exports = {
    addProduto: (produtos) => { new ProductService().addProduto(produtos); },
    listarProdutos: (produtos) => { new ProductService().listarProdutos(produtos); },
    atualizarProduto: (produtos) => { new ProductService().atualizarProduto(produtos); },
    removerProduto: (produtos) => { new ProductService().removerProduto(produtos); },
    buscarProduto: (produtos) => { new ProductService().buscarProduto(produtos); }
}; */