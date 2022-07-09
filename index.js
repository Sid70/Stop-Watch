let second = 0;
let tens = 0;
let minute = 0;
let interval;

let getSeconds = document.querySelector('.second');
let getminute = document.querySelector('.minute');
let getTens = document.querySelector('.milisec');
let btnStart = document.querySelector('.btn-start');
let btnStop = document.querySelector('.btn-stop');
let btnReset = document.querySelector('.btn-reset');

btnStart.addEventListener('click', () => {
    interval = setInterval(setTimer,10);
});

function setTimer() {

    tens++;

    if (tens < 10) {
        getTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
        getTens.innerHTML = tens;
    }

    if (tens > 99) {
        second++;
        getSeconds.innerHTML = "0" + second;
        tens = 0;
        getTens.innerHTML = "0" + tens;
    }

    if (second > 9) {
        getSeconds.innerHTML = second;
    }

    if ( second > 59 )
    {
        second = 0;
        getSeconds.innerHTML = "0" + second;
        tens = 0;
        minute++;
        getminute.innerHTML = "0" + minute;
    }
}

btnStop.addEventListener('click',()=>{
    clearInterval(interval);
});

btnReset.addEventListener('click',()=>{
    clearInterval(interval);
    tens = '00';
    second = "00";
    minute =  "00";
    getSeconds.innerHTML = second;
    getTens.innerHTML = tens;
    getminute.innerHTML = minute;
});