// 스와이퍼 생성 | .swiper-container = 구조 Swiper 클래스
var swiper = new Swiper('.swiper-container', {
    /* a. 슬라이드 보이는 갯수 */
    slidePerView: 1.8,
    /* b. 슬라이드 사이 간격 */
    spaceBetween: '0%',
    /* c. 슬라이드 반복 여부 */
    loop: false,
    /* d. 그룹수 맞추기 => 안 맞을경우 빈칸으로 채우기 여부 */
    loopFillGroupWidthBlank: true,
    /* e. 활성 슬라이드 항상 가운데 배치하기 */
    centeredSlides: false,

    // 네비게이션 좌우 화살표
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }

});