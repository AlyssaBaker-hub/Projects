// view-mentions.js

// Sample data for mentions
const mentions = [
    { id: 1, user: 'JohnDoe', message: 'Hey @Alyssa, check this out!', timestamp: '2023-10-01T10:00:00Z' },
    { id: 2, user: 'JaneSmith', message: '@Alyssa, you might find this interesting.', timestamp: '2023-10-02T12:30:00Z' },
    { id: 3, user: 'MikeBrown', message: 'Great job @Alyssa!', timestamp: '2023-10-03T14:45:00Z' }
];

// Function to format the timestamp
function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString();
}

// Function to render mentions
function renderMentions(mentions) {
    const mentionsContainer = document.getElementById('mentions-container');
    mentionsContainer.innerHTML = '';

    mentions.forEach(mention => {
        const mentionElement = document.createElement('div');
        mentionElement.className = 'mention';

        const userElement = document.createElement('span');
        userElement.className = 'mention-user';
        userElement.textContent = mention.user;

        const messageElement = document.createElement('span');
        messageElement.className = 'mention-message';
        messageElement.textContent = mention.message;

        const timestampElement = document.createElement('span');
        timestampElement.className = 'mention-timestamp';
        timestampElement.textContent = formatTimestamp(mention.timestamp);

        mentionElement.appendChild(userElement);
        mentionElement.appendChild(messageElement);
        mentionElement.appendChild(timestampElement);

        mentionsContainer.appendChild(mentionElement);
    });
}

// Call the renderMentions function to display the mentions
document.addEventListener('DOMContentLoaded', () => {
    renderMentions(mentions);
});