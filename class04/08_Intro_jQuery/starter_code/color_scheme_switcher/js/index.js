/*
document.getElementById('grayButton').onclick = switchGray;
document.getElementById('whiteButton').onclick = switchWhite;

function switchGray() {
  document.body.style.backgroundColor = 'gray';
 document.body.style.color = 'white';
}

function switchWhite() {
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
}
*/

/*
$( document ).ready(function() {
    console.log( "ready!" );
});

or

$(function() {
    console.log( "ready!" );
});
*/

/*
element = jQuery('p').click();
ID = jQuery('#id').click();
class = jQuery('.class').click();
*/

// library you put in your code; jQuery used for site/page validation
// framework is something you put your code in; used for client and server dev
// NodeJS for server side JS and interaction

jQuery( document ).ready(function() {
	jQuery('#grayButton').click(switchGray);
	jQuery('#whiteButton').click(switchWhite);

	function switchGray() {	jQuery('body').css('backgroundColor', 'gray');
	jQuery('body').css('color', 'white');
	console.log("I am gray");
	}

	function switchWhite() {
	jQuery('body').css('backgroundColor', 'white');
	jQuery('body').css('color', 'black');
	console.log("I am white");
	}
});

