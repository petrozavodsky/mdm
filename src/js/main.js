/*
    Custom scripts
 */
//= ../../bower_components/jquery/dist/jquery.min.js
//= ../../bower_components/Swiper/dist/js/swiper.jquery.min.js
//= ../../bower_components/jquery.maskedinput/dist/jquery.maskedinput.min.js

//|=== unkomment to use ===| //= ../../node_modules/nprogress/nprogress.js
//|=== unkomment to use ===| //= ../../bower_components/magnific-popup/dist/jquery.magnific-popup.min.js
//|=== unkomment to use ===| //= ../../bower_components/jquery.scrollTo/jquery.scrollTo.min.js
//|=== unkomment to use ===| //= ../../bower_components/Tabslet/jquery.tabslet.min.js
//|=== unkomment to use ===| //= ../../bower_components/ion.rangeslider/js/ion.rangeSlider.min.js
//|=== unkomment to use ===| //= ../../bower_components/fotorama/fotorama.js

$(document).ready(function () {

    // do something

    // init masked input
    $("#phone").mask("(999) 999-99-99");

    // init tips Swiper
    var swiper = new Swiper('.js-slider-info-tips', {
       paginationClickable: true,
       nextButton: '.info_tip-button-next',
       prevButton: '.info_tip-button-prev',
       slidesPerView: 3,
       spaceBetween: 10,
       breakpoints: {
           // when window width is <= 320px
           767: {
             slidesPerView: 1,
             spaceBetweenSlides: 0
           }

        }
    });


    // init doctors Swiper
    var swiper = new Swiper('.js-doctor-slider', {
       paginationClickable: true,
       nextButton: '.doctors_list-button-next',
       prevButton: '.doctors_list-button-prev',
       slidesPerView: 4,
       spaceBetween: 10,
       breakpoints: {
           // when window width is <= 320px
           480: {
             slidesPerView: 1,
             spaceBetweenSlides: 0
           },
           767: {
             slidesPerView: 2,
             spaceBetweenSlides: 0
           },
           980: {
             slidesPerView: 3,
             spaceBetweenSlides: 0
           },
           1200: {
             slidesPerView: 4,
             spaceBetweenSlides: 0
           },
           1400: {
             slidesPerView: 5,
             spaceBetweenSlides: 0
           }
        }
    });


    // init derections Swiper
    var swiper = new Swiper('.js-derections-slider', {
       paginationClickable: true,
       nextButton: '.derections_list-button-next',
       prevButton: '.derections_list-button-prev',
       slidesPerView: 4,
       spaceBetween: 10,
       breakpoints: {
           // when window width is <= 320px
           480: {
             slidesPerView: 1,
             spaceBetweenSlides: 0
           },
           767: {
             slidesPerView: 2,
             spaceBetweenSlides: 0
           },
           980: {
             slidesPerView: 3,
             spaceBetweenSlides: 0
           },
           1200: {
             slidesPerView: 4,
             spaceBetweenSlides: 0
           },
           1400: {
             slidesPerView: 5,
             spaceBetweenSlides: 0
           }
        }
    });


    // init Swiper
    var swiper = new Swiper('.js-big-slider', {
       pagination: ".swiper-pagination",
       paginationClickable: true,
       spaceBetween: 0
    });



    // менят поряок селекторов в фильтрах Отделений
    reArrangeDom();




    // open breadcrumbs second list
    $(".js-open-menu-lvl2").click(function() {
        if ($(this).hasClass("is-opened")) {
            $(".breadcrumbs_list__second_lvl").slideUp("fast");
            $(this).removeClass("is-opened");
        }
        else {
            $(".breadcrumbs_list__second_lvl").slideDown("fast");
            $(this).addClass("is-opened");
        }
    });

    

    // open deretions list
    $(".js-open-deretions-list").click(function() {
        if ($(this).hasClass("is-opened")) {
            $(".decretions_selector_list").slideUp("fast");
            $(this).removeClass("is-opened");
        }
        else {
            $(".decretions_selector_list").slideDown("fast");
            $(this).addClass("is-opened");
        }
    });

    // open mobile menu
    $(".js-open-mobile-menu").click(function() {
        if ($(".main_menu").hasClass("is-opened")) {
            $(".main_menu").slideUp().removeClass("is-opened");
        }
        else {
            $(".main_menu").slideDown().addClass("is-opened");
        }
    });


    setTimeout(function() { fixArrowsHeight() }, 500);

    setPaginationPos()


    // initialize map
    function initialize() {
        var mapLat = $("#map").data('lat'),
            mapLng = $("#map").data('lng'),
            mapIcon = $("#map").data('mapicon');

        var pos = new google.maps.LatLng(mapLat, mapLng),
            centr = new google.maps.LatLng(mapLat, mapLng),
            zoomNum;

        $(window).width()>768 ? zoomNum = 12 : zoomNum = 14;

        var mapOptions = {
            center: centr,
            zoom: zoomNum,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
            },
            // disableDefaultUI: true,
            scrollwheel: false,
            rotateControl: true,
            styles: // https://snazzymaps.com/
                    [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]
        };

        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        map.setTilt(45);

        var marker = new google.maps.Marker({
            position: pos,
            map: map,
            title: '',
            animation: google.maps.Animation.DROP,
            icon: {
                url: 'i/' + mapIcon,
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(48, 100)
            }
        });

    }
    google.maps.event.addDomListener(window, 'load', initialize);


});

function fixArrowsHeight() {
    var h = $(".info_tip img").height();
    $(".info_tip-button-next").height(h);
    $(".info_tip-button-prev").height(h);
}

function setPaginationPos() {
    var h = $(".big_slide_pic").height();
    if ($(window).width() < 980) {
        $(".swiper-pagination").css({"top": h-35, "bottom": "auto"});
    }
    else {
        $(".swiper-pagination").css({"bottom": 30, "top": "auto"});
    }
}



$(window).resize(function() {
    setPaginationPos();
    reArrangeDom();
    setTimeout(function() { fixArrowsHeight() }, 500);
})


function reArrangeDom() {
    if ( $(".decretions_selector_list") != 0) {
    var decList = $(".decretions_selector_list");
    if ($(window).width() > 767) {
      decList.appendTo($(".navigation .container"));
    }
    else {
      decList.before($(".derection_selector"))
    }
  }
}