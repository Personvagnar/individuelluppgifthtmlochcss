const ButtonAbout = document.getElementById('aboutbutton');
const ButtonBook = document.getElementById('bookbutton');
const HamburgerMenu = document.getElementById('hamburgermenu');

HamburgerMenu.addEventListener('click', () => {
    window.location.href = 'index.html';
});

ButtonBook.addEventListener('click', () => {
    window.location.href = 'book.html';
});

ButtonAbout.addEventListener('click', () => {
    window.location.href = 'about.html';
});