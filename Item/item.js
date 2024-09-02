async function carregarProduto() {
    try {
        const response = await fetch('http://localhost:3333/produto/listar');
        const data = await response.json();

        if (data.success) {
            const products = data.data[0];

            document.getElementById('produtoNome').innerText = products.name;
            document.getElementById('descricao').querySelector('p').innerText = products.description;
            document.getElementById('produtoPreco').innerText = `R$ ${products.price}`;

           
        } else {
            console.error('Erro ao carregar o produto:', data.message);
        }
    } catch (error) {
        console.error('Erro ao buscar os dados:', error);
    }
}

document.addEventListener('DOMContentLoaded', carregarProduto);
