'use strict';


{
  // JavaScript入門 データ構造編#20
  //   const scores = [70, 90, 80, 85];
    // const first = scores[0];
    // const second = scores[1];
    // const third = scores[2];
    // const fourth = scores[3];
  //   const [first, second, third, fourth] = scores;

  //   console.log(first);
  //   console.log(second);
  //   console.log(third);
  //   console.log(fourth);

  // JavaScript入門 データ構造編#21
  // let start = 'Tokyo';
  // let goal = 'Osaka';

  // start = goal; // start = Osaka
  // goal = start; // goal = Osaka

  // let temp = '';
  // temp = start;
  // start = goal;
  // goal = temp;

  // [goal, start] = [start, goal]

  // console.log(start);
  // console.log(goal);

  // JavaScript入門 データ構造編#22-23
  // const moreScores = [77, 88]
  // const scores = [70, 90, 80, 85, ...moreScores];
  // const [first, ...others] =scores;

  // console.log(first);
  // console.log(others);

  // JavaScript入門 データ構造編#22-24
  // const moreScores = {
  //   shiro: 77,
  //   goro: 88,
  // };
  // const scores = {
  //   taro: 80,
  //   jiro: 70,
  //   saburo: 90,
  //   ...moreScores,
  // };
  // // const {taro, jiro, saburo} = scores;
  // const {taro, ...others} = scores;

  // console.log(taro);
  // // console.log(jiro);
  // // console.log(saburo);
  // console.log(others);

    // JavaScript入門 データ構造編#25-27
    // let num = 10;
    // const numBackup = num;
    // num = 99;
    // console.log(num); // 99
    // console.log(numBackup); // 10

    const nums = [10, 20, 30];
    // const numsBackup = nums;
    // const numsBackup = [10, 20, 30];
    const numsBackup = [...nums];
    nums[0] = 99;
    console.log(nums); // [99, 20, 30]
    console.log(numsBackup); // [10, 20, 30]
}