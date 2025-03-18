// Function to calculate the average number of likes per post
function calculateAverageLikes(posts) {
    const totalLikes = posts.reduce((acc, post) => acc + post.likes, 0);
    return totalLikes / posts.length;
}

// Function to find the post with the maximum number of likes
function findMaxLikesPost(posts) {
    return posts.reduce((maxPost, post) => post.likes > maxPost.likes ? post : maxPost, posts[0]);
}

// Function to find the post with the minimum number of likes
function findMinLikesPost(posts) {
    return posts.reduce((minPost, post) => post.likes < minPost.likes ? post : minPost, posts[0]);
}

// Function to calculate the total number of likes
function calculateTotalLikes(posts) {
    return posts.reduce((acc, post) => acc + post.likes, 0);
}

// Function to calculate the median number of likes per post
function calculateMedianLikes(posts) {
    const likes = posts.map(post => post.likes).sort((a, b) => a - b);
    const mid = Math.floor(likes.length / 2);
    return likes.length % 2 !== 0 ? likes[mid] : (likes[mid - 1] + likes[mid]) / 2;
}

// Function to calculate the standard deviation of likes per post
function calculateLikesStandardDeviation(posts) {
    const avgLikes = calculateAverageLikes(posts);
    const squareDiffs = posts.map(post => Math.pow(post.likes - avgLikes, 2));
    const avgSquareDiff = squareDiffs.reduce((acc, diff) => acc + diff, 0) / posts.length;
    return Math.sqrt(avgSquareDiff);
}