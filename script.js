const timer = document.getElementById("timer");
const timerContainer = document.getElementById("timer-container");

// const data = {
//     0: "06:00",
//     1: "09:00",
//     2: "10:00",
//     3: "11:30",
//     4: "12:30",
//     5: "15:00",
//     6: "16:00",
//     7: "17:00",
//     8: "17:45",
//     9: "18:00",
// }
const data = {
    0: "22:22",
    1: "22:23",
    2: "22:24",
    3: "22:25",
    4: "22:26",
    5: "22:27",
    6: "22:28",
    7: "22:29",
    8: "22:30",
    9: "22:31",
}


var getUpNext = (time) => {
    var upNext = 0;
    if (time > data["0"]) {
        upNext = 0;
    }
    if (time > data["1"]) {
        upNext = 1;
    }
    if (time > data["2"]) {
        upNext = 2;
    }
    if (time > data["3"]) {
        upNext = 3;
    }
    if (time > data["4"]) {
        upNext = 4;
    }
    if (time > data["5"]) {
        upNext = 5;
    }
    if (time > data["6"]) {
        upNext = 6;
    }
    if (time > data["7"]) {
        upNext = 7;
    }
    if (time > data["8"]) {
        upNext = 8;
    }
    if (time > data["9"]) {
        upNext = 9;    
    }
    return upNext;
}


var changeAIndex = () => {
    const date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    if (hour < 10) {
        hour = `0${hour}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    const time = `${hour}:${minutes}`;
    const upNext = getUpNext(time);
    document.querySelectorAll('.agenda').forEach(element => {
       element.style.setProperty("--ai", `${ element.style.getPropertyValue("--oi") - upNext }`); 
    });
}


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