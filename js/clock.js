const clock = document.querySelector('h2.clock');
const a = document.querySelectorAll('#clock_menu li');

function Clock() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2,'0')
  const minute = String(date.getMinutes()).padStart(2,"0")
  const second = String(date.getSeconds()).padStart(2,'0')
  clock.innerText = `${hour}:${minute}:${second}`
}
Clock()
const start = setInterval(Clock,1000)

for(let i = 0; i < a.length; i++) {
  a[i].addEventListener('click', (e) => {
    e.preventDefault();
    if(i > 0) {
      clearInterval(start)
      clock.innerText = '00:00:00'
      setTimeout(start, 1000)
    }else {
      Clock()
      setTimeout(setInterval,1000)
    }
  })
}