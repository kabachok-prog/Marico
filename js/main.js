// const elements = document.getElementsByClassName('header__top-item');

// for(i=0;i<elements.length;i++) {
//     elements[i].addEventListener('mousedown', showMenu);
//     elements[i].addEventListener('mouseleave', hideMenu);
// }

// function showMenu() {
//     if(this.children.length>1) {
//         this.children[1].style.height = 'auto';
//         this.children[1].style.opacity = '1';
//         this.children[1].style.overflow = 'visible';
//     }
// }

// function hideMenu() {
//     if(this.children.length>1) {
//         this.children[1].style.height = '0';
//         this.children[1].style.opacity = '0';
//         this.children[1].style.overflow = 'hidden';
//     }
// }

$(function () {

    $('.header__top-link--slide').on('click', function () {
        $(this).next().slideToggle()
    })

    setInterval(() => {
        if ($(window).scrollTop() >= 0 && $('.header__top').hasClass('header__top--open') === false) {
            $('.burger').addClass('burger--follow')
        } else {
            $('.burger').removeClass('burger--follow')
        }
    }, 0)

    $('.burger, .overlay').on('click', function (e) {
        e.preventDefault()
        $('.header__top').toggleClass('header__top--open')
        $('.overlay').toggleClass('overlay--show')
    })
})