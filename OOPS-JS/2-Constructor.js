//Constructor

function Book(title, author, year) {
	this.title = title;
	this.author = author;
	this.year = year;
	getSummary = function () {
		return `${this.title} was written by ${this.author} in ${this.year}`;
	};
}

//Instantiate an Object
const book1 = new Book("Book1", "John Doe", "2013");
console.log(book1);
