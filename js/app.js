/* Start nav */
let nav = document.getElementById("nav");

for (var i = 1; i <= 4; i++) {
    let newLi = document.createElement("li");
    newLi.innerHTML = " <a>Section </a> " + i;
    nav.appendChild(newLi);
}

let Li = document.getElementsByTagName("Li");

let section_1 = document.getElementById("section_1");
let section_2 = document.getElementById("section_2");
let section_3 = document.getElementById("section_3");
let section_4 = document.getElementById("section_4");

Li[0].addEventListener('click', funSection_1);

function funSection_1() {
    section_1.scrollIntoView();
    Li[0].classList.add('active_nav');
    Li[2].classList.remove('active_nav');
    Li[1].classList.remove('active_nav');
    Li[3].classList.remove('active_nav');


    section_1.classList.add('active');
    section_2.classList.remove('active');
    section_3.classList.remove('active');
    section_4.classList.remove('active');
}

Li[1].addEventListener('click', funSection_2);

function funSection_2() {
    section_2.scrollIntoView();
    Li[1].classList.add('active_nav');
    Li[2].classList.remove('active_nav');
    Li[3].classList.remove('active_nav');
    Li[0].classList.remove('active_nav');

    section_2.classList.add('active');
    section_1.classList.remove('active');
    section_3.classList.remove('active');
    section_4.classList.remove('active');
}

Li[2].addEventListener('click', funSection_3);

function funSection_3() {
    section_3.scrollIntoView();
    Li[2].classList.add('active_nav');
    Li[3].classList.remove('active_nav');
    Li[1].classList.remove('active_nav');
    Li[0].classList.remove('active_nav');

    section_3.classList.add('active');
    section_1.classList.remove('active');
    section_2.classList.remove('active');
    section_4.classList.remove('active');
}

Li[3].addEventListener('click', funSection_4);

function funSection_4() {
    section_4.scrollIntoView();

    Li[3].classList.add('active_nav');
    Li[2].classList.remove('active_nav');
    Li[1].classList.remove('active_nav');
    Li[0].classList.remove('active_nav');

    section_4.classList.add('active');
    section_1.classList.remove('active');
    section_2.classList.remove('active');
    section_3.classList.remove('active');

}

/* End nav */


/* Start mobile menu */
let mobileMenu = document.getElementById("mobile_menu");

mobileMenu.addEventListener("click", menu);

function menu() {
    mobileMenu.classList.toggle("open");
    nav.classList.toggle("mobile");
}

/* End mobile menu */





/* Start scroll*/
let button = document.getElementById("button");
window.onscroll = function() {
    if (this.scrollY >= 100) {
        button.classList.add("show");
    } else {
        button.classList.remove("show");
    }
}

button.addEventListener('click', click);

function click() {
    window.scroll(0, 0)
}

/*End scroll*/