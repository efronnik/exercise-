function calculateAge(YearOfBirth) {
  let Year = 2023;
  return Year - YearOfBirth;
}

console.log(calculateAge(1995));

// function calculateAgeFromDateOfBirth(dateOfBirth) {
//   const currentYear = new Date().getFullYear();
//   const birthYear = dateOfBirth.getFullYear();
//   const age = currentYear - birthYear;
//   return age;
// }

// // Пример использования:
// const userDateOfBirth = new Date('1995-12-22'); // Предположим, что это дата рождения пользователя
// console.log(calculateAgeFromDateOfBirth(userDateOfBirth));
