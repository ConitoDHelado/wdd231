const button = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');

button.addEventListener('click', () => {
    button.classList.toggle('show');
    navBar.classList.toggle('show');
})