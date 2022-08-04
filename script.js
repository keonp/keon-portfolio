const app = {};

const navBar = document.querySelector('.navBar');
const hamburgerMenu = document.querySelector('.hamburgerMenu');
const navBarContainer = document.querySelector('.navBarContainer');
const mobileNav = document.querySelector('.mobileNav');

const portfolioContainer = document.querySelectorAll('.portfolioContainer');


app.displayMobileMenu = () => {
    hamburgerMenu.addEventListener('click', function() {
        navBar.classList.toggle('extendMenuDrop');
        navBarContainer.classList.toggle('extendMenuBorder');
        mobileNav.classList.toggle('extendMenuDisplay');
    })
}

// app.displayProjectDescription = () => {
//     portfolioContainer.forEach((project) => {

//         const projectDescription = project.children[0];
//         const imageElement = project.children[1];

//         imageElement.addEventListener('pointerover', function() {
//             imageElement.classList.toggle('hide');
//             projectDescription.classList.toggle('displayDescription');
//         })

//         projectDescription.addEventListener('pointerout', function() {
//             imageElement.classList.toggle('hide');
//             projectDescription.classList.toggle('displayDescription');
//         })
//     })
// }

app.init = () => {
    app.displayMobileMenu();
    // app.displayProjectDescription();
}

app.init();