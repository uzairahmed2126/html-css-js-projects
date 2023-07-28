const textareaEl = document.getElementById('txt')
textareaEl.setAttribute('placeholder', 'Write here...')
textareaEl.setAttribute('maxLength','150')
const totalCounterEl = document.getElementById('span-char')
const remainingCounterEl = document.getElementById('span-remain')
textareaEl.addEventListener('keyup', (event) => {
  // if(event!==''){
  // totalCounterEl.innerText=sum++
  // }else{
  // totalCounterEl.innerText=sum
  // }
  updateCounter()
})
updateCounter()


function updateCounter() {
    if(textareaEl===''){
        String.split('')
    }
  totalCounterEl.innerText = textareaEl.value.length
  remainingCounterEl.innerText =
    textareaEl.getAttribute('maxLength') - textareaEl.value.length
}
