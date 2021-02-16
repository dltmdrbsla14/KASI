$(document).ready(function(){
    
    var s1sb3 = ('.section01_sb3');
    var s2sb3 = ('.section02_sb3');
    var s3sb3 = ('.section03_sb3');
    var s4sb3 = ('.section04_sb3');
    
        $(window).scroll(function(){
            scrollOn(s1sb3,'h2');
            scrollOn(s1sb3,'.section01_img01_sb3');
            scrollOn(s1sb3,'.section01_img02_sb3');
            scrollOn(s1sb3,'p');
            scrollOn(s2sb3,'h2');
            scrollOn(s2sb3,'p');
            scrollOn(s2sb3,'.section02_img01_sb3');
            scrollOn(s3sb3,'h2');
            scrollOn(s3sb3,'p');
            scrollOn(s3sb3,'.section03_img01_sb3');
            scrollOn(s4sb3,'h2');
            scrollOn(s4sb3,'p');
            scrollOn(s4sb3,'strong');
            scrollOn(s4sb3,'.section04_img01_sb3');
            scrollOn(s4sb3,'span');
        });
    
    
        function scrollOn(pa,ch){  
        if($(window).scrollTop() + $(window).height() > $(pa).offset().top + 200){
            $(pa).find(ch).addClass('active');
        }
    }
});