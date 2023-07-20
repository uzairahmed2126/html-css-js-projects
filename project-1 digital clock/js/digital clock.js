const txthr = document.getElementById('txt-hr')
const hours = document.getElementById('hours')

const txtmin = document.getElementById('txt-min')
const minutes = document.getElementById('minutes')

const txtsec = document.getElementById('txt-sec')
const seconds = document.getElementById('seconds')
// seconds.addEventListener('click',()=>{
//     setTimeout(()=>{
//         txtsec.innerHTML=seconds
//     },1000)
// })

let ampm = document.getElementById('ampm')

// txthr.addEventListener('click',function(){
//     let time = setTimeout(hours,1000)
// document.getElementById('hours').innerHTML=time
// })
function updateClock() {
  let h = new Date().getHours()
  let m = new Date().getMinutes()
  let s = new Date().getSeconds()
//   ampm='AM'
  if (h > 12) {
    h = h- 12
    ampm = 'PM'
  }

  h = h < 10 ? "0" + h : h
  m = m < 10 ? "0" + m : m
  s = s < 10 ? "0" + s : s
  hours.innerText = h
  minutes.innerText = m
  seconds.innerText = s
  ampm.innerText = ampm
  setTimeout(()=>{
    updateClock()

  }, 1000)
}

updateClock()
