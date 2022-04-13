// # Модуль 1. Заняття 2. Розгалуження. Цикли

// ## Example 1 - Ввід користувача та розгалуження

// Використовуючи конструкцію if...else та prompt напишіть код що буде питатися в користувача
// "Яка офіційна назва JavaScript".Якщо користувач вводить `ECMAScript` то показувати alert з повідомленням`"Вірно!"`
// в іншому випадку - "Не знаєте? ECMAScript"

let ex1Btns = document.querySelector('.buttons_ex1')

ex1Btns.addEventListener('click', e => {
  e.preventDefault()
  let textEx1 = prompt(`${e.target.innerText}`, '')
  textEx1 === 'ECMAScript' ? alert('Вірно!') : alert(`Не знаєте? ECMAScript`)
})
// ## Example 2 - Показувати час(if...else)

let textEx2 = document.querySelector('.timeEx2')
let date = new Date()

textEx2.innerHTML = `${date.getHours()} год ${date.getMinutes() != 0 ? date.getMinutes() + ' хв' : ''}`
// Напишіть код для відображення годин і хвилин в консоль браузера в вигляді рядка в форматі "14 год 26 хв"
// Якщо значення хвилин "0" тоді показувати лише "14 год"

// ```js
// const hours = 14;
// const minutes = 26;
// let timestring;
// ```

// ## Example 3 - Розгалуження

let ex3Btns = document.querySelector('.buttons_ex3')

ex3Btns.addEventListener('click', e => {
  e.preventDefault()
  let textEx3 = parseFloat(prompt(`${e.target.innerText}`, ''))
  let result = textEx3 === 0 ? 'Це нуль' : textEx3 > 0 ? 'Це додатнє число' : textEx3 < 0 ? 'Це відємне число' : 'Це не число'
  document.querySelector('.resultEx3').innerHTML = `${result}`
})

// Напишіть код що виводить в консоль рядок "Це додатнє число" якщо користувач ввів в prompt число що більше за 0
// Якщо користувач ввів 0 то рядок "Це нуль". Якщо користувач ввів відємне число виводити на екран рядок "Це відємне число"


// ```js
// const userInput = prompt('Введите число');
// ```

// ## Example 4 - if...else і логічні оператори

// Напишіть код що буде виводити в консоль браузера рядок в залежності від значення змінної "hours"

// Якщо занчення зміної `hours`:
let res4 = date.getHours() < 17 ? `Pending` : date.getHours() >= 17 ? `Expires` : date.getHours() > 24 ? `Overdue` : ''
document.querySelector('.resultEx4').innerHTML = `Взята для прикладу поточна година ${date.getHours()} : ${res4}`

// - меньше `17`, виводимо рядок `"Pending"`
// - більше чи доріврнює `17` і меньше чи дорівнює 24, виводимо рядок `"Expires"`
// - більше `24` , виводимо рядок `"Overdue"`

// ```js
// const hours = 10;
// ```

// ## Example 5 - Дедлайн здачі проекта(if...else)

// Напиши код для відображення часу дедлайна здачі проекта. Використовуй if else

// - Якщо до дедлайну 0 днів - виведи рядок `"Сьогодні"`
// - Якщо до дедлайну 1 день - виведи рядок `"Завтра"`
// - Якщо до дедлайну 2 дні - виведи рядок `"Післязавтра"`
// - Якщо до дедлайну 3+ днів - виведи рядок `"Ще не скоро )"`

let ex5 = [5, 4, 3, 2, 1, 0]

let getDeadLine = e => {
  if (e >= 3) {
    return `Вхідне значення ${e} </br> Ще не скоро ) </br>`
  } else if (e === 2) {
    return `Вхідне значення ${e} </br> Післязавтра </br>`
  } else if (e === 1) {
    return `Вхідне значення ${e} </br> Завтра </br>`
  } else {
    return `Вхідне значення ${e} </br> Сьогодні </br>`
  }
}

ex5.forEach(e => {
  document.querySelector('.resultEx5').innerHTML += getDeadLine(e)
})

// ```js
// const daysUntilDeadline = 5;
// ```

// ## Example 6 - Переписати задачу 5 на Switch

let ex6 = [5, 4, 3, 2, 1, 0]

let getDeadLine2 = e => {
  switch (e) {
    case 5:
      return `Вхідне значення ${e} </br> Ще не скоро ) </br>`
    case 4:
      return `Вхідне значення ${e} </br> Ще не скоро ) </br>`
    case 3:
      return `Вхідне значення ${e} </br> Ще не скоро ) </br>`
    case 2:
      return `Вхідне значення ${e} </br> Післязавтра </br>`
    case 1:
      return `Вхідне значення ${e} </br> Завтра </br>`
    default:
      return `Вхідне значення ${e} </br> Сьогодні </br>`
  }
}

ex6.forEach(e => {
  document.querySelector('.resultEx6').innerHTML += getDeadLine2(e)
})

// ## Example 7 - Цикл for

// Написати цикл що виводить в консоль числа від меньшого до більшого в діапазоні від min до max
// але лише ті що кратні 5-ти

let max = 100
let min = 20

document.querySelector('.resultEx7').innerHTML = `Числа кратні 5 від 20 до 100: </br>`
for (min; min<=100; min++) {
  min % 5 === 0 ? document.querySelector('.resultEx7').innerHTML += `${min} кратне 5 </br>` : ''
}
// ```js
// const max = 100;
// const min = 20;
// ```

// ## Example 8
//  Написати гру камінь - ножиці - папір
// Де компютер загадує своє значення
// Користувач вводить свій варіант
// І потім ми бачимо хто переміг
