$(document).onLoad(function() {
    // $('#portrait').click(function() {
    //     var hidden = $('.hidden');
    //     if (hidden.hasClass('visible')) {
    //         hidden.animate({
    //             "left": "-1000px"
    //         }, "slow").removeClass('visible');
    //     } else {
    //         hidden.animate({
    //             "left": "0px"
    //         }, "slow").addClass('visible');
    //     }
    // });

    // $('#portrait').animate(
    //     { "left": "1000px" },
    //     500
    // );

    $("#portrait").animate({'width': 240},500);
});
