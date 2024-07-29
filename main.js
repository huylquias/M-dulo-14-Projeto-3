document.addEventListener('DOMContentLoaded', (event) => {
    const toggler = document.querySelector('.navbar-toggler');
    toggler.addEventListener('click', () => {
        toggler.classList.toggle('clicked');
    });
});
