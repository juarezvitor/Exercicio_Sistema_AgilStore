//# Ponto de entrada (menu principal)

const readline = require("readline-sync");
const { LoadProdutos, SalvarProdutos } = require("./utils/fileHandler");
const ProductService = require("./services/productServiceClass");
const ProductController = require("./services/productController");


const produtos = LoadProdutos();


const productService = new ProductService(produtos);
const productController = new ProductController(productService)


class interfaceCli {

    constructor(produtos) {
        this.produtos = produtos;

    }

    //Metodo inicial, vai mostrar as opções pro usuário escolher, logo apos passa a opção escolhida para validação
    mostrarOpcoes() {


        const opcoes = ["  ===AgilStore===", "1 - Adicionar Produto", "2 - Listar Produtos", "3 - Atualizar Produto", "4 - Remover Produto", "5 - Buscar Produto", "0 - Sair"];

        while (true) {
            console.log("\n" + opcoes.join("\n"));
            let opcao = readline.question("Escolha uma opcao: ");
            this.validaOpcoes(parseInt(opcao));

        }
    }


    //Método para validar a opção escolhida pelo usuário, e então vai chamar o método correspondente passando pelo controller
    validaOpcoes(opcaoUsuario) {

        if (opcaoUsuario < 0 || opcaoUsuario > 5) {
            console.log("Opcao invalida! Tente novamente.");
            return false;
        }

        switch (opcaoUsuario) {
            case 1:
                productController.adicionarProduto(this.infoProdutos(opcaoUsuario));
                SalvarProdutos(this.produtos);
                break;
            case 2:
                productController.listarProduto(this.produtos);
                SalvarProdutos(this.produtos);
                break;
            case 3:
                productController.atualizarProduto(this.infoProdutos(opcaoUsuario));
                SalvarProdutos(this.produtos)
                break;
            case 4:

                productController.removerProduto()
                SalvarProdutos(this.produtos)
                console.log("escolhe opcao 4");
                break;
            case 5:
                productController.buscarProduto(produtos)
                SalvarProdutos(this.produtos)
                console.log("escolhe opcao 5");
                break;
            case 0:
                console.log("Encerrando sistema...");
                break;
        }
    }


    infoProdutos(optUsuario) {

        const dadosUsuarios = {
            iD: null,
            nome: "",
            categoria: "",
            preco: "",
            quantidade: ""
        }

        if (optUsuario === 3) {

            dadosUsuarios.iD = readline.question("ID do produto: ");
            dadosUsuarios.nome = readline.question("Nome do produto: ");
            dadosUsuarios.categoria = readline.question("Categoria do produto: ");
            dadosUsuarios.preco = parseFloat(readline.question("Preço do produto: "));
            dadosUsuarios.quantidade = parseInt(readline.question("Quantidade em estoque: "));

        } else {


            dadosUsuarios.nome = readline.question("Nome do produto: ");
            dadosUsuarios.categoria = readline.question("Categoria do produto: ");
            dadosUsuarios.preco = parseFloat(readline.question("Preço do produto: "));
            dadosUsuarios.quantidade = parseInt(readline.question("Quantidade em estoque: "));

        }




        return dadosUsuarios;

    }



}


const interface = new interfaceCli(produtos);

interface.mostrarOpcoes();




















/*const opcoes = ["  ===AgilStore===", "1 - Adicionar Produto", "2 - Listar Produtos", "3 - Atualizar Produto", "4 - Remover Produto", "5 - Buscar Produto"];

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

} */



