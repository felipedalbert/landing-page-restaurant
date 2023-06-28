const openMenu = document.querySelector('.open-menu-btn');
const closeMenu = document.querySelector('.close-menu-btn');
const navigation = document.querySelector('.navigation');
const navItems = document.querySelectorAll('.item');

console.log(navItems)

openMenu.addEventListener('click', () => navigation.classList.toggle('active'))

closeMenu.addEventListener('click', () => navigation.classList.toggle('active'))

navItems.forEach(item => {
    item.addEventListener('click', () => {navigation.classList.toggle('active')})
});