$(document).ready(function(){
    
    var s1sb1 = ('.section01_sb1');
    var s2sb1 = ('.section02_sb1');
    var s3sb1 = ('.section03_sb1');
    var s4sb1 = ('.section04_sb1');
    
        $(window).scroll(function(){
            scrollOn(s1sb1,'h2');
            scrollOn(s1sb1,'.section01_img01_sb1');
            scrollOn(s1sb1,'.section01_img02_sb1');
            scrollOn(s1sb1,'.section01_img03_sb1');
            scrollOn(s1sb1,'.section01_img04_sb1');
            scrollOn(s2sb1,'h2');
            scrollOn(s2sb1,'.section02_img01_sb1');
            scrollOn(s2sb1,'p');
            scrollOn(s3sb1,'h2');
            scrollOn(s3sb1,'.section03_img01_sb1');
            scrollOn(s3sb1,'p');
            scrollOn(s4sb1,'h2');
            scrollOn(s4sb1,'.section04_sb1_1');
            scrollOn(s4sb1,'.section04_sb1_2');
            scrollOn(s4sb1,'.section04_sb1_3');
            scrollOn(s4sb1,'.section04_sb1_4');
            scrollOn(s4sb1,'.section04_sb1_5');
            scrollOn(s4sb1,'span');
        });
    
    
        function scrollOn(pa,ch){  
        if($(window).scrollTop() + $(window).height() > $(pa).offset().top + 200){
            $(pa).find(ch).addClass('active');
        }
    }
});