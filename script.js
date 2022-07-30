const app = {};

const navBar = document.querySelector('.navBar');
const hamburgerMenu = document.querySelector('.hamburgerMenu');
const navBarContainer = document.querySelector('.navBarContainer');
const mobileNav = document.querySelector('.mobileNav');


app.displayMobileMenu = () => {
    hamburgerMenu.addEventListener('click', function() {
        navBar.classList.toggle('extendMenuDrop');
        navBarContainer.classList.toggle('extendMenuBorder');
        mobileNav.classList.toggle('extendMenuDisplay');
    })
}

app.init = () => {
    app.displayMobileMenu();
}

app.init();