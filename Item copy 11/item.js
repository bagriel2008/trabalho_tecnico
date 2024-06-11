let imagens = [
    'assets_comida/MicrosoftTeams-image (35).png',
    'assets/MicrosoftTeams-image (23).png'
];
let imagemIndex = 0;

function trocarImagem(direcao) {
    imagemIndex = (imagemIndex + direcao + imagens.length) % imagens.length;
    document.getElementById("produto-imagem").src = imagens[imagemIndex];
}


