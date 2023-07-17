const locationAnchor = document.querySelector('[data-url="index.html#contact"]:last-child') 

if(window.innerWidth <= 680) locationAnchor.setAttribute('data-url', 'index.html#address')