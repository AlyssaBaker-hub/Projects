// Function to get all notifications
function getAllNotifications() {
    // This should return an array of notification objects
    // Each notification object should have a 'mentions' property which is an array of mentioned users
    return [
        { id: 1, message: "User1 mentioned you", mentions: ["User2"] },
        { id: 2, message: "User3 mentioned you", mentions: ["User4", "User5"] },
        // Add more notifications as needed
    ];
}

// Function to get notifications where a specific user is mentioned
function getMentionsForUser(username) {
    const notifications = getAllNotifications();
    return notifications.filter(notification => notification.mentions.includes(username));
}

// Example usage
const userMentions = getMentionsForUser("User2");
console.log(userMentions);