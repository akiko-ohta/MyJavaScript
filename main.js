'use strict';

{
  // const scores =[70, 90, 80, 85];
  // // const first = scores[0];
  // // const second = scores[1];
  // // const third = scores[2];
  // // const fourth = scores[3];
  // const [first, second, third, fourth] = scores;

  // console.log(first);
  // console.log(second);
  // console.log(third);
  // console.log(fourth);

  // let start = 'Tokyo';
  // let goal = 'Osaka';

  // // start = goal; // start = Osaka
  // // goal = start; // goal = Osaka

  // // let temp = '';
  // // temp = start;
  // // start = goal;
  // // goal = temp;

  // [goal, start] = [start, goal];

  // console.log(start);
  // console.log(goal);

  const moreScores = [77, 88]
  const scores = [70, 90, 80, 85, ...moreScores];
  const [first, ...others] = scores;

  console.log(first);
  console.log(others);
}