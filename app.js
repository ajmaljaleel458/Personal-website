const slideFun = () => {
    const burger = document.querySelector('.menu-bars');
    const navbar = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li a')
    burger.addEventListener('click', () => {
        navbar.classList.toggle('nav-links-active');
        navLinks.forEach((links, index) => {
            if (links.style.animation) {
                links.style.animation = '';
            } else {
                links.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`
            }
        })
    })

}


slideFun()