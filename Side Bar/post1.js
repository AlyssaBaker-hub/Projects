document.addEventListener('DOMContentLoaded', () => {
    const postTitle = document.querySelector('.post h1');
    const postContent = document.querySelector('.post p');
    const commentsList = document.querySelector('.comments ul');

    function updatePostTitle(newTitle) {
        postTitle.textContent = newTitle;
    }

    function updatePostContent(newContent) {
        postContent.textContent = newContent;
    }

    function addComment(commentText) {
        const newComment = document.createElement('li');
        newComment.textContent = commentText;
        commentsList.appendChild(newComment);
    }

    // Example usage:
    updatePostTitle('Updated Post Title');
    updatePostContent('This is the updated content of the post.');
    addComment('Comment 3: This is the third comment.');
});