const questions = document.getElementById('question')
const score = document.getElementById('score')
const submit = document.getElementById('submit')
const formEl = document.getElementById('form')
const num1 = Math.ceil(Math.random() * 30)
const num2 = Math.ceil(Math.random() * 30)
const correctAns = num1 * num2
const text = document.getElementById('text').innerText

questions.innerText = `What is ${num1} multiply by ${num2}?`

formEl.addEventListener('submit', () => {
  if (correctAns) {
    score.innerText = `score : ${+1}`
  } else {
    alert('aww')
  }
})
