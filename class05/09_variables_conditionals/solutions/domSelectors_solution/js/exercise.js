/**
 * Javascript/jQuery Exercises: Selecting Things In The DOM!
 * Answer the following questions.
 * Remember to 
 */

/**
 * Question 1:
 * When, button 1 is clicked, select all paragraphs on the page with jQuery, and changed the color to blue.
 */
 
	function question1(){
	jQuery("p").css("color", "blue");
	}

	jQuery("#button1").click(question1);

/**
 * Question 2:
 * When button 1 is clicked, select all <h2> elements on this page, and change the text to say your name.
 */

	function question2(){
		jQuery("h2").html("General Assembly");
	}

	jQuery("#button1").click(question2);

/**
 * Question 3:
 * When button 1 is clicked, select the ordered list item that has the class "falseFact". 
 * Using jQuery change the content to read "True Fact".
 */

	function question3(){
		jQuery(".falseFact").html("True Fact");
	}

	jQuery("#button1").click(question3);


/**
 * Question 4: 
 * When button 2 is clicked, change the background color of the whole page to "pink"
 */

	function question4(){
		jQuery("body").css("background", "pink");
	}

	jQuery("#button2").click(question4);


/**
 * Question 5:
 * When button 2 is clicked, change the color of all h2's to "green"
 */

	function question5(){
		jQuery("h2").css("green");
	}

	jQuery("#button2").click(question5);

/**
 * Question 6:
 * When button 2 is clicked, change the html content of all "blockquotes" to be "<span>no quote</span>"
 */

	function question6(){
		jQuery("blockquote").html("<span>no quote</span>");
	}

	jQuery("#button2").click(question6);



/**
 * Question 7:
 * When button 3 is clicked, change the text in the header's h1 tag to read "jQuery Ninja"
 */

	function question7(){
		jQuery("header h1").html("jQuery Ninja");
	}

	jQuery("#button3").click(question7);



/**
 * Question 8:
 * Have the following code execute when button 3 is clicked. Write a JavaScript comment with a description of what happened. 
 * jQuery(".city").attr("src", "http://lorempixel.com/g/500/400/food");
 */

	function question8(){
	jQuery(".city").attr("src", "http://lorempixel.com/g/500/400/food")
	}

	jQuery("#button3").click(question8);

/**
 * Question 9:
 * When button 3 is clicked, select all paragraphs on the page and change the color to blue and font to Georgia.
 * Bonus: Try to do this with only one jQuery call. jQuery("selector").css({attribute: "value", attribute: "value"});
 */

	function question9(){
	jQuery("p").css({"color": "blue", "font-family": "Georgia"});
	}

	jQuery("#button3").click(question9);



