'use strict';

// JavaScript入門 データ構造編#1-9
{
  const scores = [
    70, 
    90, 
    80, 
    85,
  ];
  let sum = 0;

  scores.forEach((score, index) => {
    // sum = sum + score;
    sum += score;
    // console.log(score);
    console.log(`${index}: ${score}`)
  });

  console.log(`Sum: ${sum}`);
  console.log(`Average: ${sum / scores.length}`)

  // console.log(scores[0]);
  // console.log(scores[1]);
  // console.log(scores[2]);
  // console.log(scores[3]);

  // scores.push(77, 88);
  // for (let i = 0; i < scores.length; i++) {
  //   console.log(scores[i]);
  // }

  // scores.push(65, 72);
  // console.log(scores)

  // console.log(scores[2]); // 80
  // console.log(scores.length); //4
  // scores[1] = 95;
  // console.log(scores); // [70, 95, 80, 85]
}