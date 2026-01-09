// Geração de ID única

function generateId(produtos) {
    if (produtos.length === 0) {
        return 1;
    }
    return produtos[produtos.length - 1].id + 1;
}

module.exports = {
    generateId
};