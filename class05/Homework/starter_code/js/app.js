//allow DOM to load
$(document).ready(function() {
	
	//prevent submit button from refreshing
	$('#submit-btn').click(function() {
		event.preventDefault();
	
	//get the city value and correct for caps
	var city = $('#city-type').val();
	$('#city-type').val('');
	city = city.toLowerCase().trim();

	//if user inputs New York City
	if(city == 'new york city' || city == 'nyc' || city == 'new york') {
		$('body').attr('class','nyc');
	}

//had to look at the solution to get the above, figureed what was happening then updated the bottom ones

	//if user inputs San Francisco
	if(city == 'san francisco' || city == 'sf') {
		$('body').attr('class','sf');
	}

	//if user inputs Los Angeles
	if(city == 'los angeles' || city == 'la') {
		$('body').attr('class','la');
	}

	//if user inputs Austin
	if(city == 'austin') {
		$('body').attr('class','austin');
	}

	//if user inputs Sydney
	if(city == 'sydney') {
		$('body').attr('class','sydney');
	}

	});
});