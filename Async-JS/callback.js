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

function createPost(post, callback) {
	setTimeout(() => {
		posts.push(post);
		callback();
	}, 2000);
}

createPost({ title: "Post Three", body: "This is post Three" }, getPosts);
