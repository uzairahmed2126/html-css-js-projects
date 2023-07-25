const containerEl = document.querySelector('.container')

for(let index= 0; index<30;index++){
    const colorContainerEl = document.createElement('div')
    colorContainerEl.classList.add('color-container')
    containerEl.appendChild(colorContainerEl)
}

const colorContainerEls = document.querySelectorAll('.color-container')
generateColors()
function generateColors(){
    colorContainerEls.forEach(
        (event)=>{
        const newColorCode = randomColor()
        event.style.backgroundColor='#'+newColorCode
        event.innerText = '#'+newColorCode
        event.style.color = '#000'
        if(newColorCode >='8b008b'){
        event.style.color = '#000'
        }else{
        event.style.color = '#fff'
        }
    })
}
function randomColor(){
    const chars = '0123456789abcdef'
    const colorCodeLength = 6
    let colorCode = ''
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length)
        colorCode += chars.substring(randomNum,randomNum+1);
    }
    return colorCode
}