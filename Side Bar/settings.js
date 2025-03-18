document.addEventListener('DOMContentLoaded', () => {
    const profileForm = document.querySelector('#profile-settings form');
    const privacyForm = document.querySelector('#privacy-settings form');
    const notificationForm = document.querySelector('#notification-settings form');

    profileForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.querySelector('#username').value;
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        console.log('Profile Settings:', { username, email, password });
        // Add your code to save profile settings
    });

    privacyForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const profileVisibility = document.querySelector('#profile-visibility').value;
        const messageRequests = document.querySelector('#message-requests').value;
        console.log('Privacy Settings:', { profileVisibility, messageRequests });
        // Add your code to save privacy settings
    });

    notificationForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const emailNotifications = document.querySelector('#email-notifications').checked;
        const smsNotifications = document.querySelector('#sms-notifications').checked;
        console.log('Notification Settings:', { emailNotifications, smsNotifications });
        // Add your code to save notification settings
    });
});