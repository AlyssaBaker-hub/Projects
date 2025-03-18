// Function to add a new post item to the list
function addPostItem(title, content, link) {
    const postsContainer = document.querySelector('.posts-container');
    const postItem = document.createElement('article');
    postItem.classList.add('post-item');
    postItem.innerHTML = `
        <h4>${title}</h4>
        <p>${content}</p>
        <a href="${link}">Read More</a>
    `;
    postsContainer.appendChild(postItem);
}

// Function to add a new user item to the list
function addUserItem(name, bio, link) {
    const usersContainer = document.querySelector('.users-container');
    const userItem = document.createElement('article');
    userItem.classList.add('user-item');
    userItem.innerHTML = `
        <h4>${name}</h4>
        <p>${bio}</p>
        <a href="${link}">View Profile</a>
    `;
    usersContainer.appendChild(userItem);
}

// Function to clear all post items from the list
function clearPostItems() {
    const postsContainer = document.querySelector('.posts-container');
    postsContainer.innerHTML = '<h3>Recent Posts</h3>';
}

// Function to clear all user items from the list
function clearUserItems() {
    const usersContainer = document.querySelector('.users-container');
    usersContainer.innerHTML = '<h3>Users</h3>';
}

// Example usage
document.addEventListener('DOMContentLoaded', () => {
    addPostItem('Post Title 1', 'Post content goes here...', 'post1.html');
    addPostItem('Post Title 2', 'Post content goes here...', 'post2.html');
    addUserItem('User Name 1', 'Short bio or description...', 'user1.html');
    addUserItem('User Name 2', 'Short bio or description...', 'user2.html');
});