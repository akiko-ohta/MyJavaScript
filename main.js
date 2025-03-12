'use strict';

// JavaScript入門 データ構造編#10-14
{
  const scores = {
    math: 80,
    english: 90,
  };
  let sum = 0;

  scores.physics = 70;

  const entries = Object.entries(scores);
  // console.log(entries);
  entries.forEach((prop) => {
    // console.log(prop);
    sum += prop[1];
    console.log(`${prop[0]}: ${prop[1]}`)
  });
  console.log(`Sum: ${sum}`);
  console.log(`Average: ${sum / entries.length}`);

  // scores.physics = 70;
  // delete scores.english;
  // console.log(scores);

  // console.log(scores['english']);
  // console.log(scores.english);
  // // scores['math'] = 88;
  // scores.math = 88;
  // console.log(scores);
}