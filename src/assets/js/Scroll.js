import * as $ from 'jquery'
$(document).ready(function(){
    window.scrollTo(0, 0);
    var stickyTop = $('.sticky').offset().top;
    $('a[data-section=overview-section]').addClass('active-nav')
    $(".jumpto").click(function() {

        $('.acr-listing-controls').children('a').removeClass('active-nav')
        $(this).addClass('active-nav')
        var section = $(this).attr("data-section");
    
        $('html, body').animate({
            scrollTop:eval($('#' + section).offset().top - 150)
        }, 1500);
    });
});
