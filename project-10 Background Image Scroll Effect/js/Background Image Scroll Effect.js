const bgImage = document.getElementById('bg-image')
const container = document.getElementById('container')

window.addEventListener('scroll',()=>{
  updateImg()  
})

function updateImg(){
    bgImage.style.opacity= 1-window.pageYOffset/900
    bgImage.style.transition = 'all 1s ease-out'
}