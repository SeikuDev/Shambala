$(document).ready(function () {
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

    /*-- Start gsap js --*/

    /*-- End gsap js --*/
});