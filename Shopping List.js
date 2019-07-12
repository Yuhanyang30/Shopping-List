var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

// check length of field
function inputLength() {
	return input.value.length;
}

// create new list
function createListElement() {
	//create li element
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	//create delete element
	var delbtn = document.createElement("button");
	delbtn.appendChild(document.createTextNode("X"));
	li.appendChild(delbtn);
	delbtn.onclick = removeItem;
}
// add list after click
function addListAfterClick() {
	if(inputLength() > 0) {
      createListElement();
	}
}
// add list after keypress
function addListAfterKeypress(event) {
	if(inputLength() > 0 && event.which === 13){
      createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

// delete list after click delete button
function removeItem(evt){
	evt.target.parentNode.remove();
}
