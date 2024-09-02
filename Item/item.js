
document.addEventListener('DOMContentLoaded', () => {
    // Extrai o ID do produto da URL
    const params = new URLSearchParams(window.location.search);
    const productsId = params.get('id');

    if (productsId) {
        // Faz a requisição ao backend para buscar os detalhes do produto
        fetch(`http://localhost:3333/produto/listar`)
            .then(response => response.json())
            .then(products => {
                // Preenche os campos na página com os dados do produto
                document.getElementById('produtoNome').innerText = products.name;
                document.getElementById('descricao').querySelector('p').innerText = products.description;
                document.getElementById('produtoPreco').innerText = `R$ ${products.price}`;
                // Se houver uma URL de imagem, a define no elemento de imagem
                if (products.imagem_link) {
                    document.getElementById('produto-imagem').src = products.imagem_link;
                }
            })
            .catch(error => console.error('Erro ao carregar produto:', error));
    } else {
        console.error('ID do produto não encontrado na URL');
    }
});
