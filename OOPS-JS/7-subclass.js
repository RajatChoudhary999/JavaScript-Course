class Book {
	constructor(title, author, year) {
		this.title = title;
		this.author = author;
		this.year = year;
	}

	getSummary() {
		return `${this.title} was written by ${this.author} in ${this.year}`;
	}
}

//Magazine Subclass

class Magazine extends Book {
	constructor(title, author, year, month) {
		super(title, author, year); //use to call parent constructor
		this.month = month;
	}
}

const mag1 = new Magazine("Mag one", "jane", "2018", "Aug");
console.log(mag1.getSummary());
