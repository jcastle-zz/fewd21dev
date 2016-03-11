// total will store the running total, starting at 0
var total = 0;



// `enter()` reads the user's input, and updates the receipt
function enter(event) {
  
  // Set up variables to use
  var entry, currency;
  
  // Prevent form submission
  event.preventDefault();
  
  // Read the user input
  entry = jQuery('#newEntry').val();
  
  // Convert to decimal
  entry = parseFloat(entry);
  
  // Convert to currency
  currency = currencyFormat(entry);
  
  // Add line item to table
  jQuery('#entries').append('<tr><td></td><td>' + currency + '</td></tr>');

// Update the running total
total = total + entry;

// Print the updated total with proper currency formatting
jQuery('#total').html(currencyFormat(total));

// Clear out the input field, ready for next value
jQuery('#newEntry').val('');

}

// Use this to convert a number to U.S. currency format
function currencyFormat(number) {

  // Convert the number to decimal
  var currency = parseFloat(number);

  // Round to 2 decimal places
  currency = currency.toFixed(2);

  // Add the $ before the number
  currency = '$' + currency;

  // Send back the result
  return currency;

}


// When the user submits the form, run the `enter` function
jQuery(document).ready(function{
  jQuery('#entry').submit(enter);
});