let openMenu = document.querySelector('.open-menu-btn');
let closeMenu = document.querySelector('.close-menu-btn');
let navigation = document.querySelector('.navigation');

openMenu.addEventListener('click', () => {
    navigation.classList.toggle('active');
})

closeMenu.addEventListener('click', () => {
    navigation.classList.toggle('active');
})