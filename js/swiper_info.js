// 스와이퍼 생성 | .swiper-container = 구조 Swiper 클래스
var swiper = new Swiper('.swiper-container', {
    /* a. 슬라이드 보이는 갯수 */
    slidePerView: '1.5',
    /* b. 슬라이드 사이 간격 */
    spaceBetween: '1%',
    /* c. 슬라이드 반복 여부 */
    loop: false,
    /* d. 그룹수 맞추기 => 안 맞을경우 빈칸으로 채우기 여부 */
    loopFillGroupWidthBlank: false,
    /* e. 활성 슬라이드 항상 가운데 배치하기 */
    centeredSlides: false,

    // 네비게이션 좌우 화살표
    /* navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }, */

    //페이지, 넘버링
    pagination: {
        // 적용 구조에 코딩된 클래스명
        el:'.swiper-pagination',
        type: 'bullets',
        // bullets 적용후, 점박이 클릭시 해당 슬라이드로 링크여부
        clickable: true,
        // 1/6 처럼 숫자로 보고 싶을 때
        /* type: 'fraction', */
    },

});