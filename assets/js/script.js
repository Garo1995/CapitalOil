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
            let targetOffset = $target.offset().top-30;
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





$(function () {
    let Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        let links = this.el.find('.link');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    };

    Accordion.prototype.dropdown = function (e) {
        let $el = e.data.el;
        $this = $(this),
            $next = $this.next();
        $next.slideToggle();
        if (!e.data.multiple) {

            $el.find('.submenu').not($next).slideUp();
        }
        if (!$this.hasClass('open')) {
            $('.link').each(function () {
                $(this).removeClass('open')
            })
            $this.addClass('open')
        } else {
            $this.removeClass('open')
        }
    }
    let accordion = new Accordion($('#accordion'), false);
});




$('.open_modal').on('click', function () {
    let attr = $(this).attr('data-val');

    let modal = $('#' + attr);

    // 👇 ВСТАВЛЯЕМ ВОТ ЭТО:
    const fromValue = document.querySelector('#select-from .select-text').textContent;
    const toValue = document.querySelector('#select-to .select-text').textContent;
    document.querySelector('#select-froms .select-text').textContent = fromValue;
    document.querySelector('#select-tos .select-text').textContent = toValue;


    modal.removeClass('out');
    $('body').css({overflow: 'hidden'});
    modal.fadeIn();
});

$('.close').on('click', function () {
    let prt = $(this).parents('.modal');
    prt.addClass('out')
    setTimeout(function () {
        prt.fadeOut();
    }, 100);
    $('body').css({overflow: 'visible '})

})

$(window).on('click', function (event) {
    $('.modal').each(function () {
        let gtattr = $(this).attr('id');
        let new_mod = $('#' + gtattr);
        let md_cnt = $(new_mod).find('.modal-content');

        if (event.target === $(md_cnt)[0]) {
            setTimeout(function () {
                $(new_mod).addClass('out')
                $(new_mod).fadeOut()
            }, 100)
            $('body').css({overflow: 'visible '})
        }
        if (event.target === this) {
            setTimeout(function () {
                $(new_mod).addClass('out')
                $(new_mod).fadeOut()
            }, 100)
            $('body').css({overflow: 'visible '})
        }
    })
});






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







$('.filter-for-mobile').on('click', function () {
    $(this).toggleClass('filter-mobile-open');
    $('.filter-group').toggleClass('filter-group-active');
})








document.querySelectorAll(".custom-selects").forEach((select) => {
    const input = select.querySelector(".select-input");
    const dropdown = select.querySelector(".select-dropdown");
    const options = select.querySelectorAll(".select-option");
    const clearBtn = select.querySelector(".select-clear");
    input.addEventListener("focus", () => {
        dropdown.style.display = "block";
        select.classList.add("active");
    });
    input.addEventListener("input", () => {
        const filter = input.value.toLowerCase();
        let matched = false;
        options.forEach((option) => {
            const text = option.textContent.toLowerCase();
            if (text.includes(filter)) {
                option.style.display = "block";
                matched = true;
            } else {
                option.style.display = "none";
            }
        });
        dropdown.style.display = matched ? "block" : "none";
    });
    options.forEach((option) => {
        option.addEventListener("click", () => {
            input.value = option.textContent;
            dropdown.style.display = "none";
            select.classList.add("filled");
            select.classList.remove("active");
        });
    });
    clearBtn.addEventListener("click", () => {
        input.value = "";
        select.classList.remove("filled");
        options.forEach((o) => (o.style.display = "block"));
        input.focus();
    });
    document.addEventListener("click", (e) => {
        if (!select.contains(e.target)) {
            dropdown.style.display = "none";
            select.classList.remove("active");
        }
    });
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
setupSelect('select-froms', 'options-froms');
setupSelect('select-tos', 'options-tos');