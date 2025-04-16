const timer = document.getElementById("timer");

const updateTimer = () => {
    const date = new Date();
    var hours = 17 - date.getHours();
    var minutes = 59 - date.getMinutes();
    var seconds = 59 - date.getSeconds();
    var percentage = (hours * 60 + minutes + seconds / 60) / (12 * 60);
    timerContainer.style.setProperty("--i", `${percentage * 100}%`);
    if (hours < 10) {
        hours = `0${hours}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    timer.textContent = `${hours}:${minutes}:${seconds}`;
    changeAIndex();
};

setInterval(updateTimer, 1000);