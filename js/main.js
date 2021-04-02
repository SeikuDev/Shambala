
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
});