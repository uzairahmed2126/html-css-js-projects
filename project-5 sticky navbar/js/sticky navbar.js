const nav = document.querySelector('.nav-bar')
const BottomConatiner = document.querySelector('.paragraph')

window.addEventListener('scroll', (event) => {
  console.dir(window.scrollY)
  if (window.scrollY > 200) {
    nav.classList.add('active')
  } else {
    nav.classList.remove('active')
  }
})
