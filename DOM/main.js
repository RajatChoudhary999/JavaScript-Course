var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

//Form submit event
form.addEventListener("submit", addItem);

//Delete Event
itemList.addEventListener("click", removeItem);

//Filter Event
filter.addEventListener("keyup", filterItems);

//Add item
function addItem(e) {
	e.preventDefault();

	//Get input Value
	var newItem = document.getElementById("item").value;

	//Create new li element
	var li = document.createElement("li");
	//Add class
	li.className = "list-group-item";
	console.log(li);

	//Add text Node with input value
	li.appendChild(document.createTextNode(newItem));

	//Create del button element
	var deleteBtn = document.createElement("button");

	//Add Class to delete Button
	deleteBtn.className = "btn btn-danger btn-sm float-right delete";

	//Append text node
	deleteBtn.appendChild(document.createTextNode("X"));

	//Append button to li
	li.appendChild(deleteBtn);

	//Append li to list
	itemList.appendChild(li);
}

//Remove item
function removeItem(e) {
	//Coz we want delete event to trigger when red button is clicked
	if (e.target.classList.contains("delete")) {
		if (confirm("Are You Sure?")) {
			var li = e.target.parentElement;
			itemList.removeChild(li);
		}
	}
}

//Filter Items
function filterItems(e) {
	//convert text to lowercase
	var text = e.target.value.toLowerCase();

	//Get All List Items
	var items = itemList.getElementsByTagName("li");
	//Convert to an Array
	Array.from(items).forEach(function (item) {
		var itemName = item.firstChild.textContent;
		if (itemName.toLowerCase().indexOf(text) != -1) {
			item.style.display = "block";
		} else {
			item.style.display = "none";
		}
	});
}
