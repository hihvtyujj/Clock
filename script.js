// Function to format time as HH:MM:SS
function formatTime(hour, minute, second) {
    return `${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second}`;
}

// Function to update the clock every second
function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const timeString = formatTime(hours, minutes, seconds);
    document.getElementById('time').textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial clock update
updateClock();
