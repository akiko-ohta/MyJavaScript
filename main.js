'use strict';

/*
JavaScriptにおける数値の表現
@ohta
*/

// console.log(100);
// console.log(-10);
// console.log(2.5);

// 大きな数値、小さな数値の表現
console.log(1.2e4); // 1.2かける10の4乗 = 12000
console.log(1.2e-4); //　1.2かける10の-4乗 = 0.00012

console.log(10 + 3); // 13
console.log(10 + 3); // 7
console.log(10 * 3); // 30
console.log(10 ** 3); //1000
console.log(10 / 3); // 3.33333....
console.log(10 % 3); // 3

console.log(10 + 2 * 3) // 16
console.log((10 + 2) * 3) // 36

// console.log(150 + 120 * 1.1)
// console.log(150 + 130 * 1.1)
// console.log(150 + 140 * 1.1)

// 変数
// let price = 150;
// 定数
const rate = 1.1;

for (let price = 150; price <= 160; price++){
  console.log(`Price: ${price}`)
  for (let amount = 120; amount <= 140; amount+=10) {
    console.log(price * amount *rate)
  }
  // console.log(price + 120 * rate)
  // console.log(price + 130 * rate)
  // console.log(price + 140 * rate)
}

// const command = Number(prompt('Menu 1, 2, 3 or 0 to exit'));
// console.log(`Menu ${command} processed.`);

// let command = Number(prompt('Menu 1, 2, 3 or 0 to exit'));
// while (command !==0) {
//   console.log(`Menu ${command} processed.`);
//   command = Number(prompt('Menu 1, 2, 3 or 0 to exit'));
// }

let amount = 100;

for (let year = 1; year <= 30; year++) {
  amount *=1.05
  if (amount < 200) {
    continue;
  }
  if (amount > 300){
    break;
  }
  console.log(`Year ${year}: ${amount}`);
}

// const score = Number(prompt('Score?'))
// const result = score > 80 ? 'A' : 'B';
// console.log(result);

// const english = Number(prompt('English?'));
// const math = Number(prompt('Math?'));

// if (!(english >= 80 && math >= 80)) {
//   console.log('A');
// } else {
//   console.log('B')
// }

// let x = 10;
// {
//   // let x = 20;
//   x = 20;
//   console.log(x); // 20
// }
// console.log(x); // 10

{
  let x = 10;
console.log(x);
}

// let command;

// do {
//   command = Number(prompt('Menu 1, 2, 3 or 0 to exit'));
//   if (command === 0) {
//     console.log('Existed');
//   } else {
//     console.log(`Menu ${command} processed.`);
//   }
// } while (command !==0);

// price = 150;
// console.log(price + 120 * rate)
// console.log(price + 130 * rate)
// console.log(price + 140 * rate)

// // price = 151;
// // price = price +1;
// // price += 1;
// // price *= 1.5;
// price++;
// console.log(price + 120 * rate)
// console.log(price + 130 * rate)
// console.log(price + 140 * rate)

// console.log('It is a pen.');
// console.log('It\'s a pen.');
// console.log("It's a pen.");
console.log("It's \na \npen.");

//  My name is Taro Yamada, call me Taro!

const fname = 'Taro';
const lname = 'Yamada';

console.log('My name is ' + fname + ' ' + lname + ', call me ' + fname + '!');
console.log(`My name is ${fname} ${lname}, call me ${fname}!`);

// console.log(50 + '20');

// const score = Number(prompt('Score?'));
// if (score >= 90) {
//   console.log('A!');
// } else if (score >= 70) {
//   console.log('B!');
// } else {
//   console.log('C!');
// }

// const color = prompt('Color?')

// switch (color) {
//   case 'red':
//     console.log('Stop!');
//     break;
//   case 'yellow':
//     console.log('Slow down!');
//     break;
//   case 'blue':
//   case 'green':
//     console.log('Go!');
//     break;
//   default:
//     console.log('Wrong color!');
//     break;
// }

// for (let i = 0; i < 10; i++) {
// for (let i = 1; i < 11; i++) {
  for (let i = 1; i <= 10; i++) {
  // console.log('Hello')
  console.log(`${i}: Hello`);
}