'use strict';

{
  function caluclateTotal(price, amount, rate = 1.1) {
    // if (amount >= 100) {
    //   return price * amount;
    // } else {
    // return price * amount * rate;
    // }

// 早期リターン
    if (amount >= 100) {
      return price * amount;
    }
    return price * amount * rate;
    }

  console.log(caluclateTotal (100, 100));
  console.log(caluclateTotal (1000, 10));
}

{
  function double(num) {
    return num * 2;
  }

  function triple(num) {
    return num *3;
  }

  console.log(double(10));
  // console.log(num);
  console.log(triple(20))
}

{
  
  function showAd() {
    console.log("---------");
    console.log("SALE! 50% OFF!");
    console.log("---------");
  }

  function showContent() {
    console.log("BREAKING NEWS!");
    console.log("Two baby pandas born at our Zoo!");
  }

  showAd();
  showContent();
  showAd();
}

{
  // 関数宣言
  // function double(num){
  //   return num * 2
  // }
  
  // 関数式
  // const double = function(num) {
  //   return num * 2
  // };

  // アロー関数式
  // const double = num => {
  //   return num * 2;
  // };

  // 以下は特殊な状況のみ

  // const double = (num) => {
  //   return num * 2;
  // };

  // const double = num => num * 2;

  const calc = (num, func) => {
    // return double(20)
    return func(num);
  };

  // console.log(calc(20, double));

  console.log(calc(20, (num) => {
    return num * 2;
  }));

  // console.log(double(10));
}