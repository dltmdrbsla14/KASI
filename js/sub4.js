$(document).ready(function(){
    
    var s1sb4 = ('.section01_sb4');
    var s2sb4 = ('.section02_sb4');
    var s3sb4 = ('.section03_sb4');
    var s4sb4 = ('.section04_sb4');
    
        $(window).scroll(function(){
            scrollOn(s1sb4,'h2');
            scrollOn(s1sb4,'.section01_img01_sb4');
            scrollOn(s1sb4,'.section01_img02_sb4');
            scrollOn(s1sb4,'.section01_img03_sb4');
            scrollOn(s1sb4,'.section01_img04_sb4');
            scrollOn(s1sb4,'a');
            scrollOn(s1sb4,'.section01_right_sb4');
            scrollOn(s2sb4,'h2');
            scrollOn(s3sb4,'h2');
            scrollOn(s3sb4,'p');
            scrollOn(s3sb4,'.section03_img01_sb4');
            scrollOn(s3sb4,'.section03_img02_sb4');
            scrollOn(s4sb4,'h2');
            scrollOn(s4sb4,'.section04_img01_sb4');
            scrollOn(s4sb4,'.section04_img02_sb4');
            scrollOn(s4sb4,'.section04_img03_sb4');
        });
    
    
        function scrollOn(pa,ch){  
        if($(window).scrollTop() + $(window).height() > $(pa).offset().top + 200){
            $(pa).find(ch).addClass('active');
        }
    }
});