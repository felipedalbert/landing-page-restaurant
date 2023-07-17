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