
  //exemple 1

  let apples = 47;
  let grapes = 135;
  document.getElementById('ex1_total').innerHTML = `Загальна к-сть яблук та винограду ${apples + grapes}`
  document.getElementById('ex1_diff').innerHTML = `Різниця між яблуками і виноградом ${Math.abs(apples - grapes)} шт.`
// # Модуль 1. Занятя 1.

// ## Example 1 - Базові математичні операції

// Виведи на екран загальну кількість яблук і винограду. Різницю я та винограду

// ```js
// const apples = 47;
// const grapes = 135;
// const total = ;
// console.log(total)
// const diff = ;
// console.log(diff)
// ```

// ## Example 3 - Пріоритет операторів

// Розбери пріоритет операторів
// `result`.

  let result = 108 + 223 - 2 * 5;
  document.getElementById('ex3_result').innerHTML = `Результат виразу 108 + 223 - 2 * 5 = ${result}, спочатку відбуваєтсья множення а далі всі арефметичні дії, правило математики`
// ```js
// const result = 108 + 223 - 2 * 5;
// console.log(result);
// ```

// ## Example 4 - Клас Math

// Напиши код який виводить в консоль округлення вверх / вниз.Використовуй методи`Math.floor()`,
// `Math.ceil()` і`Math.round()`.

// ```js
// const value = 27.5;
let value = 27.5;
document.getElementById('ex4_result').innerHTML = `
  Вхідне значення ${value} </br>
  Math.floor(${value}): ${Math.floor(value)} </br>
  Math.ceil(${value}): ${Math.ceil(value)} </br>
  Math.round(${value}): ${Math.round(value)} </br>
`
// ```

// ## Example 5 - Шаблонні рядки

// Склади фразу`A has B bots in stock`, де A, B - це змінні

// ```js
// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
let companyName = 'Cyberdyne Systems';
let repairBots = 150;
let defenceBots = 50;

document.getElementById('ex5_result').innerHTML = `${companyName} has ${repairBots + defenceBots} in stock`
// const message = ``;

// console.log(message); // "Cyberdyne Systems has 200 bots in stock"
// ```

// ## Example 6 - Оператори порівняння і приведення типів

// Яким буде результат виконання коду?

// ```js
// console.log(5 > 4);

// console.log(10 >= '7');

// console.log('2' > '12');

// console.log('2' < '12');

// console.log('4' == 4);

// console.log('6' === 6);

// console.log('false' === false);

// console.log(1 == true);

// console.log(1 === true);

// console.log('0' == false);

// console.log('0' === false);

// console.log('Papaya' <br 'papaya');

// console.log('Papaya' === 'papaya');

// console.log(undefined == null);

// console.log(undefined === null);
document.getElementById('ex6_result').innerHTML = `
console.log(5 > 4): ${5 > 4} </br>
console.log(10 >= '7'): ${10 >= '7'} </br>
console.log('2' < '12'): ${'2' < '12'} </br>
console.log('4' == 4): ${'4' == 4} </br>
console.log('6' === 6): ${'6' === 6} </br>
console.log('false' === false): ${'false' === false} </br>
console.log(1 == true): ${1 == true} </br>
console.log(1 === true): ${1 === true} </br>
console.log('0' == false): ${'0' == false} </br>
console.log('0' === false): ${'0' === false} </br>
console.log('Papaya' < 'papaya'): ${'Papaya' < 'papaya'} </br>
console.log(undefined == null): ${undefined == null} </br>
console.log(undefined === null): ${undefined === null} </br>
`
// ```

// ## Example 7 - Опертор % та методы рядків

// Напиши код який переводить значення`totalMinutes`(кількість хвилин) в формат
//  `HH:MM`

// - 70 покаже 01:10
// - 450 покаже 07:30
// - 1441 покаже 24:01

// ```js
let totalMinutes = 70;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
  let hours = Math.floor(totalMinutes / 60);
  let minutes = totalMinutes % 60;

  document.getElementById('ex7_result').innerHTML = `
    totalMinutes = ${totalMinutes} </br>
    Math.floor(totalMinutes / 60): ${Math.floor(totalMinutes / 60)} </br>
    totalMinutes % 60: ${totalMinutes % 60} </br></br>
  `
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
let doubleDigitHours = String(hours).padStart(2, 0);
let doubleDigitMinutes = String(minutes).padStart(2, 0);

document.getElementById('ex7_result').innerHTML += `
  String(hours).padStart(2, 0): ${String(hours).padStart(2, 0)} </br>
  String(minutes).padStart(2, 0): ${String(minutes).padStart(2, 0)} </br>
  doubleDigitHours}:doubleDigitMinutes: ${doubleDigitHours}:${doubleDigitMinutes}
`
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);
// ```
// ## Example 8 - Логічні оператори

// Яким буде результат виразу

// ```js
// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0);

// console.log(null || (2 && 3) || 4);
document.getElementById('ex8_result').innerHTML = `
console.log(true && 3): ${true && 3} </br>
console.log(false && 3): ${false && 3} </br>
console.log(true && 4 && 'kiwi'): ${true && 4 && 'kiwi'} </br>
console.log(true && 0 && 'kiwi'): ${true && 0 && 'kiwi'} </br>
console.log(true || 3): ${true || 3} </br>
console.log(true || 3 || 4): ${true || 3 || 4} </br>
console.log(true || false || 7): ${true || false || 7} </br>
console.log(null || 2 || undefined): ${null || 2 || undefined} </br>
console.log((1 && null && 2) > 0): ${(1 && null && 2) > 0} </br>
console.log(null || (2 && 3) || 4): ${null || (2 && 3) || 4} </br>
`
// ```