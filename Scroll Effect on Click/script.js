$(function() {
    // Scroll effect
    $(".scroll").on("click", function() {   
        $(this).each(function() {
            const sectionTop = $(this.hash).offset().top;
            $("html, body").animate({
                scrollTop: sectionTop
            }, 1500);
        });
    });
});