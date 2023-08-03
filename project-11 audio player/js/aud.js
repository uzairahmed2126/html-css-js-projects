// const container = document.querySelector('.container')
// // const SurahFatiha = document.getElementById('btn-1')
// // const SurahIkhlas = document.getElementById('btn-2')
// // const SurahFalaq = document.getElementById('btn-3')
// // const SurahAnNaas = document.getElementById('btn-4')
// const audioEl = document.getElementById('audioEl')
// const span = document.querySelectorAll('span')
// const spn = document.querySelector('span')

// span.forEach((SurahFatiha) => {
//   SurahFatiha.addEventListener('click', () => {
//     audioEl.src = './sounds/Surah Al-Fatiha.mp3'
//     isOn = !isOn
//     if (isOn) {
//       audioEl.play()
//       // span.setAttribute('class', 'fa-solid fa-pause')
//       SurahFatiha.classList.remove('fa-play')
//     } else {
//       audioEl.pause()
//       // span.setAttribute('class', 'fa-solid fa-play')
//       SurahFatiha.classList.add('fa-play')
//     }
//   })
//   SurahFatiha.addEventListener('click', () => {
//     audioEl.src = './sounds/Surah Al-Ikhlas.mp3'
//     isOn = !isOn
//     if (isOn) {
//       audioEl.play()
//       // span.setAttribute('class', 'fa-solid fa-pause')
//       SurahFatiha.classList.remove('fa-play')
//     } else {
//       audioEl.pause()
//       // span.setAttribute('class', 'fa-solid fa-play')
//       SurahFatiha.classList.add('fa-play')
//     }
//   })
//   SurahFatiha.addEventListener('click', () => {
//     audioEl.src = './sounds/Surah Al-Falaq.mp3'
//     isOn = !isOn
//     if (isOn) {
//       audioEl.play()
//       // span.setAttribute('class', 'fa-solid fa-pause')
//       SurahFatiha.classList.remove('fa-play')
//     } else {
//       audioEl.pause()
//       // span.setAttribute('class', 'fa-solid fa-play')
//       SurahFatiha.classList.add('fa-play')
//     }
//   })
//   SurahFatiha.addEventListener('click', () => {
//     audioEl.src = './sounds/Surah An-Naas.mp3'
//     isOn = !isOn
//     if (isOn) {
//       audioEl.play()
//       // span.setAttribute('class', 'fa-solid fa-pause')
//       SurahFatiha.classList.remove('fa-play')
//     } else {
//       audioEl.pause()
//       // span.setAttribute('class', 'fa-solid fa-play')
//       SurahFatiha.classList.add('fa-play')
//     }
//   })
// })

// let isOn = false
// span.addEventListener('click', () => {
//   audioEl.src = './sounds/Surah Al-Fatiha.mp3'
//   isOn = !isOn
//   if (isOn) {
//     audioEl.play()
//     // span.setAttribute('class', 'fa-solid fa-pause')
//     span.classList.remove('fa-play')
//   } else {
//     audioEl.pause()
//     // span.setAttribute('class', 'fa-solid fa-play')
//     span.classList.add('fa-play')
//   }
// })

// // span.addEventListener('click', () => {
// //   audioEl.src = './sounds/Surah Al-Ikhlaas.mp3'

// //   isOn = !isOn
// //   if (isOn) {
// //     audioEl.play()
// //     span.classList.remove('fa-play')
// //   } else {
// //     audioEl.pause()
// //     span.classList.add('fa-play')
// //   }
// // })

// SurahFalaq.addEventListener('click', () => {
//   audioEl.src = './sounds/Surah Al-Falaq.mp3'
//   console.log(isOn)

//   isOn = !isOn
//   console.log(isOn)
//   if (isOn) {
//     audioEl.play()
//   } else {
//     audioEl.pause()
//   }
// })

// SurahAnNaas.addEventListener('click', () => {
//   audioEl.src = './sounds/Surah An-Naas.mp3'
//   console.log(isOn)

//   isOn = !isOn
//   console.log(isOn)
//   if (isOn) {
//     audioEl.play()
//   } else {
//     audioEl.pause()
//   }
// })

const Kits = [
  'Surah Al-Fatiha',
  'Surah Al-Ikhlaas',
  'Surah Al-Falaq',
  'Surah An-Naas',
]
const containerEl = document.querySelector('.container')
let isOn = false
Kits.forEach((kit) => {
  // Creat elements
  const btnEl = document.createElement('button')
  const span = document.createElement('span')
  span.setAttribute('class', 'fa-solid fa-play')
  btnEl.classList.add('btn')
  btnEl.innerText = kit
  containerEl.appendChild(btnEl)
  btnEl.appendChild(span)
  const audioEl = document.createElement('audio')
  audioEl.src = 'sounds/' + kit + '.mp3'
  audioEl.setAttribute('controls', '')
  containerEl.appendChild(audioEl)
  btnEl.addEventListener('click', () => {
    isOn = !isOn
    if (isOn) {
      audioEl.play()
      span.setAttribute('class', 'fa-solid fa-pause')
      if (audioEl.ended) {
        audioEl.ended()
        span.setAttribute('class', 'fa-solid fa-play')
      }
    } else {
      audioEl.pause()
      span.setAttribute('class', 'fa-solid fa-play')
    }
  })
})
