// header.js

export function initMenuToggle() {
    const toggleButton = document.querySelector('.menu-toggle');
    const navHeader = document.querySelector('.navHeader');

    if (toggleButton && navHeader) {
        toggleButton.addEventListener('click', () => {
            navHeader.classList.toggle('show');
        });
    }
}

export function initScrollSpy() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.headerli a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}
