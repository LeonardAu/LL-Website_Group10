
var vid = document.getElementById("myVideo"); 
var buttontextremotevalue = document.getElementById("page4btn");
let remotevalue = 12;

function vidFunction(){
if (remotevalue > 11){
vid.pause(); 
remotevalue -= 2;
buttontextremotevalue.innerHTML = "Play";
} else {
vid.play(); 
remotevalue += 2
buttontextremotevalue.innerHTML = "Pause";
}
}
