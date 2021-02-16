$(document).ready(function(){
    
    var s1sb2 = ('.section01_sb2');
    var s2sb2 = ('.section02_sb2');
    var s3sb2 = ('.section03_sb2');
    var s4sb2 = ('.section04_sb2');
    
        $(window).scroll(function(){
            scrollOn(s1sb2,'h2');
            scrollOn(s1sb2,'.section01_img01_sb2');
            scrollOn(s1sb2,'p');
            scrollOn(s2sb2,'h2');
            scrollOn(s2sb2,'.section02_img01_sb2');
            scrollOn(s2sb2,'.section02_img02_sb2');
            scrollOn(s2sb2,'p');
            scrollOn(s3sb2,'h2');
            scrollOn(s3sb2,'.left_sb2');
            scrollOn(s3sb2,'.right_sb2');
            scrollOn(s3sb2,'.section03_img01_sb2');
            scrollOn(s3sb2,'.section03_img02_sb2');
            scrollOn(s3sb2,'.section03_img03_sb2');
            scrollOn(s4sb2,'h2');
            scrollOn(s4sb2,'p');
            scrollOn(s4sb2,'.section04_img01_sb2');
            scrollOn(s4sb2,'.section04_img02_sb2');
        });
    
    
        function scrollOn(pa,ch){  
        if($(window).scrollTop() + $(window).height() > $(pa).offset().top + 200){
            $(pa).find(ch).addClass('active');
        }
    }
});