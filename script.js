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

app.subtextList = [
    'front-end developer',
    'amateur jiu-jitsu practioner',
    'problem solver',
    'technology enthusiast'
];

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
}

app.menuRemove = () => {
    navBar.classList.remove('extendMenuDrop');
    navBarContainer.classList.remove('extendMenuBorder');
    mobileNav.classList.remove('extendMenuDisplay');
}

app.init = () => {
    app.displayMobileMenu();
    app.closeMobileMenu();
    // app.handleFormSubmission();
}

app.init();