document.addEventListener('DOMContentLoaded', async () => {
    const productList = document.getElementById('catalogContainer');

    try {
        const response = await fetch('http://localhost:3333/produto/listar'); // Substitua pelo seu servidor, se necessário
        const result = await response.json();

        if (result.success) {
            const products = result.data;
            products.forEach(products => {
                const productDiv = document.createElement('div');
                productDiv.className = 'retangulo';

                productDiv.innerHTML = `
                    <a href="../item/index.html"><img src="${products.imagem_link}" class="itens" alt="${products.name}"></a>
                    <p>${products.name}</p>
                    <p>R$ ${products.price}</p>
                `;

                productList.appendChild(productDiv);
            });
        } else {
            productList.innerHTML = '<p>Erro ao carregar produtos.</p>';
        }
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        productList.innerHTML = '<p>Erro ao carregar produtos.</p>';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const adicionarIcon = document.getElementById('adicionar');

    // Verifica o status de login no localStorage
    if (localStorage.getItem('isLoggedIn') === 'true') {
        adicionarIcon.style.display = 'block'; // Mostra o ícone
    } else {
        adicionarIcon.style.display = 'none'; // Garante que o ícone esteja escondido
    }
});