const app = {};

const navBar = document.querySelector('.navBar');
const hamburgerMenu = document.querySelector('.hamburgerMenu');
const navBarContainer = document.querySelector('.navBarContainer');
const mobileNav = document.querySelector('.mobileNav');
const mobileNavLinks = document.querySelectorAll('.mobileNavLinks');
const menuBar = document.querySelectorAll('.menuBar');

// A method to display the mobile menu
app.displayMobileMenu = () => {
    hamburgerMenu.addEventListener('click', function() {
        app.menuToggle();

        document.querySelector('.logo a').addEventListener('click', () => {
            app.menuRemove();
        })

        // Window resize listen event
        window.addEventListener('resize', function() {

            // Store screen width
            const windowWidth = window.innerWidth;

            if (windowWidth > 645) {
                app.menuRemove();
            }
        })
    })
}

// A method to close  the mobile menu once a link on the mobile menu has been clicked
app.closeMobileMenu = () => {
    mobileNavLinks.forEach((link) => {
        link.addEventListener('click', () => {
            app.menuToggle();
        })
    })
}

// a method to toggle classes related to mobile menu display
app.menuToggle = () => {
    navBar.classList.toggle('extendMenuDrop');
    navBarContainer.classList.toggle('extendMenuBorder');
    mobileNav.classList.toggle('extendMenuDisplay');
    menuBar[0].classList.toggle('bar1');
    menuBar[1].classList.toggle('bar2');
    menuBar[2].classList.toggle('bar3');
}

// a method to remove classes related to mobile menu display
app.menuRemove = () => {
    navBar.classList.remove('extendMenuDrop');
    navBarContainer.classList.remove('extendMenuBorder');
    mobileNav.classList.remove('extendMenuDisplay');
    menuBar[0].classList.remove('bar1');
    menuBar[1].classList.remove('bar2');
    menuBar[2].classList.remove('bar3');
}

app.init = () => {
    app.displayMobileMenu();
    app.closeMobileMenu();
}

app.init();