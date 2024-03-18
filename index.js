const minhaImagem = document.getElementById('imagemCentral');
const fatorZoom = 1.1;
minhaImagem.addEventListener('mouseenter', () => {
    minhaImagem.style.transform = `scale(${fatorZoom})`;
});

minhaImagem.addEventListener('mouseleave', () => {
    minhaImagem.style.transform = 'scale(1)';
});
