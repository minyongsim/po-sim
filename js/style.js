$(function ($) {
    $(window).load(function () {
        $('.introAni').delay(500).fadeOut(800)
    })

    window.onload = function() {
        setTimeout (function () {
         scrollTo(0,0);
        }, 100); 
       }
    // 메뉴 스크롤 이벤트
    var $menu = $('#header .headerBox .menuBox li'),
        $pages = $('.pages > .page');

    $menu.on('click',function(e){
        e.preventDefault();
        var idx = $(this).index()
        var section =$pages.eq(idx)
        var sd = section.offset().top 
        $('html,body').stop().animate({scrollTop:sd},500);
     
    });

    // 스크롤 이벤트
    var sct =0
    var scollSize = $(document).height() - $('#header').height() - $(window).height();
    $(window).scroll(function(){
        // 스크롤 시 메뉴에 active
        $pages.each(function(){
            if($(this).offset().top <= $(window).scrollTop()){
                var idx = $(this).index();
                $menu.removeClass('active')
                $menu.eq(idx).addClass('active')
            }
        });

        //스크롤 슬라이드 바
        var sct = $(this).scrollTop();
        var wid = (sct / scollSize) * 100 + '%';
        $('.slideBar').css({
                opacity: 1,
                width: wid
        });

        //스크롤 탑 버튼
        if(sct>=100){
            $(".gotop").addClass("on").stop().animate({
                opacity: 1
            },500)
        }else{
            $(".gotop").removeClass("on").stop().animate({
                opacity:0
            },500)
        }
        
        // 스킬스 그래프 이벤트
        var sct = $(this).scrollTop();
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
    
        // 스크롤 애니메이션

        var scrollEvent = $(this).scrollTop()
        var page1Event = $('.page-1').offset().top - $(this).height()/2
        if (scrollEvent >= page1Event && scrollEvent <= $('.page-1').offset().top  ) {
            $('.home .logo').show()
        } else {
            $('.home .logo').hide()
        };
        var page2Event = $('.page-2').offset().top - $(this).height()/2
        if (scrollEvent >= page2Event && scrollEvent <= $('.page-2').offset().top  ) {
            $('#page-2 .PortfolioBox').addClass('on')
        } else {
            $('#page-2 .PortfolioBox').removeClass('on')
        };
        var page3Event = $('.page-3').offset().top - $(this).height() / 2
        if (scrollEvent >= page3Event  && scrollEvent <=  $('.page-3').offset().top ) {
            $('.skillcontainer02').addClass('on')
        } else {  
            $('.skillcontainer02').removeClass('on')
        };
        var page4Event = $('.page-4').offset().top - $(this).height() / 2
        if (scrollEvent >= page4Event && scrollEvent <= $('.page-4').offset().top) {
            $('.aboutKeyword,.myInfo').addClass('on')
        } else {
            $('.aboutKeyword,.myInfo').removeClass('on')
        };
        var page5Event = $('.page-5').offset().top - $(this).height() / 2
        if (scrollEvent >= page5Event && scrollEvent <= $('.page-5').offset().top ) {
            $('.contactInner').addClass('on')
        } else {
            $('.contactInner').removeClass('on')
        };

    });

    $(".gotop").on("click",function(){
        $("html,body").stop().animate({
            scrollTop:"0"
        },800,"linear")
    })

    $('.pages > .page').on("mousewheel",function(e, wh){    
       
		//마우스 휠을 올렸을때	
          if (wh > 0) {  
			//변수 prev에 현재 휠을 움직인 section에서 이전 section의 offset().top위치 저장
             var prev = $(this).prev().offset().top;
			 $("html,body").stop().animate({
                 scrollTop:prev
                },500,"linear");
		//마우스 휠을 내렸을때	 
          }else if (wh < 0) {  
			//변수 next에 현재 휠을 움직인 section에서 다음 section의 offset().top위치 저장
             var next = $(this).next().offset().top;
			 $("html,body").stop().animate({
                 scrollTop:next
                },500,"linear");                                         
          }
        
     });


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