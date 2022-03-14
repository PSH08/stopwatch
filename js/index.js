let minutes = 0;
let seconds = 0;
let tenMillis = 0;
const ten = document.getElementById('tenMillis');
const sec = document.getElementById('seconds');
const min = document.getElementById('minutes');
const start_btn = document.querySelector('.start_btn');
const stop_btn = document.querySelector('.stop_btn');
let time;

start_btn.addEventListener('click', function() {
  time = setInterval(start, 10);
})
function start() {
  tenMillis++;
  ten.innerText = tenMillis;
  if(tenMillis > 99) {
    seconds++;
    sec.innerText = seconds > 9 ? seconds : `0${seconds}`;
    tenMillis = 0;
    ten.innerText = '00'
  }
  if(seconds > 59) {
    minutes++;
    min.innerText = minutes > 9 ? minutes : `0${minutes}`;
    seconds = 0;
    sec.innerText = '00'
  }
}

stop_btn.addEventListener('click', function() {
  clearInterval(time)
})
