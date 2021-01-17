
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

//Enable user to cross item out on list: create function and, inside it, attach a toggleClass of "strike"
//to the item.

function crossOut() {
    li.toggleClass("strike");
}

//Use previously created crossOut function to cross-out item when user double-clicks on it

li.on("dblclick", function crossOut() {
    li.toggleClass("strike");
});

//Create variable for cross-out button and assign it to crossOutButton elements
let crossOutButton = $('<crossOutButton></crossOutButton>');
//Create and attach X mark-out to the cross-out button
crossOutButton.append(document.createTextNode('X'));
//Append the cross-out button to the list item
li.append(crossOutButton);

//Attach click event to the cross-out button that deletes the item on a click
crossOutButton.on("click", deleteListItem);
function deleteListItem() {
    li.addClass("delete")
    }

    //Add ability to sort items in list
    $('#list').sortable();

}






