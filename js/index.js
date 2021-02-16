
const menu_bar = document.getElementById('toggle_menu');
const main_nav = document.getElementById('main_nav');
menu_bar.onclick = function(){
    menu_bar.classList.toggle('on');
    main_nav.classList.toggle('on');
 };


$(document).ready(function(){
    var s1 = ('.section01');
    var s2 = ('.section02');
    var s3 = ('.section03');
    var s4 = ('.section04');
   
        $(window).scroll(function(){
            scrollOn(s1,'h2');
            scrollOn(s1,'.section01_img01');
            scrollOn(s1,'.section01_img02');
            scrollOn(s2,'h2');
            scrollOn(s2,'.left');
            scrollOn(s2,'.right');
            scrollOn('.section02 div','.section02_img01');
            scrollOn('.section02 div','.section02_img02');
            scrollOn('.section02 div','.section02_img03');
            scrollOn(s3,'h2');
            scrollOn(s3,'p');
            scrollOn('.section03 div','.section03_img01');
            scrollOn('.section03 div','.section03_img02');
            scrollOn('.section03 div','.section03_img03');
            scrollOn(s4,'h2');
            scrollOn(s4,'p');
            scrollOn('.section04','div');
            scrollOn('.section04 div','.section04_img01');
            scrollOn('.section04 div','.section04_img02');
            scrollOn('.section04 div','.section04_img03');
        });
    
        function scrollOn(pa,ch){  
        if($(window).scrollTop() + $(window).height() > $(pa).offset().top + 200){
            $(pa).find(ch).addClass('active');
        }
    }
    
});