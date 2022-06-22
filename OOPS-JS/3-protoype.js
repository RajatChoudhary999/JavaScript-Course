//Constructor

function Book(title, author, year) {
	this.title = title;
	this.author = author;
	this.year = year;
}

//GetSummary
Book.prototype.getSummary = function () {
	return `${this.title} was written by ${this.author} in ${this.year}`;
};

//Get Age
Book.prototype.getAge = function () {
	const years = new Date().getFullYear() - this.year;
	if (years === 0) {
		return "Book has just Launched";
	} else {
		return `${this.title} is ${years} years old`;
	}
};

//Revise Change year
Book.prototype.revise = function (newYear) {
	this.year = newYear;
	this.revised = true;
};

//Instantiate an Object
const book1 = new Book("Book1", "John Doe", "2022");

console.log(book1);
book1.revise("2018");
console.log(book1);
