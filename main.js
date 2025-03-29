'use strict';


{
  // JavaScript データ型編#1-4
  // true false
  // let mode = 'dev';
  // let mode = 'normal';
  // let isDevMode = true;
    // let isDevMode = false;

  // let isDevMode = true;
  // const pElemment = document.querySelector('p');
  // const buttonElemment = document.querySelector('button');

  // buttonElemment.addEventListener('click', () => {
  //   if (confirm('Are you sure?')) {
  //         // if (isDevMode === true) {
  //   if (isDevMode) {
  //     pElemment.textContent ='Dev Mode is Off.';
  //     // isDevMode = false;
  //   } else {
  //     pElemment.textContent ='Dev Mode is On.';
  //     // isDevMode = true;
  //   }
  //   isDevMode = !isDevMode;
  //   }
  // });

  // JavaScript データ型編#5
  // buttonElemment.addEventListener('click', () => {
    // if (confirm('Are you sure?') === false) {
  //     if (!confirm('Are you sure?')) {
  //     return;
  //   }

  //   if (isDevMode) {
  //     pElemment.textContent ='Dev Mode is Off.';
  //   } else {
  //     pElemment.textContent ='Dev Mode is On.';
  //   }
  //   isDevMode = !isDevMode;
  // });

  // JavaScript データ型編#6
  // const name = prompt('Your name?');
  // if (name !== '') {
  // if (name) {
  //   console.log(`Hi, ${name}`);
  // } else {
  //   console.log('Hi, nobody!');
  // }

  // JavaScript データ型編#7
  // undefined
  // let x;
  // console.log(x);

  // const scores = [70, 80, 90];
  // console.log(scores[100]);

  // const score = {math: 80, english: 90};
  // console.log(score.history);
  // if (score.history === undefined) {
  //   console.log('History score not difined!');
  // }

  // JavaScript データ型編#8
  // null
  // const score = {
  //   math: 80,
  //   english: 90,
  //   physics: null,
  // };
  // console.log(score.history);
  // if (score.physics === null) {
  //   console.log('Physics score is null!');
  // }

  // JavaScript データ型編#8
  // typeof
  console.log(typeof 5); // number
  console.log(typeof 'Hello'); // string
  console.log(typeof [5, 8]); // object
  console.log(typeof {math: 80, english: 90}); // object
  console.log(typeof true); // boolean
  console.log(typeof undefined); // undefined
  console.log(typeof null); // object
}