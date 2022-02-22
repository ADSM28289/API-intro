function getData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
};

function getDetails() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => getUsers(data))
};
function getUsers(data) {
    for (const user of data) {
        const ul = document.getElementById('users');
        const li = document.createElement('li');
        li.innerText = `name: ${user.name} 
        email: ${user.email}
        
        `;

        ul.appendChild(li);

    }
    // console.log(data)
};
function getPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
}

function displayPosts(posts) {
    const postsContainer = document.getElementById('posts');
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `;
        postsContainer.appendChild(div);
    };
};
getPost(); 