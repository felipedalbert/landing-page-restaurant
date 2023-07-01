AOS.init();

const rightBottomBtns = document.querySelectorAll('.rigth-bottom-btn')

window.addEventListener('scroll', () => {
    rightBottomBtns.forEach(btn => btn.classList.toggle('active', window.scrollY > 50))
})


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
const addressContainer = document.querySelector('#address')

if(window.innerWidth <= 680){
    locationAnchor.setAttribute('data-url', 'index.html#address')
    addressContainer.style.scrollMarginTop = '140px'
}



const sideImgs = document.querySelector('.side-images')
const deliverymanImg = document.querySelector('.deliveryman-img')

function setBreakPoints(){
    if(window.innerWidth <= 1024){
        sideImgs.setAttribute('data-aos-duration', '1500')
        sideImgs.setAttribute('data-aos-offset', '160')
        deliverymanImg.setAttribute('data-aos-offset', '40')
        deliverymanImg.setAttribute('data-aos-duration', '1600')
        addressContainer.setAttribute('data-aos-offset', '80')
        addressContainer.setAttribute('data-aos-duration', '1400')
    }

    if(window.innerWidth <= 818){
        sideImgs.setAttribute('data-aos-duration', '1500')
        sideImgs.setAttribute('data-aos-offset', '120')
        deliverymanImg.setAttribute('data-aos-offset', '20')
        addressContainer.setAttribute('data-aos-offset', '90')
    }

    if(window.innerWidth <= 680){
        deliverymanImg.setAttribute('data-aos-offset', '0')
        deliverymanImg.setAttribute('data-aos-duration', '1500')
        addressContainer.setAttribute('data-aos-offset', '80')
    }

    if(window.innerWidth <= 548){
        sideImgs.setAttribute('data-aos-offset', '100')
        addressContainer.setAttribute('data-aos-offset', '40')
    }

    if(window.innerWidth <= 498){
        sideImgs.setAttribute('data-aos-offset', '60')
        deliverymanImg.setAttribute('data-aos-offset', '-20')
    }

    if(window.innerWidth <= 458){
        sideImgs.setAttribute('data-aos-offset', '30')
        deliverymanImg.setAttribute('data-aos-offset', '-40')
        addressContainer.setAttribute('data-aos-offset', '-20')
    }

    if(window.innerWidth <= 368){
        sideImgs.setAttribute('data-aos-offset', '15')
        addressContainer.setAttribute('data-aos-offset', '0')
    }
}

setBreakPoints()

window.addEventListener('resize', setBreakPoints);