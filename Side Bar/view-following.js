// Function to fetch the list of users the current user is following
async function fetchFollowingList(userId) {
    try {
        const response = await fetch(`/api/following/${userId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching following list:', error);
    }
}

// Function to render the following list in the sidebar
function renderFollowingList(followingList) {
    const followingContainer = document.querySelector('.following-list');
    followingContainer.innerHTML = ''; // Clear any existing content

    followingList.forEach(user => {
        const userItem = document.createElement('li');
        userItem.className = 'following-item';

        const profilePic = document.createElement('img');
        profilePic.src = user.profilePicture || 'default-profile.jpg'; // Use a default profile picture if none is provided
        profilePic.alt = 'Profile Picture';
        profilePic.className = 'profile-pic';

        const userInfo = document.createElement('div');
        userInfo.className = 'user-info';

        const userName = document.createElement('h2');
        userName.textContent = user.name;

        const userBio = document.createElement('p');
        userBio.textContent = user.bio || 'Bio or additional info'; // Use a default bio if none is provided

        const unfollowButton = document.createElement('button');
        unfollowButton.className = 'unfollow-btn';
        unfollowButton.textContent = 'Unfollow';
        unfollowButton.addEventListener('click', () => {
            // Add unfollow functionality here
            console.log(`Unfollow ${user.name}`);
        });

        userInfo.appendChild(userName);
        userInfo.appendChild(userBio);
        userItem.appendChild(profilePic);
        userItem.appendChild(userInfo);
        userItem.appendChild(unfollowButton);
        followingContainer.appendChild(userItem);
    });
}

// Function to initialize the following list view
async function initFollowingView(userId) {
    const followingList = await fetchFollowingList(userId);
    renderFollowingList(followingList);
}

// Example usage: Initialize the following view for a specific user
document.addEventListener('DOMContentLoaded', () => {
    const userId = 'exampleUserId'; // Replace with actual user ID
    initFollowingView(userId);
});