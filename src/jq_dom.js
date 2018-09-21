import $ from "jquery";

$(function () {

    $(".directory a").click(function () {
        $(this).parent("li").addClass("hover").siblings().removeClass("hover");
    })

    $(document).scroll(function () {
        if ($(document).scrollTop() <= 1000) {
            $(".sidebar").fadeOut(300);
        } else {
            $(".sidebar").fadeIn(300);
        }
    })

    $(".sidebar").click(function () {
        $("html,body").animate({
            scrollTop: 0,
        }, 500);
        $(".directory li").removeClass("hover");
    })

})