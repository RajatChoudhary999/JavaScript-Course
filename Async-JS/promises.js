const posts = [
	{
		title: "PostOne",
		body: "This is post one",
	},
	{
		title: "PostTwo",
		body: "This is post Two",
	},
];

function getPosts() {
	setTimeout(() => {
		let output = "";
		posts.forEach((post) => {
			console.log(post);
		});
	}, 1000);
}

function createPost(post) {
	return new Promise((res, rej) => {
		setTimeout(() => {
			posts.push(post);

			const error = false; //true gives error

			if (!error) {
				res();
			} else {
				rej("Error:Something went wrong");
			}
		}, 2000);
	});
}

// createPost({ title: "Post Three", body: "This is post three" })
// 	.then(getPosts)
// 	.catch((err) => console.log(err));

//Async /Await

async function init() {
	await createPost({ title: "Post Three", body: "This is post three" });
	getPosts();
}

init();

//Promise .all

// const promise1 = Promise.resolve("Hello World");
// const promise2 = 10;
// const promise3 = new Promise((res, rej) => setTimeout(res, 200, "Goodbye"));
// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
// 	(res) => res.json()
// );

// Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
// 	console.log(values)
// );