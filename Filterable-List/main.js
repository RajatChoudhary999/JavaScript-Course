let filterInput = document.getElementById("filterInput");
filterInput.addEventListener("keyup", filterNames);

function filterNames() {
	//get value of input
	let filterValue = document
		.getElementById("filterInput")
		.value.toLocaleUpperCase();
	//Get names ul
	let ul = document.getElementById("names");

	//Get list from ul
	let li = ul.querySelectorAll("li.collection-item");

	//Loop through collection-item List
	for (let i = 0; i < li.length; i++) {
		let a = li[i].getElementsByTagName("a")[0];
		//if matched
		if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
			li[i].style.display = "";
		} else {
			li[i].style.display = "none";
		}
	}
}
