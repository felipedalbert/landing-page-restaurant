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
        const defaultDomain = 'https://felipedalbert.github.io/landing-page-restaurant/'

        if(window.innerWidth <= 1024){
            setTimeout(() => {window.location.href = defaultDomain + directoryUrl}, 300)
        }else{
            window.location.href = defaultDomain + directoryUrl
        }    
    });
})