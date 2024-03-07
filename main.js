
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

