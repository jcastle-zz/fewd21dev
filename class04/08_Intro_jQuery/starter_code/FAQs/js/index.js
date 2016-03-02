$( document ).ready(function() {
    console.log( "ready!" );

function toggleAnswer1(){
	$('answer1').toggleAnswer1();
}
function toggleAnswer2(){
	$('answer2').toggleAnswer2();
}
function toggleAnswer3(){
	$('answer3').toggleAnswer3();
}

$('#answer1').hide();
$('#answer2').hide();
$('#answer3').hide();

$('question1').click(toggleAnswer1);
$('question2').click(toggleAnswer2);
$('question3').click(toggleAnswer3);

});