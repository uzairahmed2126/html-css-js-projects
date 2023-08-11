// const toggle = document.getElementById('dark-mode')
// let flag  = true;

// toggle.addEventListener('click',(event)=>{
//     // flag != flag
//     if(1){
//     document.body.style.background='#000'
//     }else if(0){
//     document.body.style.background='#fff'
//     }
//     // return 1;
// })

const inputEl = document.querySelector('.input')
const bodyEl  = document.querySelector('body')
inputEl.checked=false
bodyColor()

function bodyColor(){
  if (!inputEl.checked) {
    bodyEl.classList.add('day')||(bodyEl.classList.remove('night'))
  }else if(inputEl.checked){
    bodyEl.classList.add('night') ||bodyEl.classList.remove('day')
  }
   else {
    bodyEl.style.background=''
  }
}

inputEl.addEventListener('input',()=>{
    bodyColor()
})