// 경고창
const txt = '<div class="alert">This is not ready yet.</div>';
/* $(txt).appendTo('body'); */
$('body').append(txt);

// 이벤트
$('a[href="#"]').click(function(e){
    e.preventDefault();
    $('.alert').stop().fadeIn(300);
    $('.curtain').stop().fadeIn(300);
    setTimeout(function(){
        $('.alert').stop().fadeOut(500);
        $('.curtain').stop().fadeOut(500);
    }, 1000);
});
// Top 버튼
$(window).scroll(function(){
  if($(this).scrollTop()>400){
      $('#topButton').stop().show();
  }else{
      $('#topButton').stop().hide();
  }
});

$('#topButton').click(function(){
    window.scrollTo({top : 0, behavior: 'auto'}); 
});

// 메뉴 클릭하기
const menus = document.querySelectorAll('.slide a');
menus.forEach((menu) => {
    menu.addEventListener('click', function(event) {
      event.preventDefault(); // 클릭된 링크의 기본 동작을 방지합니다.
      
      // 다른 요소들의 clicked 클래스 제거
      menus.forEach((otherMenu) => {
        if (otherMenu !== this) {
          otherMenu.classList.remove('clicked');
        }
      });
      
      // 클릭된 요소인 경우 클래스 토글
      if (!this.classList.contains('clicked')) {
        this.classList.add('clicked');
      }
    });
  });

// 메뉴 클릭하면 해당 섹션 나오기
$('.slide a').click(function(e){
    e.preventDefault();
    $('.download').hide();
    $('section').hide();
    const a = $(this).attr('href');
    $(a).show();
    if(a=="#all"){
        $('section').show();
    }
});

/* Download */

// 창뜨기
$('figure img, figure h3').click(function() {
  // 상세 정보 표시
  $('.download').stop().hide();
  $(this).parent().next('.download').show();
});

// 오디오, 비디오 클릭안되게하기
$('figure audio, figure .audioplayer, figure .video').click(function(event) {
  event.stopPropagation(); // figure 클릭 이벤트 중지
});

// 닫기
$('.download .close').click(function(){
  $('.download').hide();
});

// 이전, 다음
$('.download_prev').click(function(){
  var down = $('.download');
  console.log(down);
  var currentDownload = $(this).closest('.download');
  var currentIndex = $('.download').index(currentDownload);
  var prevIndex = (currentIndex - 1 + $('.download').length) % $('.download').length;
  var prevDownload = $('.download').eq(prevIndex);

  currentDownload.hide();
  prevDownload.show();

});
$('.download_next').click(function() {
  var currentDownload = $(this).closest('.download');
  var currentIndex = $('.download').index(currentDownload);
  var nextIndex = (currentIndex + 1) % $('.download').length;
  var nextDownload = $('.download').eq(nextIndex);

  currentDownload.hide();
  nextDownload.show();
});
