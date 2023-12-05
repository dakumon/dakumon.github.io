// ЛОАДЕР //
$(window).on('load', function () {
    $preloader = $('.loader_container'),
    $loader = $preloader.find('.loader');

    $loader.fadeOut();
    $preloader.delay(200).fadeOut('slow');
  });


// БУРГЕР-МЕНЮ //
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})


// КНОПКА НАВЕРХ //
let btnUp = document.querySelector('.up_btn');

function show() {
    btnUp.classList.remove('up_btn_hide');
}

function hide() {
    btnUp.classList.add('up_btn_hide');
}


window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    scrollPosition > 400 ? show() : hide();
});

$('.up_btn').on('click', function(e) {
        
    e.preventDefault();
    $('body,html').animate({
        scrollTop: 0
    }, 400);
});


// ЯКОРЬ В КОНТАКТЫ //
function goToSection() {
    let section = document.getElementById('contacts');
  
    if (section) {
      section.scrollIntoView({ behavior: 'smooth'});
    } else {
      window.location.href = 'your-page.html#' + section;
    }
}
