var clipTitle = $('.clip-text'),
    target;

$('button').on('click', function() {
    target = $(this).attr('class');
    clipTitle.each(function() {
        var current = $(this);
        if (current.hasClass(target)) {
            current.toggleClass('reveal');
        }
    });
});

$(function() {
    $(".preload").fadeOut(2000, function() {
        $(".content").fadeIn(1000);
    });
});

$(document).ready(function() {
    $("#slider-range-min").slider({
        range: "min",
        step: 100,
        value: 1200,
        min: 0,
        max: 15000,
        slide: function(event, ui) {
            $("#amount").val("sh" + ui.value);
        },
        change: function(event, ui) {
            if (ui.value === 0) {
                $("#amount").val("To be determined");
            } else if (ui.value === 15000) {
                $("#amount").val("sh" + "15000 or more");
            } else {
                $("#amount").val("sh" + $("#slider-range-min").slider("value"));
            }
        }
    });
    $("#amount").val("sh" + $("#slider-range-min").slider("value"));

});

$(document).ready(function() {

    // -- autosize init --

    autosize($('textarea'));

});