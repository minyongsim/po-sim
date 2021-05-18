$(function ($) {
    var $menu = $('#header .menuBox li'),
        $pages = $('.pages > .page');

    $menu.on('click',function(e){
        e.preventDefault();
        var idx = $(this).index()
        var section =$pages.eq(idx)
        var sd = section.offset().top 
        $('html,body').stop().animate({scrollTop:sd},500);
     
    });

    $(window).scroll(function(){
        $pages.each(function(){
            if($(this).offset().top <= $(window).scrollTop()){
                var idx = $(this).index();
                $menu.removeClass('active')
                $menu.eq(idx).addClass('active')
            }
        });
    });
    
    

    $(window).scroll(function () {
        var sct = 0
        sct = $(this).scrollTop();
        var winHeight = sct - $(this).height()/2
        skils(80, '.photoshop');
        skils(70, '.illustrator');
        skils(75, '.html');
        skils(75, '.css');
        skils(60, '.js');
        skils(50, '.react');

        if (sct >= $(".skillcontainer").offset().top || winHeight >= $(".skillcontainer").offset().top) {
            $('.skillcontainer .myscore').addClass('on')
        } else {
            $('.skillcontainer .myscore').removeClass('on')
        }

        function skils(jumsu, classname) {
            var i = 0
            var skill = setInterval(function () {
                if (i < jumsu) {
                    i++
                    $(classname).find('.myscore').text(i + '%').addClass('on')
                } else {
                    clearInterval(skill)
                }
            }, 45)
        }


    });


    // 슬릭 슬라이더
    $(".home .visualRoll").slick({
        autoplay: true, // 자동재생
        autoplaySpeed: 4000, // 간격시간
        dots: true, // 동그라미버튼
        speed: 1000, // 바뀌는시간(생략가능)
        slidesToShow: 1, // 보여질슬라이드수(생략가능)
        slidesToScroll: 1, // 이동슬라이드수(생략가능)
        pauseOnHover: true, // 마우스오버시 멈춤여부(생략가능)
        pauseOnDotsHover: true, // 동그라미번호버튼에 호버시 멈춤여부(생략가능)
        pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
        cssEase: 'linear', // 속도함수(생략가능)
        draggable: true, // 마우스드래그시 슬라이드 교체가능여부(생략가능)
        fade: false, // 슬라이드가 수평으로 이동하지 않고, 제자리에서 사라지고 나타남(생략가능)
        arrows: true, // 좌우화살표 사용여부(생략가능)
        prevArrow: '<button class="prevArrow  marrow"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button class="nextArrow  marrow"><i class="fas fa-arrow-right"></i></i></button>',
    })

    // 슬릭 슬라이더 플레이 버튼
    $(".main_rolling .plpa").on("click", function () {
        if ($(this).find("i").hasClass("fa-pause")) {
            $(".visualRoll").slick("slickPause")
            $(this).find("i").removeClass("fa-pause").addClass("fa-play")
        } else {
            $(".visualRoll").slick("slickPlay")
            $(this).find("i").removeClass("fa-play").addClass("fa-pause")
        }
    })

    $('.all').show();
    $('.keyword > li > button').on('click', function () {
        $(this).addClass('act')
        $(this).parent().siblings().find('button').removeClass('act')
        var datac = $(this).attr('data-c')
        $('.all').css({
            transform: 'scale(0)'
        }).stop().hide()
        $('.' + datac).stop().show(200).css({
            transform: 'scale(1)'
        })
    })

    var href, src, alt, lieq;
    $('.listBox > li > a').on('click', function (e) {
        e.preventDefault(); //기본 이벤틀 막아줌
        lieq = $(this).parent().index()
        $('.gellaryPopup').addClass('on')
        href = $(this).attr('href')
        src = $(this).find('img').attr('src')
        alt = $(this).find('img').attr('alt')
        //console.log(alt)
        $('.popuplist > div > a').attr('href', href)
        $('.popuplist > div > a > img').attr({
            'src': src,
            'alt': alt
        })
        $('.popuplist > div > a > img').html('<p></p>')

    })

    $('.gellaryPopup .close, .gellaryPopup').on('click', function () {
        $('.gellaryPopup').removeClass('on')
    })
    $('.popuplist').on('click', function (e) {
        e.stopPropagation(); //부모한테 이벤트 전파를 막음
    })

    function changeList(ind) {
        href = $('.listBox > li').eq(ind).find('a').attr('href')
        src = $('.listBox > li').eq(ind).find('img').attr('src')
        alt = $('.listBox > li').eq(ind).find('img').attr('alt')
        $('.popuplist > div > a').attr('href', href)
        $('.popuplist > div > a > img').attr({
            'src': src,
            'alt': alt
        }).css({
            opacity: '0.5'
        }).stop().animate({
            opacity: '1'
        }, 500)
        $('.popuplist > div > a > img').html('<p></p>')
    }

    $('.popuplist .prev').on('click', function () {
        --lieq;
        if (lieq < 0) {
            lieq = 18;
        }
        changeList(lieq)
    })

    $('.popuplist .next').on('click', function () {
        ++lieq;
        if (lieq > 18) {
            lieq = 0;
        }
        changeList(lieq)
    })
    $('.skillcontainer>.skillTree').css({
        transition: 'transform 0.2s'
    })

    $('.skillcontainer>.skillTree').hover(function () {
        $(this).css({
            transform: 'scale(1.1)'
        })
    }, function () {
        $(this).css({
            transform: 'scale(1)'
        })
    }, 500)

},(jQuery))