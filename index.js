//# Ponto de entrada (menu principal)

const readline = require("readline-sync");
const { LoadProdutos, SalvarProdutos } = require("./utils/fileHandler");
const { addProduto, listarProdutos, atualizarProduto, removerProduto, buscarProduto } = require("./services/productService");
const produtos = LoadProdutos();


const opcoes = ["  ===AgilStore===", "1 - Adicionar Produto", "2 - Listar Produtos", "3 - Atualizar Produto", "4 - Remover Produto", "5 - Buscar Produto"];

while (true) {
    console.log("\n" + opcoes.join("\n"));

    let opcao = readline.question("Escolha uma opcao: ");

    if (opcao === "0") {
        console.log("Encerrando sistema...");
        break;
    }


    switch (opcao) {
        case "1":
            addProduto(produtos);
            SalvarProdutos(produtos);
            break;
        case "2":
            listarProdutos(produtos);
            SalvarProdutos(produtos);
            break;
        case "3":
            atualizarProduto(produtos);
            SalvarProdutos(produtos);
            break;
        case "4":
            removerProduto(produtos);
            SalvarProdutos(produtos);
            break;
        case "5":
            buscarProduto(produtos);
            SalvarProdutos(produtos);
            break;
        default:
            console.log("Opcao invalida! Tente novamente.");
            break;
    }

}



