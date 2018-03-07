

var canvas = document.getElementById("gamewindow");

var context = canvas.getContext("2d");


var petbox = new Image();
var background =  new Image();

petbox.src = "../images/petbox/box.png";
background.src = "../images/petbox/cloudy-day.png";


function render() {
	context.drawImage(background, 0, 0);
	context.drawImage(petbox, 0 , 0);
}

render();