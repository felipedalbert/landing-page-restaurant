const locationAnchor = document.querySelector('[data-url="#contact"]:last-child') 

if(window.innerWidth <= 680) locationAnchor.setAttribute('data-url', 'index.html#address')