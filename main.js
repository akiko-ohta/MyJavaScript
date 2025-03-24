'use strict';


{
  // JavaScript入門 数値操作編#1
  // const n = Number(prompt('Number?'));
  // console.log(n + 5);

    // JavaScript入門 数値操作編#2
    const n = Number(prompt('Minutes?'));
    console.log(`Hours: ${Math.floor(n / 60)}`);
    console.log(`Minutes: ${n % 60}`);
}