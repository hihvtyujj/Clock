// Stopwatch variables
let stopwatchInterval;
let stopwatchTime = 0; // in seconds
let stopwatchRunning = false;

function startStopwatch() {
    if (!stopwatchRunning) {
        stopwatchRunning = true;
        document.getElementById('startStopwatch').textContent = 'Stop';
        stopwatchInterval = setInterval(function() {
            stopwatchTime++;
            displayStopwatch();
        }, 1000);
    } else {
        stopwatchRunning = false;
        clearInterval(stopwatchInterval);
        document.getElementById('startStopwatch').textContent = 'Start';
    }
}

function resetStopwatch() {
    stopwatchTime = 0;
    displayStopwatch();
    if (stopwatchRunning) {
        clearInterval(stopwatchInterval);
        document.getElementById('startStopwatch').textContent = 'Start';
        stopwatchRunning = false;
    }
}

function displayStopwatch() {
    let hours = Math.floor(stopwatchTime / 3600);
    let minutes = Math.floor((stopwatchTime % 3600) / 60);
    let seconds = stopwatchTime % 60;
    document.getElementById('stopwatch-display').textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

// Timer variables
let timerInterval;
let timerTime = 0;
let timerRunning = false;

function startTimer() {
    if (!timerRunning) {
        let inputTime = document.getElementById('timer-input').value;
        if (inputTime && inputTime > 0) {
            timerTime = parseInt(inputTime);
            timerRunning = true;
            document.getElementById('startTimer').textContent = 'Stop Timer';
            timerInterval = setInterval(function() {
                if (timerTime > 0) {
                    timerTime--;
                    displayTimer();
                } else {
                    clearInterval(timerInterval);
                    alert("Time's up!");
                    resetTimer();
                }
            }, 1000);
        } else {
            alert('Please enter a valid time.');
        }
    } else {
        timerRunning = false;
        clearInterval(timerInterval);
        document.getElementById('startTimer').textContent = 'Start Timer';
    }
}

function resetTimer() {
    timerTime = 0;
    displayTimer();
    if (timerRunning) {
        clearInterval(timerInterval);
        document.getElementById('startTimer').textContent = 'Start Timer';
        timerRunning = false;
    }
}

function displayTimer() {
    let minutes = Math.floor(timerTime / 60);
    let seconds = timerTime % 60;
    document.getElementById('timer-display').textContent = `${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}
