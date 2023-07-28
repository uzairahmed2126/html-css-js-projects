const btnEl = document.querySelector('.btn')
const closeIconEl = document.querySelector('.close-icon')
const trailerContainerEl = document.querySelector('.trailer-container')
const video = document.querySelector('video')

btnEl.addEventListener('click', () => {
  trailerContainerEl.classList.remove('active')
})

closeIconEl.addEventListener('click', () => {
  trailerContainerEl.classList.add('active')
  video.pause()
  video.currentTime = 0
})
window.addEventListener('keypress', (event) => {
  if (event.key === 'f') {
    video.requestFullscreen()
    console.log('Full Screen')
  }
  if (event.key === 't') {
    video.requestPictureInPicture()
    console.log('tab view')
  }
  else{
    event.key=''
  }

})
