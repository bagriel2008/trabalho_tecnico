let imagens = [
    'assets_comida/MicrosoftTeams-image (31).png',
    'assets/MicrosoftTeams-image (19).png'
];
let imagemIndex = 0;

function trocarImagem(direcao) {
    imagemIndex = (imagemIndex + direcao + imagens.length) % imagens.length;
    document.getElementById("produto-imagem").src = imagens[imagemIndex];
}


