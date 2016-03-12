//create global variables as an array of cities available for user input
var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

//allow DOM to load before executing 
$(document).ready(function() {

  //increment through the array based on user input for #city-type
  for(i=0;i<cities.length;i++) {
    $('#city-type').append('<option value="' + cities[i] + '">' + cities[i] + '</option>');
  }
  
  //function for changing the city image based on user input into the form
  $('form').on('change', '#city-type',function(){
    
    //local variable for the #city-type ID
    var city = $('#city-type').val();
    
    //determing the proper city image to display in the body
    if(city == 'NYC') {
      $('body').attr('class','nyc');
    }
    else if (city == 'SF') {
      $('body').attr('class','sf');
    }
    else if (city == 'LA') {
      $('body').attr('class','la');
    }
    else if (city == 'ATX') {
      $('body').attr('class','austin');
    }
    else if (city == 'SYD') {
      $('body').attr('class','sydney');
    }
  });
});