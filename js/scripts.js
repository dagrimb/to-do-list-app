
function newItem() {

//Add new item to list of items. Set li variable to li nodes. Set new variable = to the value of 
// id="input" in the form element with a class of "toDoList". Append the value of the input to the list

let li = $('<li></li>');
let inputValue = $('#input').val();
li.append(inputValue);

//Create conditional whereby user receives message that they need to write something if they click "add"
//after not entering anything. If user does enter something, attach what is entered to ordered list
//element "list"

if (inputValue === '') {
    alert("You must write something!");
} else {
    $('#list').append(li);
}

}