const bodyEl = document.querySelector('body')
bodyEl.addEventListener('mouseover', (event) => {
  const xPosition = event.offsetX
  const yPosition = event.offsetY
  const spanEl = document.createElement('span')
  bodyEl.appendChild(spanEl)
  spanEl.style.background = '#' + random()
  spanEl.style.left = xPosition + 'px'
  spanEl.style.top = yPosition + 'px'
  const size =Math.random()*100
  spanEl.style.width=size+'px'
  spanEl.style.height=size+'px'  
  bodyEl.style.background = '#' + random()

})
function random() {
  const char = '0123456789abcdef'
  const colorCodeLength = 6
  let colorCode = ''
  for (let index = 0; index < colorCodeLength; index++) {
    const randomNum = Math.floor(Math.random() * char.length)
    colorCode += char.substring(randomNum, randomNum + 1)
  }
  return colorCode
}
