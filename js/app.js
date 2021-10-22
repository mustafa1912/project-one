/* Start nav */
//create nav items
var nav = document.getElementById("nav");
for (var i = 1; i <= 4; i++) {
    //creat li tages
    var newLi = document.createElement("li");
    //append a to li
    newLi.innerHTML = " <a>Section </a> " + i;
    //append li to nav
    nav.appendChild(newLi);
}

//scroll
var Li = document.getElementsByTagName("Li");
var section = document.querySelectorAll('.section');

//when click li scroll to the section 
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

var sections = document.getElementsByTagName('section');
onscroll = () => {
    var scrollPosation = document.documentElement.scrollTop;
    
    //when scroll to the section .... the section get the class active and remove class disactive
    //the nav item of section whic you scroll into will get class active 
    for (var i = 0; i <= 3; i++) {
        if (scrollPosation > (sections[i].offsetTop - 70) &&
            scrollPosation < (sections[i].offsetTop + sections[i].clientHeight)) {
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
    //when scroll 100px the button eill apper
    var button = document.getElementById("button");
    if (scrollPosation >= 100) {
        button.classList.add("show");
    } else {
        button.classList.remove("show");
    }
}

/* End nav */

/* Start mobile menu */
var mobileMenu = document.getElementById("mobile_menu");
mobileMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
    nav.classList.toggle("mobile");
});
/* End mobile menu */



// button up or down 
button.addEventListener('click', () => {
    window.scroll(0, 0)
})
