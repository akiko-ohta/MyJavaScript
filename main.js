'use strict';


{
  // JavaScript入門 数値操作編#3
  // const n = Number(prompt('Yen?'));
  // const amount = (n / 138.91).toFixed(2);
  // console.log(`USD: ${Number(amount).toLocaleString()}`);

  // JavaScript入門 数値操作編#4
  // const n = Number(prompt('Count?'));
  // for (let i = 0; i < n; i++) {
  //   if ( i % 3 === 0) {
  //     console.log(`---item ${i}---`);
  //   } else {
  //     console.log(`===item ${i}===`);
  //   }
  // }
  // JavaScript入門 数値操作編#5-6
  // function getRandomInteger(max) {
  //   return Math.floor(Math.random() * (max+1));
  // }
  // for (let i = 0; i < 10; i++) {
  //   const n = getRandomInteger(5) + 1;
  //   console.log(`${i}: ${n}`);
  // }

  // JavaScript入門 数値操作編#7-8
  const scores = [70, 90, 80, 75];
  // let max = 0;

  // scores.forEach((score) => {
  //   if (score > max) {
  //     max = score;
  //   }
  // });
  // console.log(max);
  console.log(Math.max(...scores)); // 90
  console.log(Math.min(...scores)); // 70
}