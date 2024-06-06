'use strict';

{
  const n = Number(prompt('Minutes?'));
  console.log(`Hours: ${Math.floor(n / 60)}`);
  console.log(`Minutes: ${n % 60}`);
}