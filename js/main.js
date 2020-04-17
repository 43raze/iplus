$(function () {
    $(".header__burger").click(function () {
        $(".header__burger, .header__top__nav").toggleClass("active");
        $("body").toggleClass("lock");
    });
});

//SLIDER-SLick
$(".slider_sl").slick({
    slidesToShow: 1, // отображение количества слайдеров
    slidesToScroll: 1,
    //autoplay: false,
    //autoplaySpeed: 2000, //время прокрутки 1000=1 сек
    //speed: 2000, // скорость слайда
    centerMode: true,
    centerPadding: '0px',
    dots: false,
    arrows: true,


    //fade: false, //смена слайдра способом затемнения
    //draggable: false, //отмена принудительного переключения слайда
    //infinite: false, // в конце нельзя принудительно прокрутить слайд
    //vertical: true, // вертикальный слайдер
});

//TABS
var tab; // заголовок вкладки
var tabContent; // блок содержащий контент вкладки


window.onload = function () {
    tabContent = document.getElementsByClassName('tabContent');
    tab = document.getElementsByClassName('tab');
    hideTabsContent(1);
}

document.getElementById('service__tabs').onclick = function (event) {
    var target = event.target;
    if (target.className == 'tab') {
        for (var i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                showTabsContent(i);
                break;
            }
        }
    }
}

function hideTabsContent(a) {
    for (var i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add("hide");
        tab[i].classList.remove('whiteborder');
    }
}

function showTabsContent(b) {
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}




/*$('.center').slick({
    centerPadding: '60px',
    slidesToShow: 6,
    slidesToScroll: 6,
    dots: true,
    responsive: [{
            breakpoint: 768,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 4
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});*/