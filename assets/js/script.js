window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (window.scrollY >= 800) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
});

$(document).ready(function () {
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if ($(this).hasClass('close-menu')) {
            $('.menu-content').addClass('transition-menu');
            $('body').addClass('body_fix');
        } else {
            $('.menu-content').addClass('menu-width');
            $('body').removeClass('body_fix');
            $('.menu-content').removeClass('transition-menu');
        }
    });
    $('.menu-scroll a').on('click', function () {
        $('.menu-content').addClass('menu-width');
        $('body').removeClass('body_fix');
        $('.menu-content').removeClass('transition-menu');
        $('.open-menu').removeClass('close-menu');
    })
});


$('.menu-scroll a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
        let $target = $(this.hash);
        $target = $target.length && $target
            || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
            let targetOffset = $target.offset().top-130;
            $('html,body')
                .animate({scrollTop: targetOffset}, 1000);
            return false;
        }
    }
});





let conditionsSwiper = new Swiper(".conditions-slider", {
    slidesPerView: 2,
    spaceBetween: 8,
    loop: true,
    breakpoints: {

        '1020': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        '670': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
    },
    pagination: {
        el: ".conditions-pagination",
        clickable: true,
    },

});





function setupSelect(selectId, optionsId) {
    const select = document.getElementById(selectId);
    const options = document.getElementById(optionsId);
    const textEl = select.querySelector('.select-text');
    const items = options.querySelectorAll('.custom-option');

    select.addEventListener('click', () => {
        const isActive = options.classList.contains('active');

        // Закрываем все другие селекты
        document.querySelectorAll('.custom-options').forEach(opt => opt.classList.remove('active'));
        document.querySelectorAll('.custom-select').forEach(sel => sel.classList.remove('open'));

        if (!isActive) {
            options.classList.add('active');
            select.classList.add('open');
        }
    });

    items.forEach(option => {
        option.addEventListener('click', () => {
            textEl.textContent = option.textContent;
            options.classList.remove('active');
            select.classList.remove('open');
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.form-group')) {
            options.classList.remove('active');
            select.classList.remove('open');
        }
    });
}

setupSelect('select-from', 'options-from');
setupSelect('select-to', 'options-to');




$('.price-see-more').on('click',function () {
    $('.price-see-more').addClass('price-see-none');
    $('.price-list').removeClass('price-none-mob');
})






document.addEventListener("DOMContentLoaded", function () {
    const targets = document.querySelectorAll(".animation"); // находим ВСЕ .animation

    const observer = new IntersectionObserver(
        function (entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active"); // добавляем .active каждому элементу
                    observer.unobserve(entry.target); // отключаем, если нужно один раз
                }
            });
        },
        {
            threshold: 0.5, // 50% блока должно быть видно
        }
    );

    targets.forEach(target => observer.observe(target)); // запускаем observer для каждого
});












ymaps.ready(function () {
    let myMap = new ymaps.Map('map', {
            center: [55.033558, 82.933042],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'г. Новосибирск, ул.Ядринцевская 68/1, оф 608',
            balloonContent: 'г. Новосибирск, ул.Ядринцевская 68/1, оф 608'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'assets/img/loc.svg',
            // Размеры метки.
            iconImageSize: [60, 60],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0]
        })

    myMap.geoObjects
        .add(myPlacemark)
});