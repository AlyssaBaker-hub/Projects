// Function to create a new list
function createList(name, description) {
    return {
        id: generateUniqueId(),
        name: name,
        description: description,
        items: []
    };
}

// Function to add an item to a list
function addItemToList(list, item) {
    list.items.push({
        id: generateUniqueId(),
        content: item
    });
}

// Function to remove an item from a list
function removeItemFromList(list, itemId) {
    list.items = list.items.filter(item => item.id !== itemId);
}

// Function to generate a unique ID (simple implementation)
function generateUniqueId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

// Example usage
let myList = createList('My Favorite Posts', 'A list of my favorite social media posts');
addItemToList(myList, 'Post 1');
addItemToList(myList, 'Post 2');
console.log(myList);

removeItemFromList(myList, myList.items[0].id);
console.log(myList);