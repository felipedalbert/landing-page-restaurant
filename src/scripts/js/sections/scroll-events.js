const rightBottomBtns = document.querySelectorAll('.rigth-bottom-btn')

window.addEventListener('scroll', () => {
    rightBottomBtns.forEach(btn => btn.classList.toggle('active', window.scrollY > 50))
})