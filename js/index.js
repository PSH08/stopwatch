let minutes = 0;
let seconds = 0;
let tenMillis = 0;
let ul = document.createElement('ul');
let li = document.createElement('li');
const ten = document.getElementById('tenMillis');
const sec = document.getElementById('seconds');
const min = document.getElementById('minutes');
const start_btn = document.querySelector('.start_btn');
const stop_btn = document.querySelector('.stop_btn');
const save_btn = document.querySelector('.save_btn');
const reset_btn = document.querySelector('.reset_btn');
const cont = document.querySelector('.container');
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
});

save_btn.addEventListener('click', function() {
  cont.appendChild(ul);
  ul.appendChild(li);
  li.innerText = `${minutes}:${seconds}:${tenMillis}`;
});

function reset() {
  li.innerText = ''
  if(tenMillis > 1) {
    ten.nodeValue = ''
  }
}
reset_btn.addEventListener('click', reset)