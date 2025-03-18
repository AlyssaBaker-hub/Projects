document.addEventListener('DOMContentLoaded', () => {
    const feedsList = document.getElementById('feeds-list');

    // Function to create a feed item
    function createFeedItem(profilePic, author, username, content) {
        const li = document.createElement('li');
        li.className = 'feed-item';

        const img = document.createElement('img');
        img.src = profilePic;
        img.alt = 'Profile Picture';
        img.className = 'profile-pic';

        const div = document.createElement('div');
        div.className = 'feed-info';

        const h2 = document.createElement('h2');
        h2.className = 'feed-author';
        h2.textContent = author;

        const pUsername = document.createElement('p');
        pUsername.className = 'feed-username';
        pUsername.textContent = username;

        const pContent = document.createElement('p');
        pContent.className = 'feed-content';
        pContent.textContent = content;

        div.appendChild(h2);
        div.appendChild(pUsername);
        div.appendChild(pContent);

        li.appendChild(img);
        li.appendChild(div);

        return li;
    }

    // Function to add a feed item to the list
    function addFeedItem(profilePic, author, username, content) {
        const feedItem = createFeedItem(profilePic, author, username, content);
        feedsList.appendChild(feedItem);
    }

    // Example usage
    addFeedItem('profile-pic.jpg', 'John Doe', '@johndoe', 'This is an example of a feed content. It can be a text, image, or any other media.');
});