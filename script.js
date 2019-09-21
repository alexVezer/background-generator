var css = document.querySelector("h3"); 
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");


function setGradient() {
	body.style.background = 
		"linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";

	css.textContent = body.style.background + ";";
}

function getRandomColor() {
	var c= '';
	while (c.length < 6) {
		c+= (Math.random()).toString(16).substr(-6).substr(-1);
	}
	console.log(c);
	return '#' + c;
}

function setRandomGradient(){
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	console.log(color1.value);
	console.log(color2.value);
	setGradient();	
}
css.textContent = "linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", setRandomGradient);