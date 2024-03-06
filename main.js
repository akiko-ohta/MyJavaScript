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
let price = 150;
// 定数
const rate = 1.1;

price = 150;
console.log(price + 120 * rate)
console.log(price + 130 * rate)
console.log(price + 140 * rate)

// price = 151;
// price = price +1;
// price += 1;
// price *= 1.5;
price ++;
console.log(price + 120 * rate)
console.log(price + 130 * rate)
console.log(price + 140 * rate)

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

const n = prompt('Any number?');
console.log(Number(n) + 10);

