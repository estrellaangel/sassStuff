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
        if(ms < 10){
            milliseconds.innerHTML = `: 0${ms}`;
        }else{
            milliseconds.innerHTML = `: ${ms}`;
        }
        if(sec < 10){
            seconds.innerHTML = `: 0${sec}`;
        }else{
            seconds.innerHTML = `: ${sec}`;
        }if(min < 10){
            minutes.innerHTML = `0${min}`;
        }else{
            minutes.innerHTML = `${min}`;
        }
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
        milliseconds.innerHTML = `: 00`;
        seconds.innerHTML = `: 00`;
        minutes.innerHTML = '00';
        lapMil.innerHTML = `: 00`;
        lapSec.innerHTML = `: 00`;
        lapMin.innerHTML = '00';
        lapBtn.innerHTML = 'Lap';
        pauseBtn.innerHTML = `Start`;
    } else {
        lapMil.innerHTML = ms;
        if(ms < 10){
            lapMil.innerHTML = `: 0${ms}`;
        }else{
            lapMil.innerHTML = `: ${ms}`;
        }
        if(sec < 10){
            lapSec.innerHTML = `: 0${sec}`;
        }else{
            lapSec.innerHTML = `: ${sec}`;
        }if(min < 10){
            lapMin.innerHTML = `0${min}`;
        }else{
            lapmin.innerHTML = `${min}`;
        }
    }
}
$('#lapBtn').on('click', lapClearTime)
    })
