(function ($) {
    $('.page-indicator > ul > li > a').click(function (e) {
        var href = $(this).attr('href');

        var targetTop = $(href).offset().top;


        // // 한번에 가도록 하는 방법
        // $(window).scrollTop(targetTop),500;


        $('html').stop().animate({
            scrollTop: targetTop
        }, 1000);

        e.preventDefault();
    });

    function Page__updateIndicatorActive() {
        var scrollTop = $(window).scrollTop();

        // 역순으로 검색해야 편하다
        $($('.page').get().reverse()).each(function (index, node) {
            var $node = $(this);
            var offsetTop = parseInt($node.attr('data-offset-top'));

            if (scrollTop >= offsetTop) {
                // 기존 녀석에게 활성화 풀고
                $('.page-indicator > ul > li.active').removeClass('active');
                // 해당하는 녀석에게 활성화 넣고

                var currentPageIndex = $node.index();
                $('.page-indicator > ul > li').eq(currentPageIndex).addClass('active');

                $('html').attr('data-current-page-index', currentPageIndex);

                return false; // 더 이상 다른 페이지를 검사하지 않는다.
            }
        });
    }

    // 각 페이지의 offsetTop 속성을 업데이트
    function Page__updateOffsetTop() {

        $('.page').each(function (index, node) {
            var $page = $(node);
            var offsetTop = $page.offset().top;

            $page.attr('data-offset-top', offsetTop);
        });

        // 계산이 바뀌었으니까, 다시 상태 업데이트
        Page__updateIndicatorActive();
    }

    function Page__init() {
        Page__updateOffsetTop();
    }

    // 초기화
    Page__init();

    // 화면이 리사이즈 할 때 마다, offsetTop을 다시계산
    $(window).resize(Page__updateOffsetTop);

    // 스크롤이 될 때 마다, 인디케이터의 상태를 갱신
    $(window).scroll(Page__updateIndicatorActive);


var sct = 0;
var winHeight;
$(window).scroll(function () {
    sct = $(this).scrollTop();
    winHeight = $(this).height()

    // 스크롤탑값이 100이상이 되면 맨위로 버튼이 보이고 100미만이면 숨기기
    // if (sct >= 100) {
    //     $(".gotop").addClass("on").stop().animate({
    //         opacity: 1
    //     }, 500)
    // } else {
    //     $(".gotop").removeClass("on").stop().animate({
    //         opacity: 0
    //     }, 500)
    // }

    // sct 값이 
 
});


// $(window).scroll(function () {
//     var sct = $(this).scrollTop()
//     var skHight = $('.').offset().top - $(this).height() / 2
    
// })

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
 //스킬스 
   $('.skills>.open').on('click',function(){
        $(".skills>.close").show()
        $(".skillcontainer").show().animate({
            height:'600px'
            },500);
        
        $(".skillcontainer>.myscore").addClass("on")
            skils(80, '.html');
            skils(80, '.css');
            skils(80, '.js');
            skils(80, '.jq');
            skils(80, '.react');
            skils(80, '.photoshop');
            skils(80, '.illustrator');
            function skils (jumsu, classname){
                var i=0
                var skill = setInterval( function(){
                    if (i < jumsu ) {
                        i++
                        $(classname).find('.myscore').text(i+'%').addClass('on')
                    }else {
                        clearInterval(skill)
                    }
                },40)
            };
            $(".myscore").removeClass("on")
            $(".skills>.open").hide()

    },);

    $('.skills>.close').on('click',function(){
        $(".skillcontainer").animate({
            height:'0px'
           },500,function(){
            $(".skillcontainer").hide()
           })
        $(".skills>.close").hide()
         $(".skills>.open").show()

    });






})(jQuery)