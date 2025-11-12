const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

document.getElementById('lastmodified').textContent = `Last Modification: ${document.lastModified}`;

const header = document.querySelector('header');
const nav = document.querySelector('nav');

if (header && nav) {
    header.addEventListener('click', (event) => {
        if (window.innerWidth < 600) {
            nav.classList.toggle('open');
            header.classList.toggle('menu-open');
        }
    });
}