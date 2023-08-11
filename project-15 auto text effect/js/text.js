const containerEl = document.querySelector('.container')
const text = document.querySelector('.txt')
const careers = ['uzair', 'programmer', 'student', 'learner', 'Web Developer']
let careerIndex = 0
let characterIndex = 0
updateText()

function updateText() {
  characterIndex++
  containerEl.innerHTML = `<h1>Hey I'm a ${careers[careerIndex].slice(
    0,
    characterIndex,
  )}</h1>`
  if (characterIndex === careers[careerIndex].length) {
    careerIndex++
    characterIndex = 0
  }
  if (careerIndex === careers.length) {
    careers = 0
  }
  setTimeout(updateText, 400)
}
