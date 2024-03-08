
// Settings Open Function
function opensettings(){
    var settings = document.getElementById("settings-general")
    settings.style.opacity = "1";
    settings.style.animation = "smoothin 3s";
}


// Settings Close Function

function closesettings(){
    var settings = document.getElementById("settings-general")
    settings.style.animation = "closeset 3s";
    settings.style.opacity = "0";
}

 // Function to check if the user is on a mobile device
 function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
   function redirectIfMobile() {
    if (isMobileDevice()) {
    window.location.href = 'https://drpanayioths.github.io/helper/Mobile/notavailable.html';
     }
   }
   window.onload = redirectIfMobile();
   window.onload = isMobileDevice();
  