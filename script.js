const app = {};

const navBar = document.querySelector('.navBar');
const hamburgerMenu = document.querySelector('.hamburgerMenu');
const navBarContainer = document.querySelector('.navBarContainer');
const mobileNav = document.querySelector('.mobileNav');
const mobileNavLinks = document.querySelectorAll('.mobileNavLinks');
const menuBar = document.querySelectorAll('.menuBar');
const skills = document.querySelectorAll('.devIconContainer');
const test = document.querySelector('.test');

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

// a method to fade in elements onto the page
// Special thanks to pmCodingTutorials on the breakdown on this function:
// https://www.youtube.com/watch?v=9W7rKLahq2Q
app.fadeIn = () => {
    window.addEventListener('DOMContentLoaded', fade);

    function fade() {
        const observerOptions = {
            rootMargin: '0px 0px -250px 0px'
        }

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('show');
                    observer.unobserve(entry.target);
                } else {
                    return;
                }
            })
        }, observerOptions)
    
        const fadedElements = document.querySelectorAll('.fade');
        fadedElements.forEach((element) => {
            observer.observe(element);
        })
    }
}

// function to display skills in a circular design
app.displaySkills = () => {
    const diameter = 600;
    const angle = 36;

    skills.forEach((element, index) => {
        const rotation = index * angle + 252;
        element.style.transform = `rotate(${rotation}deg) translate(${diameter / 2}px) rotate(-${rotation}deg)`;
    })
}

// app.clickTest = () => {
//     test.addEventListener('click', () => {
//         app.displaySkills();
//     })
// }

app.init = () => {
    app.displayMobileMenu();
    app.closeMobileMenu();
    app.fadeIn();
    // app.displaySkills();
    // app.clickTest();
}

app.init();