
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
    // var pauseButton = document.getElementById("pausebutton");
    // pauseButton.addEventListener("Space", function() {
    //     player.pauseVideo();
    // });

    // Fix This So Space Can Pause Video
    
    
}

// Injector For Youtb
var api = document.createElement('script');
api.src = "https://www.youtube.com/player_api";
var scripter = document.getElementsByTagName('script')[0];
scripter.parentNode.insertBefore(api, scripter);


// Search Input 
function resultsurl() {
var input_text = document.getElementById("urlinput").value;
var video_source = document.getElementById("videoshowergr");
let input_final = input_text.slice(32, 50);

if (input_text != "") {
    video_source.src = "https://www.youtube-nocookie.com/embed/" + input_final + "?enablejsapi=1&html5=1&controls=0&modestbranding=1&showinfo=0";
}
else {
    video_source.src = "https://www.youtube-nocookie.com/embed/m6KjIbHwutg?enablejsapi=1&html5=1&controls=0&modestbranding=1&showinfo=0";
}


}