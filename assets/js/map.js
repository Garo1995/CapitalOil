
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