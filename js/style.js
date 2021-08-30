$(function ($) {

    var aniBox = 0
    var introAni = setInterval(timer, 10)
    function timer() {
        aniBox++
        $('.introAni .introAniInner .aniBox').css({
            width: aniBox+'%'
        })
        // 100%까지 가면 사라지기
        if (aniBox === 101) {
            clearInterval(introAni)
            $('.introAni').fadeOut(100)
            return false
        }
        // 퍼센트 숫자세기
        $('.introAni .percent').text(aniBox+'%')
    }


    window.onload = function() {
        setTimeout (function () {
         scrollTo(0,0);
        }, 100); 
       }

    // 메뉴 스크롤 이벤트
    var $menu = $('#header .headerBox .menuBox li , .home .home_menu > li'),
        $pages = $('.pages > .page');
        

    $menu.on('click',function(e){
        e.preventDefault();
        var idx = $(this).index()
        var section =$pages.eq(idx)
        var sd = section.offset().top 
        $('html,body').stop().animate({scrollTop:sd},500);
    });

    // 스크롤 이벤트
  
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

        var header_sct =$(this).scrollTop();
        var h_winHeight = $(this).height()/2
		// if(header_sct >= h_winHeight){
        //     $("#header").css({
        //         // background:'rgba(0,0,0,0.5)',
        //     });
        //     $(".headerBox>.logo").css({
        //         color:'#000'
        //     });
        //     $(".menuBox>li").css({
        //         color:'#000'
        //     });
          
		// } else {
        //     $("#header").css({
        //         // background:'rgba(0,0,0,1)'
        //     });
        //     $(".headerBox>.logo").css({
        //         color:'#fff'
        //     });
        //     $(".menuBox>li").css({
        //         color:'#fff'
        //     });
        
        // }

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
             $('.home_glitch,.home_graphic,.scrollDown').show()
        } else {
            $('.home_glitch,.home_graphic,.scrollDown').hide()
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
        var d1= 0 ,d2= 0, e1= 0 ,e2= 0,e3= 0 ,c1= 0 ,c2= 0,c3= 0,c4= 0 ,c5= 0;
        timeCounter();
        var page4Event = $('.page-4').offset().top - $(this).height() / 2
        if (scrollEvent >= page4Event && scrollEvent <= $('.page-4').offset().top) {
            $('.aboutBox .information').addClass('on')
            $('.information02').addClass('on')
           
        } else {
            $('.aboutBox .information').removeClass('on')
            $('.information02').removeClass('on')
        };
        var d1 = 0 ;
        var d2 = 0 ;
        var e0102 = 0 ;
        var c0102 = 0 ; 
        var c03 = 0 ;
        var c04 = 0 ; 
        var c05 = 0 ; 
        timeCounter();
        function timeCounter() {

          id0 = setInterval(count0Fn,50);
          function count0Fn() {
            d1++;
            if (d1 > 80) {
              clearInterval(id0);
            
            } else {
              $(".d1").text(d1+'%').addclass('on')
            }
          }

          id1 = setInterval(count1Fn,50);
          function count1Fn() {
            d2++;
            if (d2 > 70) {
              clearInterval(id1);
            } else {
                $(".d2").text(d2+'%').addclass('on')
            }
          }

          id3 = setInterval(count2Fn,50);
          function count2Fn() {
            e0102++;
            if (e0102 > 70) {
              clearInterval(id3);
            } else {
                $(".e1,.e2").text(e0102+'%').addclass('on')
            }
          }

          co1 = setInterval(count4Fn,50);
          function count4Fn() {
            c0102++;
            if (c0102 > 75) {
              clearInterval(co1);
            } else {
                $(".c1,.c2").text(c0102+'%').addclass('on')
            }
          }

          co2 = setInterval(count5Fn,50);
          function count5Fn() {
            c03++;
            if (c03 > 60) {
              clearInterval(co2);
            } else {
                $(".c3").text(c03+'%').addclass('on')
            }
          }
          co3 = setInterval(count6Fn,100);
          function count6Fn() {
            c04++;
            if (c04 > 65) {
              clearInterval(co2);
            } else {
                $(".c4").text(c04+'%').addclass('on')
            }
          }
          co4 = setInterval(count7Fn,70);
          function count7Fn() {
            c05++;
            if (c05 > 50) {
              clearInterval(co4);
            } else {
                $(".c5").text(c05+'%').addclass('on')
            }
          }
        
        };
        
        var page5Event = $('.page-5').offset().top - $(this).height() / 2
        if (scrollEvent >= page5Event && scrollEvent <= $('.page-5').offset().top ) {
            $('.contactBox').addClass('on')
        } else {
            $('.contactBox').removeClass('on')
        };

    });

    $(".gotop").on("click",function(){
        $("html,body").stop().animate({
            scrollTop:"0"
        },800,"linear")
    })

    $('.pages > .page').on("mousewheel",function(e, wh){    
       e.preventDefault()
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
    }

    $('.popuplist .prev').on('click', function () {
        --lieq;
        if (lieq < 0) {
            lieq = 13;
        }
        changeList(lieq)
    })

    $('.popuplist .next').on('click', function () {
        ++lieq;
        if (lieq > 13) {
            lieq = 0;
        }
        changeList(lieq)
    })
    $('.skillcontainer>.skillTree').css({
        transition: 'transform 0.2s'
    })

    $('.skillcontainer>.skillTree').hover(function () {
        $(this).css({
            transform: 'scale(1.1)',
            zIndex:'99999999'
        })
    }, function () {
        $(this).css({
            transform: 'scale(1)'
        })
    }, 500)


  

},(jQuery))