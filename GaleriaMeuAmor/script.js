//Seleciona as fotos da galeria//
const photos = document.querySelector('.photo img');

//selecina o lightbox e o conteudo da img//
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const CloseBtn = document.querySelector('.close');

//Add events de clique na fots//
photos.forEach(photo => {
    photo.addEventListener('click', function(){
        lightbox.style.display = 'flex'; //exibs lightbox
        lightboxImg.src = this.src;    
    });
});

//fecha o lightbox quando aprta o botao
CloseBtn.addEventListener('click', function(){
    lightbox.style.display = 'none';
});