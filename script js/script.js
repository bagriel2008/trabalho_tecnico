function adicionarAoCarrinho(produtoNome, produtoPreco) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    let produto = carrinho.find(item => item.nome === produtoNome);

    if (produto) {
        produto.quantidade++;
    } else {
        carrinho.push({ nome: produtoNome, preco: produtoPreco, quantidade: 1 });
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    atualizarCarrinho();
}



// fazer com que apareça os produtos

function atualizarCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    let itensCarrinho = document.querySelector('.produtos');
    let limparCarrinho

    itensCarrinho.innerHTML = '';

    carrinho.forEach(item => {
        let produtoHTML = `
                <div class="primeiroProduto">
                    <div class="primeiroQuadrado">
                        <button class="segundoQuadrado" id="segundoQuadrado_${item.nome}" onclick="toggleItem('${item.nome}', ${item.preco})">
                            <div></div>
                        </button>
                        <div class="produto">
                            <div class="item"> <img src="./assetss/${item.nome}.png" alt=""></div>
                            <div>
                                <p>${item.nome}</p>
                                <p>Preço: R$ <span class="preco">${item.preco}</span></p>
                                <p>Quantidade: ${item.quantidade}</p>
                            </div>
                        </div>
                    </div>
                </div>`;

        itensCarrinho.insertAdjacentHTML('beforeend', produtoHTML);
    });

    let limparCarrinhoHTML = `
    <div class="limparCarrinho">
        <button onclick="limparCarrinho()"><h1>Limpar o carrinho</h1></button>
    </div>`;


    itensCarrinho.insertAdjacentHTML('beforeend', limparCarrinhoHTML);

    atualizarInformacoesCarrinho();
}

// limpar o carrinho

function limparCarrinho() {

    itensSelecionados = 0;
    custoTotal = 0;

    document.getElementById('itensEscolhidos').textContent = '0';
    document.getElementById('custoTotal').textContent = '0';

    if (localStorage.getItem("itensSelecionados")) {
        localStorage.clear("itensSelecionados");
        atualizarCarrinho();

    }else if (localStorage.getItem("carrinho")) {
        localStorage.clear("carrinho");
        atualizarCarrinho();
    }
}



atualizarCarrinho();