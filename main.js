
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
  if (minimize === "True") {
    document.getElementsByClassName("yconnector").style.width = "5px";
    document.getElementsByClassName("yconnector").style.height = "5px";
  } else if (minimize === "False") {
    document.getElementById("videoshowergr").style.width = "600px";
    document.getElementById("videoshowergr").style.height = "300px";
  }
}
window.onload = check_minimize();

function minimize_on() {
  localStorage.setItem("minimize", "True");
  document.getElementById("minimize_on").style.visibility = "hidden";
  document.getElementById("minimize_off").style.visibility = "visible";
}

function minimize_off() {
  localStorage.setItem("minimize", "False");
  document.getElementById("minimize_on").style.visibility = "visible";
  document.getElementById("minimize_off").style.visibility = "hidden";
}