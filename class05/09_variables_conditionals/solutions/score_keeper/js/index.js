var total = 0;

jQuery('#zero').click(zero);
jQuery('#add5').click(add5);
jQuery('#add10').click(add10);
jQuery('#sub1').click(sub1);

function zero() {
  total = 0;
  jQuery('#result').html(total);
}

function add5() {
  total = total + 5;
  
  jQuery('#result').html(total);
}

function add10() {
  total = total + 10;
 
  jQuery('#result').html(total);
}

function sub1() {
  total = total - 1;
  
  jQuery('#result').html(total);
}