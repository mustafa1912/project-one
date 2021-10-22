/* Start nav */
//create nav

let nav = document.getElementById("nav");
for (var i = 1; i <= 4; i++) {
    let newLi = document.createElement("li");
    newLi.innerHTML = " <a>Section </a> " + i;
    nav.appendChild(newLi);
}

//scroll
let Li = document.getElementsByTagName("Li");
let section = document.querySelectorAll('.section');


Li[0].addEventListener('click', () => {
    section[0].scrollIntoView();
});

Li[1].addEventListener('click', () => {
    section[1].scrollIntoView();
});

Li[2].addEventListener('click', () => {
    section[2].scrollIntoView();
});

Li[3].addEventListener('click', () => {
    section[3].scrollIntoView();
});

let sections = document.getElementsByTagName('section');
onscroll = () => {
    let scrollPosation = document.documentElement.scrollTop;

    for (var i = 0; i <= 3; i++) {
        if (scrollPosation > sections[i].offsetTop &&
            scrollPosation < (sections[i].offsetTop + sections[i].clientHeight)) {
            console.log(scrollPosation);
            section[i].classList.add('active');
            section[i].classList.remove('disactive');
            Li[i].classList.add('active_nav');
        } else {
            section[i].classList.add('disactive');
            section[i].classList.remove('active');
            Li[i].classList.remove('active_nav');
        }
    }

    // button show or hide 
    let button = document.getElementById("button");
    if (scrollPosation >= 100) {
        button.classList.add("show");
    } else {
        button.classList.remove("show");
    }
}

/* End nav */

/* Start mobile menu */
let mobileMenu = document.getElementById("mobile_menu");
mobileMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
    nav.classList.toggle("mobile");
});
/* End mobile menu */



// button up or down 
button.addEventListener('click', () => {
    window.scroll(0, 0)
})