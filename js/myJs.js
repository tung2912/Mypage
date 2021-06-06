const hamburger = document.querySelector('.header .header__nav-bar .header__nav-list .hamburger');
const mobile_menu = document.querySelector('.header .header__nav-bar .header__nav-list ul');
const menu_item = document.querySelectorAll('.header .header__nav-bar .header__nav-list ul li a');

console.log(hamburger)

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if(scroll_position > 250) {
        header.style.backgroundColor = "#0156A7";
    }
    else {
        header.style.backgroundColor = "transparent";
    }
});

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});