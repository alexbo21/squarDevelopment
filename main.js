

// detecting screen size

let screenWidth = window.screenX;
let screenHeight = window.screenY;
// Checking if will render correctly

if (screenWidth > 396){
  window.location.href = "screenissue.html";
};





// issues or inquires
function contactUs(){
  window.open('mailto:help.squar@gmail.com');
};


// opening settings
document.getElementById("settingsBar").style.display = "none";

function settingsBarOpen(){
  document.getElementById('sidebar').style.display = "none";
  document.getElementById("settingsBar").style.display = "block";
};

function backToMain(){
  document.getElementById('sidebar').style.display = "block";
};

//if advertizement is hovered over

var a = document.getElementById("adv");
var adPlayer = document.getElementById("advPlayer");
var shows = document.getElementById("shows");

a.addEventListener("mouseover", adverHover);
a.addEventListener("mouseout", adverOut );

let used = false;
function adverHover(){
 adPlayer.className = "adPlayerLg";
 shows.style.display = "none";
  used = true;
};

function adverOut(){
  if (used = true){
  adPlayer.className = "adPlayer";
  shows.style.display = "block";
};
};