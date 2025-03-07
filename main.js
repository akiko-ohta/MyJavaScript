'use strict';

// JavaScript入門 基礎文法編14-16
// const score = Number(prompt('Score?'));

// if (score >= 90) {
//   console.log('A!');
// } else if (score >= 70) {
//   console.log('B!');
// } else {
//   console.log('C!')
// }


// JavaScript入門 基礎文法編17
// const color = prompt('Color?');

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

// JavaScript入門 基礎文法編#19
// for (let i =0; i < 10; i++) {
// for (let i =1; i < 11; i++) {
//   for (let i =1; i <= 10; i++) {
//   // console.log('Hello');
//   console.log(`${i} Hello`);
// }

// JavaScript入門 基礎文法編#20
// const rate = 1.1;

// for(let price = 150; price <= 160; price++) {
//   console.log(`Price: ${price}`);
//   for (let amount = 120; amount <= 140; amount += 10) {
//   console.log(price * amount * rate);
//   }
// }

// JavaScript入門 基礎文法編#21-22
// const command = Number(prompt('Menu 1, 2, 3 or 0 to exit));
// console.log;(`Menu ${command} processd.`);

// let command = Number(prompt('Menu 1, 2, 3 or 0 to exit'));

// while (command !== 0) {
//   console.log(`Menu ${command} processed.`);
//   command = Number(prompt('Menu 1, 2, 3 or 0 to exit'));
// }

// let command;
// do {
//   command = Number(prompt('Menu 1, 2, 3 or 0 to exit'));
//   if (command === 0) {
//     console.log('Existed');
//   } else {
//     console.log(`Menu ${command} processed.`);
//   }
// } while (command !== 0);

// JavaScript入門 基礎文法編#23
// let amount = 100;
// for (let year = 1; year <= 30; year++) {
//   amount *= 1.05;
//   if (amount < 200) {
//     continue;
//   }
//   if (amount > 300) {
//     break;
//   }
//   console.log(`Year ${year}: ${amount}`);
// }

// JavaScript入門 基礎文法編#24
// const score = Number(prompt('Score?'));
// const result = score > 80? 'A' : 'B';
// console.log(result);

// JavaScript入門 基礎文法編#25
// const english = Number(prompt('English?'));
// const math = Number(prompt('Math?'));

// if (!(english >= 80 && math >= 80)) {
//   console.log('A');
// } else {
//   console.log('B');
// }

// JavaScript入門 基礎文法編#26
// let x = 10;
// {
//   // let x = 20;
//   x = 20;
//   console.log(x); // 20
// }

// console.log(x); // 20

// JavaScript入門 基礎文法編#27
{
  let x = 10;
  console.log(x);
}
