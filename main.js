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