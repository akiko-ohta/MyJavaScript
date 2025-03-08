'use strict';

// JavaScript入門 関数編9
// {
//   function showAd() {
//     console.log("---------");
//     console.log("SALE! 50% OFF!");
//     console.log("---------");
//   }
//   function showContent() {
//     console.log("BREAKING NEWS!");
//     console.log("Two baby pandas born at our Zoo!");
//   }

//   showAd();
//   showContent();
//   showAd();
// }

// JavaScript入門 関数編10-12
{
  // 関数宣言
  // function double(num) {
  //   return num * 2;
  // }

  // 関数式（無名関数）
  //   const double = function(num) {
  //   return num * 2;
  // };

  // アロー関数式
  // const double = (num) => {
  //   return num * 2;
  // };

  // const double = num => {
  //   return num * 2;
  // };

  // const double = num => num * 2;

  const calc = (num, func) => {
    // return double()(20)
    return func(num);
  };

  // console.log(calc(20, double));
  console.log(calc(20, (num) => { 
    return num * 2;
  }));
}