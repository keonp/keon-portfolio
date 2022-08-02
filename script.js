const app = {};

const navBar = document.querySelector('.navBar');
const hamburgerMenu = document.querySelector('.hamburgerMenu');
const navBarContainer = document.querySelector('.navBarContainer');
const mobileNav = document.querySelector('.mobileNav');
const projectImg = document.querySelectorAll('.projectImg');
console.log(projectImg);


app.displayMobileMenu = () => {
    hamburgerMenu.addEventListener('click', function() {
        navBar.classList.toggle('extendMenuDrop');
        navBarContainer.classList.toggle('extendMenuBorder');
        mobileNav.classList.toggle('extendMenuDisplay');
    })
}

app.displayProjectDescription = () => {
    projectImg.forEach(img => {

        const image = img;
        img.addEventListener('pointerover', function() {

            const projectDescription = image.parentElement.children[0];
            // console.log(this);
            image.classList.toggle('hide');
            projectDescription.classList.toggle('displayDescription');

            // projectDescription.addEventListener('pointerout', function() {

            //     image.classList.toggle('hide');
            //     projectDescription.classList.toggle('displayDescription');
            // })
        })
    })
}

app.init = () => {
    app.displayMobileMenu();
    app.displayProjectDescription();
}

app.init();