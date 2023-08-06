const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const imageContainer = document.querySelector('.image-container')

let currentImg = 1;
prev.addEventListener('click',()=>{
    currentImg++
    updateImg()
})

function updateImg(){
    imageContainer.style.transform= `translateX(-${currentImg-1}px)`
}