// Real API using async/await

async function fetchPostAndAuthor() {
    try {
        const postResponse = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const post = await postResponse.json();
        console.log("Post Title:", post.title);

        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
        const user = await userResponse.json();
        console.log("Author Name:", user.name);
        console.log("Author Email:", user.email);
    } catch (error) {
        console.log("Error:", error);
    }
}

fetchPostAndAuthor();
