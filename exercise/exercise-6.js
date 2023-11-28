// function reverseString(string) {
//   let strSplit = string.split('');
//   let strReverse = strSplit.reverse();
//   let strJoin = strReverse.join('');
//   return strJoin;
// }

// console.log(reverseString('Привет'));
// console.log(reverseString('Никита'));
// console.log(reverseString('Вечность'));
// console.log(reverseString('Структура'));
// console.log(reverseString('Великолепный век'));

// Привет = тевирП

function countVowels(string) {
  let vowel = ['a', 'e', 'i', 'o', 'u'];
  let totalVowel = 0;
  for (let i = 0; i < string.length; i++) {
    if (vowel.includes(string[i].toLowerCase())) {
      totalVowel++;
    }
  }
  return totalVowel;
}

console.log(countVowels('hello world')); // Ожидаемый вывод: 3
