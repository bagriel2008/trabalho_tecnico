let imagens = [
    'assets_comida/MicrosoftTeams-image (30).png',
    'assets/MicrosoftTeams-image (18).png'
];
let imagemIndex = 0;

function trocarImagem(direcao) {
    imagemIndex = (imagemIndex + direcao + imagens.length) % imagens.length;
    document.getElementById("produto-imagem").src = imagens[imagemIndex];
}

