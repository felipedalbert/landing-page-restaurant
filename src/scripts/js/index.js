const openMenu = document.querySelector('.open-menu-btn');
const closeMenu = document.querySelector('.close-menu-btn');
const navigation = document.querySelector('.navigation');
const navItems = document.querySelectorAll('.internal-link');

function toggleMenu(){navigation.classList.toggle('active')}

openMenu.addEventListener('click', toggleMenu)

closeMenu.addEventListener('click', toggleMenu)

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        toggleMenu()

        const directoryUrl = item.querySelector('a').getAttribute('data-url')
        const defaultDomain = 'https://felipedalbert.github.io/sandigo-restaurant/'

        if(window.innerWidth <= 1024){
            setTimeout(() => {window.location.href = defaultDomain + directoryUrl}, 300)
        }else{
            window.location.href = defaultDomain + directoryUrl
        }    
    });
})



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



const questions = document.querySelectorAll('.line-question')
const knowMoreBtn = questions[0].parentNode.querySelector('a')

questions.forEach(question => {

    question.addEventListener('click', (e) =>{

        let currentActiveQuestion = question.parentNode.querySelector('.active')

        if(currentActiveQuestion){

            if(e.target == knowMoreBtn) return

            currentActiveQuestion.classList.remove('active');

            if(currentActiveQuestion == question) return
        }

        question.classList.add('active');
    })
})



const form =  document.querySelector('.form-container')
const inputData = form.querySelectorAll('[placeholder]')
const validationAlert = document.querySelector('.validation-alert')
let validationIcon

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let control = 0;

    inputData.forEach(input => {
        if (input.value == '') control++;
    })

    if (control > 0){
        validationAlert.classList.remove('error-validation')
        validationAlert.classList.add('active','error-validation')
        validationAlert.innerHTML = 'Preencha todos os campos! <i class="fa-solid fa-xmark"></i>'
        validationIcon = validationAlert.querySelector('i')
    }else{
        validationAlert.classList.add('active','correct-validation')
        validationAlert.innerHTML = 'Mensagem enviada com sucesso! <i class="fa-solid fa-check"></i>'
        validationAlert.querySelector('i').disabled = true

        setTimeout(()=>form.submit(), 50)
    }

    validationIcon.addEventListener('click', () => {
        validationAlert.classList.remove('active')
    })
})

const locationAnchor = document.querySelector('[data-url="index.html#contact"]:last-child') 

if(window.innerWidth <= 1024){
    locationAnchor.setAttribute('data-url', 'index.html#address')
}

