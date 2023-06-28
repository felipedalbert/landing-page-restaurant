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

        setTimeout(() => {window.location.href = `../../../${anchorUrl}`}, 300)
    });
})