$(document).ready(function () {

    $(".img-container img:first-child").addClass("active");

    $("#burger-menu").click(function(){
        $("#scrolling-menu").slideToggle();
        $("#burger-menu").toggleClass('bg-color-white');
        $("#burger-menu div").toggleClass('bg-color-black');
    });


    $(window).scroll(function(){
        if($(window).scrollTop() + $(window).height() == $(document).height()){
            $(".tobeFaded").fadeIn(2000);
        }
    });

    var nbrImgs;
    var counter;
    var leftValue;

    function init(elem){
        counter = elem.parent().find(".img-container img.active").index();
        leftValue = counter * -100;
        nbrImgs = elem.parent().find(".img-container img").length;
    }

    $(".arrow-left").click(function(){
         
        init($(this));
 
        if(counter > 0){
            $(this).parent().find(".img-container img").removeClass("active");
            $(this).parent().find(".img-container img").eq(counter - 1).addClass("active");
            leftValue += 100;
            $(this).parent().find(".img-container").animate({left : leftValue + "%"}, 1000);
         }

    });

    $(".arrow-right").click(function(){
        init($(this));

        if(counter < nbrImgs -1){
            $(this).parent().find(".img-container img").removeClass("active");
            $(this).parent().find(".img-container img").eq(counter + 1).addClass("active");
            leftValue -= 100;
            $(this).parent().find(".img-container").animate({left : leftValue + "%"}, 1000);
        }
    });
});