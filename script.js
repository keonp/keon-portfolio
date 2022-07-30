const app = {};

const hamburgerMenu = document.querySelector('.hamburgerMenu');
const navBar = document.querySelector('.navBar');


app.displayMobileMenu = () => {
    hamburgerMenu.addEventListener('click', function() {

        // navBar.classList.toggle('extend');
    })
}

app.init = () => {
    app.displayMobileMenu();
}

app.init();