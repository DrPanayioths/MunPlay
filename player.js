
var player;

function onYouTubePlayerAPIReady() {
    player = new YT.Player('videoshowergr', {
        events: {
            'onReady': onPlayerReady
        }
    });
}
function onPlayerReady(event) {
    var playButton = document.getElementById("play-button");
    playButton.addEventListener("click", function() {
        player.playVideo();
    });
    var pauseButton = document.getElementById("pausebutton");
    pauseButton.addEventListener("click", function() {
        player.pauseVideo();
    });
    function spacestopvideo(event) {
        if (event.key === "Space") {
            event.preventDefault();
            player.stopVideo();
        }
    }
}

// Injector For Youtb
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);