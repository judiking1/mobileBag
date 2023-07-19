// 경고창
const txt = '<div class="alert">This is not ready yet.</div>';
/* $(txt).appendTo('body'); */
$('body').append(txt);

// 이벤트
$('a[href="#"], .platforms li').click(function(e){
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


// Play Now X버튼
$('.fa-times-circle').click(function(){
    $('.platforms').stop().hide();
    $('#angle-left, #angle-right').toggleClass('fa-angle-right fa-angle-left');
});


/* Video 제어 스크립트 */
// 재생버튼
var video = $('video')[0]; // 비디오 요소를 가져옵니다.

// 비디오가 끝났을 때 실행되는 이벤트 핸들러를 등록합니다.
video.addEventListener('ended', function() {
  $('.doBtn i').removeClass('fas fa-pause').addClass('fas fa-play');
});

$('.doBtn').click(function(){
    const video = $('.way video').get(0);
    if (video.paused) {
        video.play();
        $('.doBtn').html('<i class="fas fa-pause"></i>');
    } else {
        video.pause();
        $('.doBtn').html('<i class="fas fa-play"></i>');
    }
});

$('.reBtn').click(function(){
    $('video').get(0).load();
    $('.doBtn').html('<i class="fas fa-pause"></i>');
});


$('.soundBtn').click(function () {
    const video = $('.way video');
    if (video.prop('muted')) {
        video.prop('muted', false);
        $('.soundBtn img').stop().show();
        $('.soundBtn i').stop().hide();
    } else {
        video.prop('muted', true);
        $('.soundBtn img').stop().hide();
        $('.soundBtn i').stop().show();
    }
});

// Play Now 버튼
$('.playnow').click(function(){
    $('.platforms').toggle();
    $('#angle-left, #angle-right').toggleClass('fa-angle-right fa-angle-left');
});

