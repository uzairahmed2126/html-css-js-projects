const nav = document.querySelector('.nav-bar')
const BottomConatiner = document.querySelector('.paragraph')

window.addEventListener('scroll', () => {
  if (window.scrollY > BottomConatiner.offsetTop-nav.offsetHeight-50) {
    nav.classList.add('active')
  } else {
    nav.classList.remove('active')
  }
})




