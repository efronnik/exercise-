// task 1 Спросите у пользователя его имя через prompt и выведите приветствие в alert

// const helloUser = prompt("Hello! What's your name?");
// alert(`Hello, ${helloUser}`);

// console.log(helloUser);

// task 2 Используйте confirm, чтобы спросить, хочет ли пользователь продолжить

// const continuePrompt = confirm('Хотите продолжить?');

// if (continuePrompt) {
//   alert('Продолжаем!');
// } else {
//   alert('До свидания!');
// }

// task 3 Пусть пользователь вводит два числа. Выведите их сумму, разность, произведение и частное.

// let numberOne = Number(prompt('Введите первое число'));
// let numberTwo = Number(prompt('Введите второе число'));
// let sum = numberOne + numberTwo;
// let difference = numberOne - numberTwo;
// let product = numberOne * numberTwo;
// let quotient = numberOne / numberTwo;

// alert(
//   `Сумма: ${sum}; Разность: ${difference}; Произведение: ${product}; Частное: ${quotient}`,
// );

// task 4 Используя Math, найдите максимальное и минимальное число из трех введенных пользователем чисел.

// const numberOne = Number(prompt('Введите первое число'));
// const numberTwo = Number(prompt('Введите второе число'));
// const numberThree = Number(prompt('Введите третье число'));

// const maxNumber = Math.max(numberOne, numberTwo, numberThree);
// const minNumber = Math.min(numberOne, numberTwo, numberThree);

// alert(`Максимальное число: ${maxNumber}, минимальное число: ${minNumber}`);

// task 5 Пусть пользователь вводит слово. Сделайте:
// Вывод этого слова в верхнем регистре
// Проверку, начинается ли слово с буквы «а»
// Проверку, содержит ли слово букву «е»
// task 6 Удалите пробелы в начале и конце строки и выведите результат.

// const userWord = prompt('Введите слово!').toUpperCase().trim();
// const startsLetter = userWord.startsWith('А');
// const includeLetter = userWord.includes('Е');

// alert(
//   `Слово: ${userWord}\nНачинается с "А": ${startsLetter}\nСодержит "Е": ${includeLetter}`,
// );

// task 7 Пусть пользователь вводит возраст. Выведите:
// «Вы подросток», если 13 ≤ возраст ≤ 19
// «Вы взрослый», если возраст ≥ 20
// «Вы ребенок», если возраст < 13

// const ageChild = Number(prompt('Введите ваш возраст!'));

// function seeYourAge() {
//   if (ageChild >= 13 && ageChild <= 19) {
//     return 'Вы подросток';
//   } else if (ageChild >= 20) {
//     return 'Вы взрослый';
//   } else {
//     return 'Вы ребенок';
//   }
// }

// const result = seeYourAge();
// alert(result);

// task 8 Проверка логики:
// 	Пользователь вводит число. Выведите «Число положительное и четное» только если это число > 0 и делится на 2.
// const pushNumber = Number(prompt('Введите число'));

// if (isNaN(pushNumber)) {
//   alert('Это не число!');
// } else if (pushNumber % 2 === 0 && pushNumber > 0) {
//   alert('Четное положительное число');
// } else {
//   alert('Число либо нечетное, либо отрицательное, либо ноль');
// }

// task 9 Выберите опцию:
// 1 — Привет
// 2 — Пока
// // 3 — Случайное число

// switch (
//   Number(prompt('Выберите опцию:\n1 - Привет\n2 - Пока\n3 - Случайное число'))
// ) {
//   case 1:
//     alert('Привет!');
//     break;
//   case 2:
//     alert('Пока!');
//     break;
//   case 3:
//     alert(Math.random());
//     break;
//   default:
//     alert('Нет такой опции!');
// }

// Task 10
// Тернарный оператор: Пусть пользователь вводит число.
// Выведите «Число положительное» или «Число отрицательное» через тернарный оператор.

const addNumber = Number(prompt('Введите число!'));

alert(addNumber > 0 ? 'Число положительное' : 'Число отрицательное');
