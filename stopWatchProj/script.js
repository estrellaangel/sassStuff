// $(function () {
    
//     class timeStructure {
//         constructor() {
//             this.ms = 0;
//             this.sec = 0;
//             this.min = 0;
//             // this.baseSystem = baseSystem,
//             // this.interval = interval,
//             // this.currentTime = 0,
//             // this.i = 0
//             this.running = false;
//         }

//         updateTime() {
//             this.running = true;
//             this.interval = setInterval(function () {
//                 ms++;
//                 if (ms == 100) {sec++; ms = 0;}
//                 if (sec == 60) {min++; sec = 0;}
//                 milliseconds.innerHTML = ms;
//                 seconds.innerHTML = sec;
//                 minutes.innerHTML = min;
//             }, 10)
//         }

//         pauseResumeTime() {
//             if (running) {
//                 interval = clearInterval();
//             } else {
//                 interval = setInterval(function () {
//                     ms++;
//                     if (ms == 100) sec++; ms = 0;
//                     if (sec == 60) min++; sec = 0;
//                     milliseconds.innerHTML = `${ms}`;
//                     seconds.innerHTML = `${sec}`;
//                     minutes.innerHTML = `${min}`;
//                 }, 1)
//             }
//         }


//         lapClearTime() {
//             if (running == false) {
//                 interval = clearInterval();
//                 ms = 0;
//                 sec = 0;
//                 min = 0;
//                 milliseconds.innerHTML = `${ms}`;
//                 seconds.innerHTML = `${sec}`;
//                 minutes.innerHTML = `${min}`;
//             } else {
//                 lapMin.innerHTML = ms;
//                 lapSec.innerHTML = sec;
//                 lapMin.innerHTML = min;
//             }
//         }
//     }

//     let interval;
//     let time = new timeStructure();
//     time.updateTime();

//     lapBtn.on(`click`, function () { time.lapClearTime() });
//     pauseBtn.on('click', function () { time.pauseResumeTime() })

// })

$(function(){

let interval;
let running = false;
let ms = 0;
let sec = 0;
let min = 0;

function updateTime() {
    running = true;
    interval = setInterval(function () {
        ms++;
        if (ms == 100) {sec++; ms = 0;}
        if (sec == 60) {min++; sec = 0;}
        milliseconds.innerHTML = ms;
        seconds.innerHTML = sec;
        minutes.innerHTML = min;
    }, 10)
}

updateTime();

function pauseResumeTime() {
    if (running) {
        clearInterval(interval);
        running = false;
        pauseBtn.innerHTML = 'Resume';
        lapBtn.innerHTML = 'Reset';
    } else {
        updateTime();
        pauseBtn.innerHTML = 'Pause'
        lapBtn.innerHTML = 'Lap';
    }
}

$(`#pauseBtn`).on('click', pauseResumeTime)

function lapClearTime() {
    if (running == false) {
        clearInterval(interval);
        ms = 0;
        sec = 0;
        min = 0;
        milliseconds.innerHTML = ms;
        seconds.innerHTML = sec;
        minutes.innerHTML = min;
        lapMil.innerHTML = ms;
        lapSec.innerHTML = sec;
        lapMin.innerHTML = min;
        lapBtn.innerHTML = 'Lap';
        pauseBtn.innerHTML = `Start`;
    } else {
        lapMil.innerHTML = ms;
        lapSec.innerHTML = sec;
        lapMin.innerHTML = min;
    }
}
$('#lapBtn').on('click', lapClearTime)
    })
