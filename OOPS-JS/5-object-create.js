//Object  Of Protos
const bookProtos = {
	getSummary: function () {
		return `${this.title} was written by ${this.author} in ${this.year}`;
	},

	getAge: () => {
		const years = new Date().getFullYear() - this.year;
		if (years === 0) {
			return "Book has just Launched";
		} else {
			return `${this.title} is ${years} years old`;
		}
	},
};

//Create Object
const book1 = Object.create(bookProtos);
book1.title = "Book One";
book1.author = "Jane Doe";
book1.year = "2018";

console.log(book1);
