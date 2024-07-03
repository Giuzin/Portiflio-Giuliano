$(document).ready(function() {
    // Smooth scroll para links internos
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    // Animar elementos quando aparecem na tela
    $(window).scroll(function() {
        $('.fade-in').each(function() {
            var top_of_element = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > top_of_element) {
                $(this).addClass('visible');
            }
        });
    });

    // Ativar tooltips do Bootstrap
    $('[data-toggle="tooltip"]').tooltip();

    // Expandir/collapseir seções com clique nos títulos
    $('[data-toggle="collapse"]').on('click', function() {
        $($(this).attr('href')).collapse('toggle');
    });
});