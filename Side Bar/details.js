document.addEventListener('DOMContentLoaded', function() {
    const stats = {
        totalUsers: 10000,
        activeUsers: 1234,
        newUsersThisMonth: 300,
        engagementRate: 5.2,
        avgSessionDuration: '3m 45s',
        bounceRate: 40
    };

    function updateStats() {
        document.querySelector('.stats').innerHTML = `
            <div>Total Users: ${stats.totalUsers}</div>
            <div>Active Users: ${stats.activeUsers}</div>
            <div>New Users This Month: ${stats.newUsersThisMonth}</div>
            <div>Engagement Rate: ${stats.engagementRate}%</div>
            <div>Average Session Duration: ${stats.avgSessionDuration}</div>
            <div>Bounce Rate: ${stats.bounceRate}%</div>
            <a href="dashboard.html" class="dashboard-link">Back to Dashboard</a>
        `;
    }

    updateStats();
});