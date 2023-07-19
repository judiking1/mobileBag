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