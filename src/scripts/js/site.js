const openMenu = document.querySelector('.open-menu-btn');
const closeMenu = document.querySelector('.close-menu-btn');
const navigation = document.querySelector('.navigation');
const navItems = document.querySelectorAll('.item');

openMenu.addEventListener('click', () => navigation.classList.toggle('active'))

closeMenu.addEventListener('click', () => navigation.classList.toggle('active'))

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        navigation.classList.toggle('active')

        let anchorUrl = item.querySelector('a').getAttribute('data-url')

        if(window.innerWidth <= 1024){
            setTimeout(() => {window.location.href = `../../../${anchorUrl}`}, 300)
        }else{
            window.location.href = `../../../${anchorUrl}`
        }    
    });
})



const carouselImages = document.querySelectorAll('.carousel-img');
const indicators = document.querySelectorAll('.indicator');
const totalImages = carouselImages.length - 1;
let currentImage = 0;
let timer = setInterval(()=>{changeImage()}, 5000);

function changeImage(){
    carouselImages[currentImage].classList.remove('active');
    
    currentImage = (currentImage === totalImages) ? 0 : ++currentImage;

    carouselImages[currentImage].classList.add('active');

    changeIndicator()
}

function clearTimer() {
    clearInterval(timer);
    timer = setInterval(()=>{changeImage()}, 5000); 
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

        console.log(indicator)
    });
});



const questions = document.querySelectorAll('.line-question')

questions.forEach(question => {
    question.addEventListener('click', () =>{

        let currentActiveQuestion = question.parentNode.querySelector('.active')

        if(currentActiveQuestion){
            currentActiveQuestion.classList.remove('active');

            if(currentActiveQuestion == question) return
        }

        question.classList.add('active');
    })
})