const carouselImages = document.querySelectorAll('.carousel-img');
const indicators = document.querySelectorAll('.indicator');
const totalImages = carouselImages.length - 1;
let currentImage = 0;
let timer = setInterval(changeImage, 4000);

function changeImage(){
    carouselImages[currentImage].classList.remove('active');
    
    currentImage = (currentImage === totalImages) ? 0 : ++currentImage;

    carouselImages[currentImage].classList.add('active');

    changeIndicator()
}

function clearTimer() {
    clearInterval(timer);
    timer = setInterval(changeImage, 5000); 
}

function changeIndicator(){
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === currentImage);
    });
}

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        clearTimer()
        
        carouselImages.forEach((imagem, i) => {
            imagem.classList.toggle('active', i === index);
            currentImage = index
        });
        
        changeIndicator()
    });
});