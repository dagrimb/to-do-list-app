
function newItem() {

//Add new item to list of items. Set li variable to li nodes. Set new variable = to the value of 
// id="input" in the form element with a class of "toDoList". Append the value of the input to the list

let li = $('<li></li>');
let inputValue = $('#input').val();
li.append(inputValue);



}