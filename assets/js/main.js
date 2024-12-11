document.addEventListener('DOMContentLoaded', function() {
    // notification toggler
    const notificationIcon = document.getElementById('notification_icon')
    const notificationContainer = document.getElementById('notifications_container')
    notificationIcon.addEventListener('click', () => {
        notificationContainer.classList.toggle('show')
    })
});


