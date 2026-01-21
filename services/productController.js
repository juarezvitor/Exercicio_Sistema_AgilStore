

class ProductController {
    constructor(productService) {
        this.productService = productService;
    }

    adicionarProduto(DadosProduto) {
        this.productService.addProduto(DadosProduto);
    }

    listarProduto(produtos) {
        this.productService.listarProdutos(produtos);
    }

    atualizarProduto(DadosAttProd) {
        this.productService.atualizarProduto(DadosAttProd)
    }
    removerProduto() {
        this.productService.removerProduto()
    }
    buscarProduto(produtos) {
        this.productService.buscarProduto(produtos)
    }

}

module.exports = ProductController;