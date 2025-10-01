// slider obrázků
var activeImageId = 1;
var nextImageId = 1;
setInterval(function(){
nextImageId = nextImageId + 1;
if(nextImageId < 12) {
document.getElementById("img"+activeImageId).classList.replace("visible","hidden");
document.getElementById("img"+nextImageId).classList.replace("hidden","visible");
activeImageId = nextImageId;}
else {
document.getElementById("img"+activeImageId).classList.replace("visible","hidden");
document.getElementById("img"+nextImageId).classList.replace("hidden","visible");
activeImageId = 12;
nextImageId = 0;}
},2000);
