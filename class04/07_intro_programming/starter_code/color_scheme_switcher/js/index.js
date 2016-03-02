
// On click white button set colors white
// On click grey button set colors grey
document.getElementById("grayButton").onclick = switchToGray;
document.getElementById("whiteButton").onclick = switchToWhite;

// function to make colors white
function switchToGray() {
	// change background
	document.body.style.backgroundColor = "gray";
	// change text colors
	document.body.style.color = "white";
}

function switchToWhite() {
	document.body.style.backgroundColor = "white";
	document.body.style.color = "black";
}