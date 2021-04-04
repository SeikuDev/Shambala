
$(document).ready(function () {

    /*-- Start Navbar Shrink --*/
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 90)
            $(".navbar").addClass("navbar-shrink");
        else
            $(".navbar").removeClass("navbar-shrink");
    });
    /*-- End Navbar Shrink --*/

    /*-- Start Video PopUp --*/
    const video_src = $("#player-video-theme").attr("src")
    $(".btn-video-play, .video-popup").on("click", function () {
        if ($(".video-popup").hasClass("open")) {
            $(".video-popup").removeClass("open");
            $("#player-video-theme").attr("src", "")
        } else {
            $(".video-popup").addClass("open");
            if ($("#player-video-theme").attr("src") == '') {
                $("#player-video-theme").attr("src", video_src)
            }
        }
    });
    /*-- End Video PopUp --*/

    /*-- Start Owl Carousel --*/
    $('.features-carousel').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });
    /*-- End Owl Carousel --*/


});

jQuery.event.special.touchstart = {
    setup: function (_, ns, handle) {
        this.addEventListener('touchstart', handle, { passive: !ns.includes('noPreventDefault') });
    }
};
jQuery.event.special.touchmove = {
    setup: function (_, ns, handle) {
        this.addEventListener('touchmove', handle, { passive: !ns.includes('noPreventDefault') });
    }
};