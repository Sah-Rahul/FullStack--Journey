// Real API using Promise Chaining

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(post => {
        console.log("Post Title:", post.title);
        return fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
    })
    .then(response => response.json())
    .then(user => {
        console.log("Author Name:", user.name);
        console.log("Author Email:", user.email);
    })
    .catch(error => console.log("Error:", error));
