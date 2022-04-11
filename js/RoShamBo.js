let playerChoiseIco = document.querySelectorAll('.plIco')
let aiChoiseIco = document.querySelectorAll('.aiIco')

let playerBtnNav = document.querySelector('.choiceBtns')

let startBtn = document.querySelector('.start')
let allChoiceBtn = document.querySelectorAll('.choiceBtn')

let speed = 10

let plIntervalShow

startBtn.addEventListener('click', e => {
  e.preventDefault()
  startGame()
})

allChoiceBtn.forEach(b => {
  b.addEventListener('click', e => {
    e.preventDefault()
    stopGame(e.target.dataset.game)
  })
})

const changePlayerView = (i) => {
  if (i == 0) {
    playerChoiseIco[i].classList.remove('show')
    playerChoiseIco[1].classList.add('show')
    playerChoiseIco[2].classList.remove('show')
  } else if (i == 1) {
    playerChoiseIco[i].classList.remove('show')
    playerChoiseIco[0].classList.remove('show')
    playerChoiseIco[2].classList.add('show')
  } else {
    playerChoiseIco[i].classList.remove('show')
    playerChoiseIco[0].classList.add('show')
    playerChoiseIco[1].classList.remove('show')
  }
}

const changeAiView = (i) => {
  if (i == 0) {
    aiChoiseIco[i].classList.remove('show')
    aiChoiseIco[1].classList.add('show')
    aiChoiseIco[2].classList.remove('show')
  } else if (i == 1) {
    aiChoiseIco[i].classList.remove('show')
    aiChoiseIco[0].classList.remove('show')
    aiChoiseIco[2].classList.add('show')
  } else {
    aiChoiseIco[i].classList.remove('show')
    aiChoiseIco[0].classList.add('show')
    aiChoiseIco[1].classList.remove('show')
  }
}

const stopGame = (choice) => {
  clearInterval(plIntervalShow)
  startBtn.classList.add('seen')
  playerBtnNav.classList.remove('seen')

  let aiChoice
  aiChoiseIco.forEach(a => {
    if (a.classList.contains('show')) {
      aiChoice = a.dataset.game
    }
  })
  playerChoiseIco.forEach(b => {
    b.dataset.game === choice ? b.classList.add('show') : b.classList.remove('show')
  })

  if (aiChoice === choice) {
    document.querySelector('.result').innerHTML = `
      <p class="textResult">Нічия</p>
    `
  } else if (choice == 'rock' && aiChoice !== 'paper') {
    document.querySelector('.result').innerHTML = `
      <p class="textResult">Гравець виграв</p>
    `
  } else if (choice == 'scissors' && aiChoice !== 'rock') {
    document.querySelector('.result').innerHTML = `
      <p class="textResult">Гравець виграв</p>
    `
  } else if (choice == 'paper' && aiChoice !== 'scissors') {
    document.querySelector('.result').innerHTML = `
      <p class="textResult">Гравець виграв</p>
    `
  } else {
    document.querySelector('.result').innerHTML = `
      <p class="textResult">Комп'ютер виграв</p>
    `
  }
}

const startGame = () => {
  startBtn.classList.remove('seen')
  playerBtnNav.classList.add('seen')
  document.querySelector('.result').innerHTML = `<p class="textResult"></p>`
  plIntervalShow = setInterval(async () => {
    changePlayerView(Math.floor(Math.random() * 3))
    changeAiView(Math.floor(Math.random() * 3))
  }, speed)
}

startBtn.classList.add('seen')