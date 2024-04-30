'use strict';

{
//   const moreScores = {
//     shiro: 77,
//     goro: 88,
//   };

//   const scores = {
//   taro: 80,
//   jiro: 70,
//   saburo: 90,
//   ...moreScores,
//  };
// //  const {taro, jiro, saburo} = scores;
// const {taro, ...others} = scores;

//  console.log(taro);
// //  console.log(jiro);
// //  console.log(saburo);
// console.log(others);

  // let num = 10;
  // const numBackup = num;
  // num = 99;
  // console.log(num); // 99
  // console.log(numBackup) // 10

  const nums = [10, 20, 30];
  // const numBackup = nums;
  // const numBackup = [10, 20, 30];
  const numBackup = [...nums];
  nums[0] = 99;
  console.log(nums); // [99, 20, 30]
  console.log(numBackup) // [10, 20, 30]
}