// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
// function double(x) {
//   return x * 2;
// }
// const newNumbers = numbers.map(double);
// console.log(newNumbers);

// before we use to do it like that
// var newNumbers = [];

// function double(x) {
//   newNumbers.push(x * 2);
// }
// numbers.forEach(double);

// console.log(newNumbers);
// the difference is with map without push we will get array but with forEach we need push

// var numbers = [3, 56, 2, 48, 5];
//Filter - Create a new array by keeping the items that return true.

// const newNumbers = numbers.filter(function (num) {
//   return num > 10;
// });

//  now using forEach
// var newNumbers = [];
// numbers.forEach(function (num) {
//   if (num < 10) newNumbers.push(num);
// });
// console.log(newNumbers);

// var numbers = [3, 56, 2, 48, 5];
// //Reduce - Accumulate a value by doing something to each item in an array.

// var newNumbers = numbers.reduce(function (accumulator, currentNumber) {
//   console.log("accumulator = " + accumulator);
//   console.log("currentNumber = " + currentNumber);
//   return accumulator + currentNumber;
// });

// var newNumbers = 0;
// numbers.forEach(function (currentNumber) {
//   newNumbers += currentNumber;
// });
// console.log(newNumbers);

// var numbers = [3, 56, 2, 48, 5];

//Find - find the first item that matches from an array.
// const newNumber = numbers.find(function (num) {
//   return num > 10;
// });
// console.log(newNumber);
//FindIndex - find the index of the first item that matches.

// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// });
// console.log(newNumber);

import emojipedia from "./emojipedia";
console.log(emojipedia);

const newEmojipedia = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});
console.log(newEmojipedia);
