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




let principlesSwiper = new Swiper(".principles-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".principles-pagination",
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

$(document).ready(function () {
    $('select').styler();
});

$('.open_modal').on('click', function (e) {
    e.preventDefault();
    let attr = $(this).attr('data-val');
    let modal = $('#' + attr);

    // Получаем значения из главных селектов
    let fromVal = $('#mainFrom').val();
    let toVal = $('#mainTo').val();

    // Подставляем в модалку и обновляем плагин
    modal.find('#modalFrom').val(fromVal).trigger('refresh');
    modal.find('#modalTo').val(toVal).trigger('refresh');

    // Показываем модалку
    modal.removeClass('out');
    $('body').css({overflow: 'hidden'});
    modal.fadeIn();

    // Таймер (если есть)
    const timerEl = modal.find('.modal-timer')[0];
    if (timerEl) {
        startCountdownTimer(timerEl);
    }
});
$('.close').on('click', function () {
    let prt = $(this).parents('.modal');
    prt.addClass('out')
    setTimeout(function () {
        prt.fadeOut();
    }, 100);
    $('body').css({overflow: 'visible '})

})
$('.close-mod').on('click', function () {
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








document.addEventListener('DOMContentLoaded', () => {
    const shippingRadios = document.querySelectorAll('input[name="shipping"]');
    const deliveryRadios = document.querySelectorAll('input[name="delivery"]');
    const targetBlock = document.querySelector('.modal-shipping-sel');

    function checkConditions() {
        const shippingSelected = document.querySelector('input[name="shipping"]:checked');
        const deliverySelected = document.querySelector('input[name="delivery"]:checked');

        const shippingValue = shippingSelected?.closest('label')?.textContent.trim();
        const deliveryValue = deliverySelected?.closest('label')?.textContent.trim();

        if (shippingValue === 'Ж/Д' && deliveryValue === 'Да') {
            targetBlock.classList.add('active'); // добавляем нужный класс
        } else {
            targetBlock.classList.remove('active'); // удаляем, если условия не совпали
        }
    }

    shippingRadios.forEach(radio => {
        radio.addEventListener('change', checkConditions);
    });

    deliveryRadios.forEach(radio => {
        radio.addEventListener('change', checkConditions);
    });
});


function startCountdownTimer(timerEl) {
    let duration = parseInt(timerEl.getAttribute('data-time')) * 60;
    let timer = duration;

    // Если уже был интервал — сбросить
    if (timerEl._interval) clearInterval(timerEl._interval);

    timerEl._interval = setInterval(() => {
        let minutes = Math.floor(timer / 60);
        let seconds = timer % 60;

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        timerEl.textContent = `${minutes}:${seconds}`;

        if (--timer < 0) {
            clearInterval(timerEl._interval);
            timerEl.textContent = 'Время вышло';
            // Здесь можешь отключить кнопку, скрыть форму и т.д.
        }
    }, 1000);
}



document.getElementById('fileInput').addEventListener('change', function () {
    const fileLabel = this.closest('.file-label');
    const fileNameSpan = document.getElementById('fileName');
    const fileName = this.files[0]?.name || 'Файл не выбран';

    fileNameSpan.textContent = fileName;

    if (this.files.length > 0) {
        fileLabel.classList.add('selected');
    } else {
        fileLabel.classList.remove('selected');
    }
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






$('.form-input').on('click', function () {
    $(this).addClass('form-input-active');
})



document.addEventListener("DOMContentLoaded", function () {
    const steps = document.querySelectorAll(".quiz-one, .quiz-two, .quiz-three, .quiz-four");
    const nextBtn = document.querySelector(".btn-next");
    const prevBtn = document.querySelector(".btn-prev");

    let currentStep = 0;

    function showStep(index) {
        steps.forEach((step, i) => {
            step.style.display = i === index ? "block" : "none";
        });

        // Управляем видимостью кнопки "назад"
        if (prevBtn) {
            prevBtn.style.display = index === 0 ? "none" : "inline-block";
        }

        // Можно также скрыть "Далее" на последнем шаге
        if (nextBtn) {
            nextBtn.textContent = index === steps.length - 1 ? "Отправить" : "Далее";
        }
    }

    // Показать первый шаг при загрузке
    showStep(currentStep);

    // Обработчик на кнопку "Далее"
    nextBtn.addEventListener("click", function (e) {
        e.preventDefault();
        if (currentStep < steps.length - 1) {
            currentStep++;
            showStep(currentStep);
        } else {
            // Последний шаг — отправка формы
            document.querySelector("form").submit();
        }
    });

    // Обработчик на кнопку "Назад"
    prevBtn.addEventListener("click", function (e) {
        e.preventDefault();
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
        }
    });
});





