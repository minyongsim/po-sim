(function($){
    $('.menu>ul>li').on('click',function(e){
        $(this).addClass('on')
        $(this).siblings(this).removeClass('on')
      })

  
      $(".visualRoll").slick({
        autoplay:true,  // 자동재생
        autoplaySpeed:3500, // 간격시간
        dots:true, // 동그라미버튼
        speed:600, // 바뀌는시간(생략가능)
        slidesToShow:1, // 보여질슬라이드수(생략가능)
        slidesToScroll:1, // 이동슬라이드수(생략가능)
        pauseOnHover:true, // 마우스오버시 멈춤여부(생략가능)
        pauseOnDotsHover:true, // 동그라미번호버튼에 호버시 멈춤여부(생략가능)
        pauseOnFocus:false,  // 동그라미번호버튼 클릭시 자동실행 멈춤여부
        cssEase:'linear', // 속도함수(생략가능)
        draggable:true, // 마우스드래그시 슬라이드 교체가능여부(생략가능)
        fade:false, // 슬라이드가 수평으로 이동하지 않고, 제자리에서 사라지고 나타남(생략가능)
        arrows:true, // 좌우화살표 사용여부(생략가능)
        prevArrow: '<button class="prevArrow  marrow"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button class="nextArrow  marrow"><i class="fas fa-angle-right"></i></button>',
})

$(".main_rolling .plpa").on("click", function(){
        if (  $(this).find("i").hasClass("fa-pause")  ) {
                $(".visualRoll").slick("slickPause")
                $(this).find("i").removeClass("fa-pause").addClass("fa-play")
        } else {
                $(".visualRoll").slick("slickPlay")
                $(this).find("i").removeClass("fa-play").addClass("fa-pause")
        }
})


var sct=0;
var winHeight; 
$(window).scroll(function(){
    sct=$(this).scrollTop();
    winHeight = $(this).height()/10
    if(sct >= winHeight){
        $('#header,.menu>ul>li').css({
            background:'transparent',
            color:'#000'
        });
        $('.logo').css({
            opacity:'0'
        })
        
    } else {
        $('#header,.menu>ul>li').css({
            background:'rgba(255,255,255,255)',
            color:'#949597'
        });
        $('.logo').css({
            opacity:'1'
        })
    }

    // 스크롤탑값이 100이상이 되면 맨위로 버튼이 보이고 100미만이면 숨기기
    if(sct>=100){
        $(".gotop").addClass("on").stop().animate({
            opacity: 1
        },500)
    }else{
        $(".gotop").removeClass("on").stop().animate({
            opacity:0
        },500)
    }
 

});

$(function () {

    $(".tab_content").hide();
    $(".tab_content:first").show();

    $("ul.tabs li").click(function () {
        $("ul.tabs li").removeClass("active").css("color", "#333");
        //$(this).addClass("active").css({"color": "darkred","font-weight": "bolder"});
        $(this).addClass("active").css("color", "#000");
        $(".tab_content").hide()
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn().css("bor")
    });
});

var href, src, alt, lieq;
$('#tab2 > .psNai > li').on('click', function(e){
  e.preventDefault();//기본 이벤틀 막아줌
  lieq = $(this).parent().index()
  $('.gellaryPopup').addClass('on')
  href = $(this).attr('href')
  src = $(this).find('img').attr('src')
  alt = $(this).find('img').attr('alt')
  //console.log(alt)
  $('.popuplist > div > a').attr('href',href)
  $('.popuplist > div > a > img').attr({
      'src':src,
      'alt':alt
  })

})

$('.gellaryPopup .close, .gellaryPopup').on('click',function(){
    $('.gellaryPopup').removeClass('on')
})
$('.popuplist').on('click',function(e){
    e.stopPropagation(); //부모한테 이벤트 전파를 막음
}) 
function changeList(ind){
  href = $('.psNai > li').eq(ind).find('a').attr('href')
  src = $('.psNai > li').eq(ind).find('img').attr('src')
  alt = $('.psNai > li').eq(ind).find('img').attr('alt')
  $('.popuplist > div > a').attr('href',href)
  $('.popuplist > div > a > img').attr({
      'src':src,
      'alt':alt
}).css({
    opacity:'0.5'
}).stop().animate({
    opacity:'1'
}, 500)
}

$('.popuplist .prev').on('click',function(){
  --lieq;
  if (lieq < 0){
      lieq = 6;
  }
  changeList(lieq)
})

$('.popuplist .next').on('click',function(){
  ++lieq;
  if (lieq > 6){
      lieq = 0;
  }
  changeList(lieq)
  })


})(jQuery)