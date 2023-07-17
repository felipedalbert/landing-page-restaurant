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

