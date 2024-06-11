
function toggleItem(nome, preco) {
    let quadrado = document.getElementById('segundoQuadrado_' + nome);
    let itensEscolhidos = document.getElementById('itensEscolhidos');
    let custoTotalElement = document.getElementById('custoTotal');

    let itensSelecionados = JSON.parse(localStorage.getItem('itensSelecionados')) || {};

    if (!quadrado.classList.contains('selecionado')) {
        quadrado.classList.add('selecionado');
        quadrado.innerHTML = 'X';

        // Adicionando o item selecionado ao objeto itensSelecionados
        itensSelecionados[nome] = {
            nome: nome,
            preco: preco,
            quantidade: 1 // Definindo a quantidade inicial como 1
        };
    } else {
        quadrado.classList.remove('selecionado');
        quadrado.innerHTML = '';

        // Removendo o item selecionado do objeto itensSelecionados
        delete itensSelecionados[nome];
    }

    // Salvando a lista de itens selecionados no localStorage
    localStorage.setItem('itensSelecionados', JSON.stringify(itensSelecionados));

    // Atualizando a quantidade de itens selecionados
    let selecionados = Object.keys(itensSelecionados).length;
    itensEscolhidos.textContent = selecionados;

    // Calculando o custo total dos itens selecionados
    let custoTotal = 0;
    for (let item in itensSelecionados) {
        custoTotal += itensSelecionados[item].preco * itensSelecionados[item].quantidade;
    }
    custoTotalElement.textContent = custoTotal.toFixed(2);
}







// Função para exibir os itens selecionados no checkout ao carregar a página
window.addEventListener('DOMContentLoaded', function () {
    resultadoFinal();
});

// Função para exibir os itens selecionados no checkout
function resultadoFinal() {
    let itensSelecionados = JSON.parse(localStorage.getItem('itensSelecionados')) || {};
    let checkoutContainer = document.querySelector('.compras .itens');
    let total = 0;

    checkoutContainer.innerHTML = '';

    for (let nome in itensSelecionados) {
        let item = itensSelecionados[nome];

        let produtoHTML = `
            <div>
                <div class="primeiroItem">
                    <img src="./assetss/${item.nome}.png" alt="${item.nome}">
                    <div>
                        <p class="descricao">${item.nome}</p>
                        <p class="preco">Preço: R$ <span class="item-preco">${(item.preco * item.quantidade).toFixed(2)}</span></p>
                        <p class="qntd">Quantidade: ${item.quantidade}</p>
                    </div>
                </div>
            </div>`;

        checkoutContainer.insertAdjacentHTML('beforeend', produtoHTML);

        total += item.preco * item.quantidade;
    }

    let totalCompraHTML = `
        <div class="container">
            <p>Total: <span id="total">R$ ${total.toFixed(2)}</span></p>
            <p>Desconto:R$ 0 <span ${total.toFixed(2)}</span></p>
        </div>`;

    let confirmarCompraHTML = `
        <div class="confirmarCompra">
            <button id="confirmar-compra">
                <p>Confirmar compra</p>
            </button>
        </div>`;

    let informacoesContainer = document.querySelector('.informacoes');
    informacoesContainer.innerHTML = totalCompraHTML + confirmarCompraHTML;
    const confirmarCompraBtn = document.getElementById('confirmar-compra');

    if (confirmarCompraBtn) {
        confirmarCompraBtn.addEventListener('click', function () {
            // Limpa o localStorage
            localStorage.clear();

            // Exibe uma mensagem de confirmação
            alert('Compra confirmada! O carrinho foi limpo.');

            // Opcional: redirecionar para outra página
            // window.location.href = 'pagina_de_confirmacao.html';
        });
    } else {
        console.error('Botão de confirmar compra não encontrado.');
    }  document.getElementById('confirmar-compra').addEventListener('click', function() {
        // Limpa o localStorage
        localStorage.clear();

        // Zera o valor total
        document.getElementById('total').textContent = 'R$ 0.00';

        // Remove todas as imagens e informações dos produtos
        checkoutContainer.innerHTML = '';

        // Exibe uma mensagem de confirmação
        alert('Compra confirmada! O carrinho foi limpo.');

        // Opcional: redirecionar para outra página
        // window.location.href = 'pagina_de_confirmacao.html';
    });
}


