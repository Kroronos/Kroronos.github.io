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


boxWindow.addEventListener("click", checkItemClicked);
var context; 

var currentPets = 0;
var currentPetsDisplay = currentPets;
var petsPerSecond = 0;
var petsPerSecondDisplay = petsPerSecond;
var clickValue = 1; 

var petbox = new Image();
var petboxBackground = new Image();

petbox.src = "images/box.png";
petboxBackground.src = "images/cloudy-day.png";

var infoBackground = new Image();
infoBackground.src = "images/skyscraper.png";

var upgradesBackground = new Image();
upgradesBackground.src = "images/noisy_grid.png";

var constructionsBackground = new Image();
constructionsBackground.src = "images/tileable_wood_texture.png";

function render() {
	infoWindow.width = window.innerWidth/3;
	infoWindow.height = window.innerHeight/6;

	boxWindow.width = window.innerWidth/3;
	boxWindow.height = 3*window.innerHeight/4;

	upgradesWindow.width = window.innerWidth/3;
	upgradesWindow.height = window.innerHeight/6;

	constructionsWindow.width = window.innerWidth/3;
	constructionsWindow.height = 3*window.innerHeight/4;

	renderInfoWindow();
	renderBoxWindow();
	renderUpgradesWindow();
	renderConstructionsWindow();
}

function renderInfoWindow() {
	context = infoWindow.getContext("2d");
	clearInfoBounding();
	renderInfoImages();
	renderInfoText();
}

function renderBoxWindow() {
	context = boxWindow.getContext("2d");
	renderBoxImages();
}

function renderUpgradesWindow() {
	context = upgradesWindow.getContext("2d");
	renderUpgradesImages();
}

function renderConstructionsWindow() {
	context = constructionsWindow.getContext("2d");
	renderConstructionsImages();
}

function renderBoxImages() {
	context.drawImage(petboxBackground, 0, 0, boxWindow.width, boxWindow.height);
	context.drawImage(petbox, boxWindow.width/2 - petbox.width/2, boxWindow.height/2 - petbox.height/2);
}

function renderInfoImages() {
	context.drawImage(infoBackground, 0, 0, infoWindow.width, infoWindow.height);
}

function renderUpgradesImages() {
	context.drawImage(upgradesBackground, 0, 0, upgradesWindow.width, upgradesWindow.height);
}

function renderConstructionsImages() {
	context.drawImage(constructionsBackground, 0, 0, constructionsWindow.width, constructionsWindow.height);
}

function renderInfoText() {
	context.font = "30px Arial";
	context.textAlign = "center"
	context.fillText(currentPetsDisplay + " Pets", infoWindow.width/2,	infoWindow.height/3);
	context.font = "20px Arial";
	context.fillText(petsPerSecondDisplay + " Pets Per Second", infoWindow.width/2, infoWindow.height/2);
}

function clearInfoBounding() {
	context.clearRect(0, 0, infoWindow.width, infoWindow.height);
}

function checkItemClicked() {
	boxClicked();
}

function boxClicked() {
	updateCurrentPets(clickValue);
}

function petTicker() {
	updateCurrentPets(petsPerSecond);
	setTimeout(petTicker, 1000);
}

function updateCurrentPets(morePets) {
	currentPets += morePets;
	enforceCurrentPets();
	renderInfoWindow();
}

function enforceCurrentPets(){
	if(currentPets >= 100000) {
		currentPetsDisplay = Number.parseFloat(currentPets).toExponential(3);
	}
	else {
		currentPetsDisplay = currentPets;
	}
}

function updatePetsPerSecond(morePPS) {
	petsPerSecond += morePPS;
	enforcePetsPerSecond();
	renderInfoWindow();
}

function enforcePetsPerSecond() {
	if(petsPerSecond >= 100000) {
		petsPerSecondDisplay = Number.parseFloat(petsPerSecond).toExponential(3);
	}
	else {
		petsPerSecondDisplay = petsPerSecond;
	}
}

window.addEventListener("resize", render, false);
window.onload = render;
petTicker();