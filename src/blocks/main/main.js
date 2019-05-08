owl = $(".owl-carousel").owlCarousel({
    items: 1,
    autoplay: false,
    autoplayTimeout: 4000,
    dots: false,
    loop: true,
    animateOut: 'fadeOut'
});
owl.on('changed.owl.carousel', function (event) {
    if (event.item.index == 3) {
        $('.new-game-label').fadeIn();
    } else {
        $('.new-game-label').fadeOut();
    }
});
$(window).on('focus', function () {
    owl.trigger('stop.owl.autoplay');
    owl.trigger('play.owl.autoplay', [4000]);
});

$(document).ready(function () {
    $('.login').click(function () {
        $('#login').addClass('md-show')
    });
    $('.register, .start-now').click(function () {
        $('#sign_up').addClass('md-show')
    });

    $('i.close').click(function () {
        $(this).parents('.popup').removeClass('md-show')
    });

    $( '.swipebox' ).swipebox(); 

    if (window.location.hash) {
        jumpToSection(window.location.hash);
    }
});

 



$(document, window).bind('scroll', function () {
    if (($(document).scrollTop() || $(window).scrollTop()) > 100) {
        $('section.header').addClass('floating')
    } else {
        $('section.header').hasClass('floating') ? $('section.header').removeClass('floating') : null;
    }
});

function check_cookie_policy() {
    if (!localStorage.getItem('qan-cookie-policy-learned')) {
        $('#qan-cookie-policy-gdpr').show();
    }
}
check_cookie_policy();

function cookie_policy_learned() {
    localStorage.setItem('qan-cookie-policy-learned', "1");
    $('#qan-cookie-policy-gdpr').hide();
}