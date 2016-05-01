//$('#box').append('<div>난 div 요소</div>');
var didScroll;
// 스크롤시에 사용자가 스크롤했다는 것을 알림


$(window).scroll(function(event){
    didScroll = true;
});

// hasScrolled()를 실행하고 didScroll 상태를 재설정
setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var y = $(this).scrollTop();
    if(y >= 100){
      $('#up').fadeIn()
    }else{
      $('#up').fadeOut();
    }
}

  $('#up').on('click',function(event){
      var position = $('#scroll').offset(); // 위치값
      $('html,body').animate({ scrollTop : position.top }, 100); // 이동
      console.log("test");

  });
