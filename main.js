'use strict';

// JavaScript入門 関数編1-3
// {
//   function double(num) { // 仮引数
//     return num * 2; 
//   }
//   console.log(double(10)); // 実引数
//   console.log(double(4) * 3);
// }

// JavaScript入門 関数編4-5
// {
//   function sum(a, b) {
//     return a + b;
//   }

//   console.log(sum(300, 700));
// }

// {
//   function sum(a, b) {
//     console.log(a + b);
//     // return undefined;
//   }

  // console.log(sum(300, 700));
  // console.log(sum(300, 700) * 3);
// }

// JavaScript入門 関数編6-7
// {
//   function calculateTotal(price, amount, rate = 1.1) {
    // if (amount >= 100) {
    //   return price * amount;
    // } else {
    //   return price * amount * rate;
    // }
    // 早期リターン
  //   if (amount >= 100) {
  //     return price * amount;
  //   }
  //     return price * amount * rate;
  // }

  // console.log(calculateTotal(100, 100));
  // console.log(calculateTotal(1000, 10));
  // console.log(calculateTotal(200, 10));
  // console.log(calculateTotal(120, 10, 1.08));
// }

// JavaScript入門 関数編8
// {
//   function double(num) {
//     return num * 2;
//   }

// function triple(num) {
//   return num * 3;
// }

//   console.log(double(10));
//   // console.log(num);
//   console.log(triple(20));
// }