const sideImgs = document.querySelector('.side-images')
const deliverymanImg = document.querySelector('.deliveryman-img')
const addressContainer = document.querySelector('#address')

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
        deliverymanImg.setAttribute('data-aos-offset', '10')
    }

    if(window.innerWidth <= 458){
        sideImgs.setAttribute('data-aos-offset', '30')
        addressContainer.setAttribute('data-aos-offset', '-20')
    }

    if(window.innerWidth <= 368){
        sideImgs.setAttribute('data-aos-offset', '15')
    }
}

setBreakPoints()

window.addEventListener('resize', setBreakPoints);