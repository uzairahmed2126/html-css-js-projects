const container = document.querySelector('.container')
const SurahFatiha = document.getElementById('btn-1')
const SurahIkhlas = document.getElementById('btn-2')
const SurahFalaq = document.getElementById('btn-3')
const SurahAnNaas = document.getElementById('btn-4')
const audioEl = document.getElementById('audioEl')
const span = document.querySelector('span')
let spanClassPlay = span.setAttribute('class', 'fa-solid fa-play')
let isOn = false
span.addEventListener('click', () => {
  audioEl.src = './sounds/Surah Al-Fatiha.mp3'
  isOn = !isOn
  if (isOn) {
    audioEl.play()
    span.setAttribute('class', 'fa-solid fa-pause')
  } else {
    audioEl.pause()
    span.setAttribute('class', 'fa-solid fa-play')
  }
})

SurahIkhlas.addEventListener('click', () => {
  audioEl.src = './sounds/Surah Al-Ikhlaas.mp3'

  isOn = !isOn
  if (isOn) {
    audioEl.play()
    span.setAttribute('class', 'fa-solid fa-pause')
  } else {
    audioEl.pause()
    span.setAttribute('class', 'fa-solid fa-play')
  }
})

SurahFalaq.addEventListener('click', () => {
  audioEl.src = './sounds/Surah Al-Falaq.mp3'
  console.log(isOn)

  isOn = !isOn
  console.log(isOn)
  if (isOn) {
    audioEl.play()
  } else {
    audioEl.pause()
  }
})

SurahAnNaas.addEventListener('click', () => {
  audioEl.src = './sounds/Surah An-Naas.mp3'
  console.log(isOn)

  isOn = !isOn
  console.log(isOn)
  if (isOn) {
    audioEl.play()
  } else {
    audioEl.pause()
  }
})

// const Kits = [
//   'Surah Al-Fatiha',
//   'Surah Al-Ikhlaas',
//   'Surah Al-Falaq',
//   'Surah An-Nass',
// ]
// const containerEl = document.querySelector('.container')

// Kits.forEach((kit) => {
//   const btnEl = document.createElement('button')
//   btnEl.classList.add('btn')
//   btnEl.innerText = kit
//   containerEl.appendChild(btnEl)
//   const audioEl = document.createElement('audio')
//   audioEl.src='sounds/'+kit+'.mp3'
//   containerEl.appendChild(audioEl)
//   btnEl.addEventListener('click',()=>{
//     audioEl.play()
//   })
// })
