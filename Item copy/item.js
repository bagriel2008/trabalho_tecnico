let imagens = [
    'assets_comida/MicrosoftTeams-image (25).png',
    'assets/MicrosoftTeams-image (13).png'
];
let imagemIndex = 0;

function trocarImagem(direcao) {
    imagemIndex = (imagemIndex + direcao + imagens.length) % imagens.length;
    document.getElementById("produto-imagem").src = imagens[imagemIndex];
}


