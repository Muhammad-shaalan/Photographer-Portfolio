/*global $*/
/*global console */
$(document).ready(function () {
    "use strict";
//Scroll To Section******
    
    $("li").click(function () {
        console.log($(this).data('value'));
        $('html, body').animate({
            scrollTop : $('#' + $(this).data('value')).offset().top
        }, 1000);
    });
});