function calcularValorTotalDaCompraComDesconto(valorCompra, desconto) {
    const valorFinalDaCompra = valorCompra - desconto;
    return valorFinalDaCompra;
}

module.exports = {
    calcularValorTotalDaCompraComDesconto
}