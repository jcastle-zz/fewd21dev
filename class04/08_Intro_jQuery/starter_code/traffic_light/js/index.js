//Implement the red light using jQuery. Don't forget to add the script tags.

jQuery( document ).ready(function() {
	jQuery('#stopButton').click(switchRed);
	jQuery('#slowButton').click(switchYellow);
	jQuery('#goButton').click(switchGreen);

	function switchRed() {	
	clearLights()
	jQuery('#stopLight').css('backgroundColor', 'red');
	console.log("I am red");
	}

	function switchYellow() {
	clearLights()
	jQuery('#slowLight').css('backgroundColor', 'yellow');
	console.log("I am yellow");
	}

	function switchGreen() {
	clearLights()
	jQuery('#goLight').css('backgroundColor', 'green');
	console.log("I am green");
	}

	function clearLights() {
	jQuery('#stopLight').css('backgroundColor', 'black')
	jQuery('#slowLight').css('backgroundColor', 'black')
	jQuery('#goLight').css('backgroundColor', 'black')
	}
});
