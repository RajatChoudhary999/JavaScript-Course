class Book {
	constructor(title, author, year) {
		this.title = title;
		this.author = author;
		this.year = year;
	}

	getSummary() {
		return `${this.title} was written by ${this.author} in ${this.year}`;
	}

	revise(newYear) {
		this.year = newYear;
	}

	static topBookStore() {
		return "Barnes & Noble";
	}
}

const book1 = new Book("Book One", "Jane Doe", "2018");

// console.log(book1.getSummary());
// book1.revise("2013");
// console.log(book1.getSummary());

console.log(Book.topBookStore());
