// Function to initialize the chat button, close button, and send button
function initializeChatButtons() {
    const chatButton = document.getElementById('chatButton');
    const closeButton = document.getElementById('closeButton');
    const sendButton = document.getElementById('sendButton');
    
    if (chatButton) {
        chatButton.addEventListener('click', openChatWindow);
    }
    
    if (closeButton) {
        closeButton.addEventListener('click', closeChatWindow);
    }

    if (sendButton) {
        sendButton.addEventListener('click', sendChatMessage);
    }
}

// Function to open the chat window
function openChatWindow() {
    const chatWindow = document.getElementById('chatWindow');
    if (chatWindow) {
        chatWindow.style.display = 'block';
    }
}

// Function to close the chat window
function closeChatWindow() {
    const chatWindow = document.getElementById('chatWindow');
    if (chatWindow) {
        chatWindow.style.display = 'none';
    }
}

// Function to send a chat message
function sendChatMessage() {
    const messageInput = document.getElementById('messageInput');
    const chatMessages = document.getElementById('chatMessages');
    const userName = document.getElementById('userName').textContent; // Assuming userName is displayed somewhere in the DOM
    const recipientName = document.getElementById('recipientName').textContent; // Assuming recipientName is displayed somewhere in the DOM
    if (messageInput && chatMessages && userName && recipientName) {
        const message = messageInput.value;
        if (message.trim() !== '') {
            const messageElement = document.createElement('div');
            messageElement.className = 'chat-message';

            const userElement = document.createElement('span');
            userElement.className = 'chat-user';
            userElement.textContent = userName;

            const textElement = document.createElement('span');
            textElement.className = 'chat-text';
            textElement.textContent = message;

            const timeElement = document.createElement('span');
            timeElement.className = 'chat-time';
            timeElement.textContent = new Date().toLocaleTimeString();

            messageElement.appendChild(userElement);
            messageElement.appendChild(textElement);
            messageElement.appendChild(timeElement);

            chatMessages.appendChild(messageElement);
            messageInput.value = '';

            // Send the message to the recipient
            sendMessageToUser(userName, recipientName, message);
        }
    }
}

// Function to send a message to another user
function sendMessageToUser(sender, recipient, message) {
    // Example API call to send the message to the server
    fetch('/api/sendMessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            sender: sender,
            recipient: recipient,
            message: message,
            timestamp: new Date().toISOString()
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Message sent:', data);
    })
    .catch(error => {
        console.error('Error sending message:', error);
    });
}

// Initialize the chat button, close button, and send button when the document is ready
document.addEventListener('DOMContentLoaded', initializeChatButtons);