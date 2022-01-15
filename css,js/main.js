$('#all-button').click(() => {
    $('#all-box').fadeIn();
    $('#all-button').fadeOut();
    //     $("body").css('background-color', '#f4e0cc');
    //     $("body").css('background-color', '#262601');
    //     $("body").css('background-color', '#fafafa');
    $("body").css('background-color', '#eff3f7');
});


var pTag = document.getElementById('p');
var originL = document.getElementById('p').innerHTML;


$('.main-title').click(function () {
    pTag.innerHTML = '';


    for (let i = 0; i < originL.length; i++) {
        setTimeout(function () {
            pTag.innerHTML += originL[i];
        }, i * 100);
    };

});

var clickBool = false;

$('#button').click(function () {

    if (clickBool === false) {
        $('#more-info').fadeIn();
        clickBool = true;
    } else {
        $('#more-info').fadeOut();
        clickBool = false;
    }
});


$('#mec-btn').click(function () {
    $('.grey-box').fadeOut();
    $('.yellow-box').fadeIn();
})
$('#com-btn').click(function () {
    $('.grey-box').fadeIn();
    $('.yellow-box').fadeOut();
})
$('#all-btn').click(function () {
    $('.grey-box').fadeIn();
    $('.yellow-box').fadeIn();
})



//$(document).ready(function () {
//
//    var scroll_pos = 0;
//
//    $(document).scroll(function () {
//        var 높이 = $(window).scrollTop();
////        console.log(높이);
//
//        if (높이 < 500) {
//
//            $("body").css('background-color', 'lightgrey');
//
//        } 
//        else if ( 높이 >= 500 && 높이 < 1500 ) {
//
//            $("body").css('background-color', '#3E8989');
//
//        }
//        else if ( 높이 >= 1500){
//
//            $("body").css('background-color', '#564D65');
//        }
//        
//        else {
//
//            $("body").css('background-color', 'lightgrey');
//        }
//    });
//
//});


$(document).ready(function () {
    $(window).scroll(function () {


        var 높이 = $(window).scrollTop();
//                console.log(높이);

        $('#info-box').css("opacity", 0 + $(window).scrollTop() / 900);
        //        $('#info-box').scrollLeft(2)

        $('#work-box').css("opacity", 0 + $(window).scrollTop() / 1800);

        $('#scroll-lock').css("opacity", 0 + $(window).scrollTop() / 2700);

        $('#pro-box').css("opacity", 0 + $(window).scrollTop() / 2700);
    });
});


$(window).on('scroll', function () {

    if ($(window).scrollTop() > 800) {
        $('.nav-menu').addClass('nav-black');
        $('.nav-menu h4').addClass('small-logo');
    } else {
        $('.nav-menu').removeClass('nav-black');
        $('.nav-menu h4').removeClass('small-logo');
    }
});


//$(window).on('scroll', function () {
//
//    if ($(window).scrollTop() > 1600) {
////        $('.work-box-f').addClass('nav-black');
//        $('.work-box-f').removeClass('work-box-l');
//    } else {
////        $('.work-box-f').removeClass('nav-black');    
//        $('.work-box-f').addClass('work-box-l');
//    }
//});


