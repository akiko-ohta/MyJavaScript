'use strict';

{
  function double (num) { //　仮引数
    return num * 2;
  }
  
  console.log(double(10)); // 実引数
  console.log(double(4) * 3); // 実引数
}

{
  function sum (a, b){
    return a + b;
   }
  
// console.log(sum(300, 700));
// }

// function sum (a, b){
//  console.log (a + b);
//  return undefined;
// }

// console.log(sum(300, 700));
console.log(sum(300, 700)*3);
}