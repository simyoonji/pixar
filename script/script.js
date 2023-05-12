$('ul.menu-pc>li').click(function(){
    $(this).siblings().find('ul').slideUp();//사용자가 클릭한 li태그 선택하여 나머지 형제 li태그 3개 선택함. 자식 요소를 ul태그 선택하여 숨기겠다.
    $(this).find('ul').stop().slideToggle();
});
