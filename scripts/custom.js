$(function () {
    $(document).ready(function () {
        $.ajax({
            url: 'https://raw.githubusercontent.com/vitalikpetreniuk/purple_air_verstka/main/index.html',
            type: 'get',
            dataType: 'html',
            success: function (data) {
                const url_to_css = 'https://raw.githubusercontent.com/vitalikpetreniuk/purple_air_verstka/main/css/custom.css';
                const pa_body = $('body');
                const pa_header = $('header#purpleair_header');
                const header_menu = $(data).find('.header__inline-menu>ul');
                const pa_megamenu = $(data).find('.header-megamenu');
                let pa_navIcon = pa_header.find('#nav-icon');
                const footer = $(data).find('footer');
                const head = $('head')

                head.append(`<link rel="stylesheet" href="${url_to_css}">`)
                pa_header.find('.pa_header-navigation').append(header_menu);
                pa_body.append(footer);
                pa_header.append(pa_megamenu);

                $('.pa_header-icons_menu button').on('click', function(){
                    $(this).toggleClass('open');
                    pa_navIcon.toggleClass('open');
                    pa_megamenu.slideToggle();
                    pa_body.toggleClass('megamenu-opened');
                })
                pa_header.find('.pa_header-navigation .list-menu > li > span').on('click', function(){
                    $(this).parent().siblings().find('ul').hide();
                    $(this).parent().find('ul').toggle();
                })

                $(document).mouseup(function(e) {
                    var container = pa_header.find('.pa_header-navigation .list-menu > li');

                    if (!container.is(e.target) && container.has(e.target).length === 0)
                    {
                        pa_header.find('.pa_header-navigation .list-menu > li').find('ul').hide();
                    }
                });

                let lastScrollTop = 0;
                $(window).on('scroll', function(event){
                    let st = $(this).scrollTop();
                    if (st > lastScrollTop && st >= pa_header.outerHeight()){
                        pa_header.css('top', '-'+pa_header.outerHeight()+'px');
                    } else {
                        pa_header.css('top', '0');
                    }
                    lastScrollTop = st;
                });
            }
        })

    })
})(jQuery)
