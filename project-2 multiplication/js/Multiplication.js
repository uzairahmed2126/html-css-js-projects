const questions = document.getElementById('question')
const scoreEl = document.getElementById('score')
const formEl = document.getElementById('form')
const num1 = Math.ceil(Math.random() * 1)
const num2 = Math.ceil(Math.random() * 1)
const correctAns = num1 * num2
const text = document.getElementById('text')
const reset = document.getElementById('refresh-btn')
reset.addEventListener('click',()=>{
  window.location.reload()
  let score = JSON.parse(localStorage.getItem('score'))
scoreEl.innerText = `score : ${0}`
})
let score = JSON.parse(localStorage.getItem('score'))
scoreEl.innerText = `score : ${score}`

if (!score) {
  score = 0
}
questions.innerText = `What is ${num1} multiply by ${num2}?`

formEl.addEventListener('submit', () => {
  const userAns = +text.value
  if (correctAns === userAns) {
    score++
    updatelocalStorage()
  } else {
    score--
    updatelocalStorage()
  }
})

function updatelocalStorage() {
  localStorage.setItem('score', JSON.stringify(score))
}

if(window.screen.addEventListener('load',reload)){
  function reload(){
scoreEl.innerText = `score : ${0}`
  }
}