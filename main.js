'use strict';

//브라우저는 $(window)
//스크롤 시 헤더의 다운로드 버튼 보이기
$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            $('.download').addClass('active');
        }
        else {
            $('.download').removeClass('active');
       }
   }) 
});