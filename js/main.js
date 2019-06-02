/*global $, console*/
$(function () {
    "use strict";
    
    var text = 'I am A Front End Developer',
        i = 0;
    window.onload = function () {
        var typeWriter = setInterval(function () {
            document.getElementById('typebyjs').textContent += text[i];
            i = i + 1;
            if (i > text.length - 1) {
                clearInterval(typeWriter);
            }
        }, 100);
        
    };
    
    //Trigger Navbar
    $('.header ul i').mouseover(function () {
        $('#' + $(this).data('value')).show();
    });
    
    $('.header ul i.phone').click(function () {
        $(this).siblings().toggleClass('hidden-xs');
    });
    
    $('.header ul i').mouseleave(function () {
        $('#' + $(this).data('value')).hide();
    });
    
    $('.header ul i').click(function () {
        $('html, body').animate({
            scrollTop : $('.' + $(this).data('value')).offset().top
        }, 1000);

    });
    
    //Show Portfolio
    var mixer = mixitup('.gallery');
    
    //    $('.portfolio ul li').click(function () {
    //        $(this).addClass('active').siblings().removeClass('active');
    //        $('.mix').hide();
    //        $('.mix' + $(this).data('filter')).show();
    //    });
    
    //Trigger carousel
    $('.carousel').carousel({
        interval: 2000
    });
    
    //Scroll Top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 800) {
            $("#scroll-top").show();
        } else {
            $("#scroll-top").hide();
        }
    });
    $('#scroll-top').click(function () {
        $('html,body').animate({scrollTop : 0}, 2000);
    });
    
});