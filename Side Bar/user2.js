// user2.js

// Function to toggle the sidebar visibility
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

// Function to handle navigation clicks (optional, if needed)
function navigateTo(page) {
    window.location.href = page;
}

// Add event listeners (if needed)
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('sidebar-toggle-btn');
    toggleBtn.addEventListener('click', toggleSidebar);
});