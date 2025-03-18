// Function to create a new chat
function createChat(chatName, participants) {
    return {
        id: generateUniqueId(),
        name: chatName,
        participants: participants,
        messages: [],
        createdAt: new Date()
    };
}

// Function to generate a unique ID for the chat
function generateUniqueId() {
    return 'xxxx-xxxx-xxxx-xxxx'.replace(/[x]/g, function() {
        return (Math.random() * 16 | 0).toString(16);
    });
}

// Function to add a message to a chat
function addMessageToChat(chat, sender, messageText) {
    const message = {
        id: generateUniqueId(),
        sender: sender,
        text: messageText,
        timestamp: new Date()
    };
    chat.messages.push(message);
}

// Example usage
const chat = createChat('Friends Group', ['Alice', 'Bob', 'Charlie']);
addMessageToChat(chat, 'Alice', 'Hello everyone!');
console.log(chat);