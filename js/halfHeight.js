var bw = $(window).width();
var bh = $(window).height();
$('#wrap').css({height:bh});
// 브라우저 높이의 반값 구하기
// 유튜브 영상 레이아웃
var halfHeight = bh/2;
$('.youtube').css({marginTop:halfHeight, transform:'translateY(-100%)'});

// $('.youtube').css({width:'100%', position:'absolute', top:bh/2, left:0, transform:'translateY(-50%)'});


