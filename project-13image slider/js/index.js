const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const imageContainer = document.querySelector('.image-container')
const imgsEl = document.querySelectorAll('img')

let timeout

let currentImg = 1
next.addEventListener('click', () => {
  currentImg++
  clearTimeout(timeOut)
  updateImg(timeout)
})
updateImg()
function updateImg() {
  if (currentImg > imgsEl.length) {
    currentImg = 1
  } else if (currentImg < 1) {
    currentImg = imgsEl.length
  }
  imageContainer.style.transform = `translateX(-${(currentImg - 1) * 500}px)`
  timeout = setTimeout(() => {
    currentImg++
    clearTimeout(timeout)
    updateImg()
  }, 3000)
}

prev.addEventListener('click', () => {
  currentImg--
  clearTimeout(timeout)
  updateImg()
})
