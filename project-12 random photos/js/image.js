const imageContainerEl = document.querySelector('.image-container')
const loadMorebtn = document.querySelector('.btn')
window.addEventListener('scroll', () => {
    imageNum=10
  addNewImages()
})
function addNewImages() {
  for (let i = 0; i < imageNum; i++) {
    const newImgEl = document.createElement('img')
    newImgEl.src = `https://picsum.photos/200/300?random=${Math.floor(
      Math.random() * 2000,
    )}`
    if(newImgEl==='https://picsum.photos/200/300?random=781'){
        newImgEl+1
    }
    newImgEl.classList.add('image-container')
    imageContainerEl.appendChild(newImgEl)
  }
}
