const produtos = {
    nome: "Produto 1",
    tipo: "Limpeza",
    preco: "10.00",
    quantidade: "10"
}


localStorage.setItem('cart', JSON.stringify(produtos));  
 
 
///////////////////////////////////////////
 
const carrinho = JSON.parse(localStorage.getItem("cart"))
console.log(carrinho)