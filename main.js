
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
  




  // Minimize On Start (Cookies Used)
function check_minimize() {
  localStorage.setItem("minimize","True");
  var minimize = localStorage.getItem("minimize");
  if (minimize == "True") {
    var ytcon = document. getElementsByClassName("yconnector");
    ytcon.width = "5px";
    ytcon.height = "5px";

  } else if (minimize == "False") {
    var videoShow = document.getElementById("videoshowergr");
    videoShow.width = "600px";
    videoShow.height = "300px"; 
  }
}
window.onload = check_minimize;

function minimize_on() {
  localStorage.setItem("minimize", "True");
  var minimizeon = document.getElementById("minimize_on");
  var minimizeoff  = document.getElementById("minimize_off");
  minimizeon.visibility = "hidden";
  minimizeoff.visibility = "visible";
}

function minimize_off() {
  localStorage.setItem("minimize", "False");
  document.getElementById("minimize_on").style.visibility = "visible";
  document.getElementById("minimize_off").style.visibility = "hidden";
}