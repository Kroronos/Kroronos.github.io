document.getElementById("infoWindow").onmousedown = function(){
	return false;
};
document.getElementById("boxWindow").onmousedown = function(){
	return false;
};
document.getElementById("upgradesWindow").onmousedown = function(){
	return false;
};
document.getElementById("constructionsWindow").onmousedown = function(){
	return false;
}; //this prevents selection of navbar text from clicking on canvas elements

var infoWindow = document.getElementById("infoWindow");
var boxWindow = document.getElementById("boxWindow");
var upgradesWindow = document.getElementById("upgradesWindow");
var constructionsWindow = document.getElementById("constructionsWindow");

function fixRes(canvas) {
	canvas.width = canvas.getBoundingClientRect().width;
	canvas.height = canvas.getBoundingClientRect().height;
}

fixRes(infoWindow);
fixRes(boxWindow);
fixRes(upgradesWindow);
fixRes(constructionsWindow);

boxWindow.addEventListener("click", checkItemClicked);
var context; 

var currentPets = 0;
var petsPerSecond = 0;
var clickValue = 1; 

var petbox = new Image();
var background =  new Image();

petbox.src = "../images/petbox/box.png";
background.src = "../images/petbox/cloudy-day.png";


function render() {
	renderImages();
	renderText();
}

function renderImages() {
	
	context = boxWindow.getContext("2d");
	context.drawImage(background, 0, 0);
	context.drawImage(petbox, boxWindow.width/2 - petbox.width/2, boxWindow.height/2 - petbox.height/2);
}

function renderText() {
	
	context = infoWindow.getContext("2d");
	context.clearRect(0, 0, infoWindow.width, infoWindow.height);
	context.font = "30px Arial";
	context.textAlign = "center"
	context.fillText(currentPets + " Pets", infoWindow.width/2, 35);
	context.font = "20px Arial";
	context.fillText(petsPerSecond + " Pets Per Second", infoWindow.width/2, 55);
}

function checkItemClicked() {
	boxClicked();
}

function boxClicked() {
	currentPets += clickValue;
	renderText(); 
}

window.onload = render;