var colors = generateColors(6);

var cards = document.querySelectorAll(".card");
var message = document.querySelector("#message");
var colorCombo = document.getElementById("color-combo");
var titleBox = document.querySelector("#title-box");
var resetButton = document.querySelector("#reset-button");

var pickedColor = pickColor();

colorCombo.textContent = pickedColor;

for(var i = 0; i < cards.length; i++){
	// add initial colors to squares
	cards[i].style.background = colors[i];

	//add click listeners to squares
	cards[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			message.textContent = "Correct!";
			changeColors(clickedColor);
			resetButton.textContent = "Try Again?";
		} else {
			this.style.background = '#232323';
			message.textContent = "Try Again!";
		}
	});
}

function changeColors(color){
	for (var i = 0; i < cards.length; i++) {
		cards[i].style.background = color;
	}
	titleBox.style.background = color;
};

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
};

function generateColors(number){
	// make an array
	arr = [];
	// push the random colors into the array
	for (var i = 0; i < number; i++) {
		arr.push(randomColor());
	}
	// return the array
	return arr;
};

function randomColor(){
	// select a red value from 0-255
	var red = Math.floor(Math.random()*256); // use "256" because we want 255 to be the highest number
	// select a green value
	var green = Math.floor(Math.random()*256);
	// select a blue value
	var blue = Math.floor(Math.random()*256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
};
