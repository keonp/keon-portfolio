const app = {};

const navBar = document.querySelector('.navBar');
const hamburgerMenu = document.querySelector('.hamburgerMenu');
const navBarContainer = document.querySelector('.navBarContainer');
const mobileNav = document.querySelector('.mobileNav');

const portfolioContainer = document.querySelectorAll('.portfolioContainer');
const mobileNavLinks = document.querySelectorAll('.mobileNavLinks');

const submitButton = document.querySelector('.submitButton');
const inputElements = document.querySelectorAll('.inputField');

const subtext = document.querySelector('.subtext');
const subtextContainer = document.querySelector('.subtextContainer');
const menuBar = document.querySelectorAll('.menuBar');
// app.handleFormSubmission = () => {
//     submitButton.addEventListener('submit', () => {

//         inputElements.forEach((inputEl) => {
//             console.log(inputEl.value);
//             inputEl.value = "test@testmail.com";
//         })

//     })
// }

// console.log(inputElements);
// console.log(subtextContainer.offsetWidth)
// console.log(subtextContainer)


app.displayMobileMenu = () => {
    hamburgerMenu.addEventListener('click', function() {
        app.menuToggle();

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


app.closeMobileMenu = () => {
    mobileNavLinks.forEach((link) => {
        link.addEventListener('click', () => {
            app.menuToggle();
        })
    })
}

app.menuToggle = () => {
    navBar.classList.toggle('extendMenuDrop');
    navBarContainer.classList.toggle('extendMenuBorder');
    mobileNav.classList.toggle('extendMenuDisplay');
    menuBar[0].classList.toggle('bar1');
    menuBar[1].classList.toggle('bar2');
    menuBar[2].classList.toggle('bar3');
}

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
    // app.handleFormSubmission();
}

app.init();