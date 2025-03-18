document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.create-post form');
    form.addEventListener('submit', handleFormSubmit);
});

function handleFormSubmit(event) {
    event.preventDefault();
    
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;
    
    if (title && content) {
        addNewPost(title, content);
        form.reset();
    } else {
        alert('Please fill in both the title and content.');
    }
}

function addNewPost(title, content) {
    const postSection = document.querySelector('.community-posts');
    
    const newPost = document.createElement('article');
    newPost.classList.add('post');
    
    const postTitle = document.createElement('h3');
    postTitle.textContent = title;
    
    const postContent = document.createElement('p');
    postContent.textContent = content;
    
    const postDate = document.createElement('p');
    postDate.innerHTML = `<small>Posted by User on ${new Date().toISOString().split('T')[0]}</small>`;
    
    newPost.appendChild(postTitle);
    newPost.appendChild(postContent);
    newPost.appendChild(postDate);
    
    postSection.appendChild(newPost);
}