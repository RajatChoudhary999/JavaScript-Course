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

function Magazine(title, author, year, month) {
	Book.call(this, title, author, year);
	this.month = month;
}

//Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

//Instantiate Magazine Object
const mag1 = new Magazine("Mag One", "Rajat", "2017", "JAN");

//Use Magazine Constructor
Magazine.prototype.constructor = Magazine;

console.log(mag1);
