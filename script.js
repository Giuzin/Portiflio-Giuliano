$(document).ready(function() {
    // Rolagem suave para as seções
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - $('header').outerHeight()
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

    // Expandir imagem ao clicar
    $('.expandable-image').on('click', function() {
        $(this).toggleClass('expanded');
    });

    // Scroll suave para seções ao clicar nos botões
    $('button[data-target]').on('click', function() {
        var targetSection = $($(this).data('target'));
        if (targetSection.length) {
            $('html, body').animate({
                scrollTop: targetSection.offset().top
            }, 1000);
        }
    });

    // Adicionar classe 'active' aos itens do menu quando a seção correspondente estiver visível
    $(window).on('scroll', function() {
        var scrollPosition = $(window).scrollTop();

        $('section').each(function() {
            var topOffset = $(this).offset().top - 100;
            var bottomOffset = topOffset + $(this).outerHeight();

            if (scrollPosition >= topOffset && scrollPosition < bottomOffset) {
                var id = $(this).attr('id');
                $('nav a').removeClass('active');
                $('nav a[href="#' + id + '"]').addClass('active');
            }
        });
    });

    // Tornar o menu responsivo
    $('.menu-toggle').on('click', function() {
        $('nav ul').toggleClass('show');
    });
});
