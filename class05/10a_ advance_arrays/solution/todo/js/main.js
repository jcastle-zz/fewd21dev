/*

TO DO LIST

Create a "to do" list that does the following:

1. Takes the value from the input that contains the ID 
   #newItem.
2. Add (append) the item to a list item in the unodered 
   list that contains the ID #todos.
Note: You will need to templatize this by storing the HTML 
   string in a variable.
Hint: <li><div class=listBox><label><input type="checkbox" name="todo-check" id="todo-check"> Done? <span class="todo-content">' + newItem + '</span></label></div></li>
3. Reset the value of ID #newItem.
4. Create a count and show the number of "to do" items on 
   the page.


BONUS:
1. Add a 'delete' button for each individual todo list item
2. Change the todo content to a label that will trigger the item's checkbox
  - Hint: you'll have to give each todo item's checkbox a unique id

*/

//Create a function to count the number of to do items.
function count (){
  //Variable to store total number of list items.
  var allItems = $('li').length;
  //Variable to store total number of checked items.
  var checkedItems = $('#todo-check:checked').length;
  //Variable to store value when items are checked.
  var todosLeft = allItems - checkedItems;
  //Update number of items left.
  $('#count').html(todosLeft);
};

//Add new item on form submit.
$('#new').submit(function(event){
  //Prevent page refresh.
  event.preventDefault();
  //Grab value of form input & save into a variable.
  var newItem = $('#newItem').val();
  //Create variable to store delete button HTML string.
  var delButton = '<button id="delete" type="button">Delete</button>';
  //Combine newItem and delButton into a HTML list item string to add onto page.
  var todo = '<li><div class=listBox><label><input type="checkbox" name="todo-check" id="todo-check">&nbsp;&nbsp;Done?  <span class="todo-content">' + newItem + '</span></label></div>' + delButton + '</li>';

  //Take the new list item and append it to the ul. 
  $('#todos').append(todo);
  
  //Run the count function to update the count.
  count();

  //Clear out the text input.
  $('#newItem').val('');
});

//Event listener for click on #todo-check.
$('body').on('click', '#todo-check' , count);

//Event listener for click on #delete.
$('body').on('click', '#delete',function(){
  //Remove the entier li for the deleted to-do item.
  $(this).parents('li').remove();
  //Update count.
  count();
});

//Listen for click on #clear.
$('#clear').click(function(){
  //Remove all list items.
  $('li').remove();
  //Reset #count to zero.
  $('#count').html('0');
});

//Listen for click on #clearCompleted.
$('#clearCompleted').click(function(){
  //Remove checked list items.
  $('#todo-check:checked').parent().remove();
});
