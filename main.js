'use strict';


{
  // JavaScriptタイマー編#1-2
//   console.log(new Date());
//   setInterval(() => {
//   console.log(new Date());
//  }, 1000);

  // JavaScriptタイマー編#3-5
  // let count = 3;

  // const intervalID = setInterval(() => {
  //   console.log(count);
  //   count--;
  //   if (count < 0) {
  //     clearInterval(intervalID);
  //   }
  // }, 1000);

  // console.log(`ID: ${intervalID}`);

  // JavaScriptタイマー編#3-5
  // setTimeout(() => {
    // console.log('50% OFF!')
  //   window.location.href = 'http://256times.com';
  // }, 3000);

  // console.log('Page loaded')

  // JavaScriptタイマー編#6-10
  // setTimeout(() => {
  //   console.log(new Date());
  //   setTimeout(() => {
  //     console.log(new Date());
  //     setTimeout(() => {
  //       console.log(new Date());
  //     }, 1000);
  //   }, 1000);
  // }, 1000);

  const pElement = document.querySelector('p');
  const buttonElement = document.querySelector('button');
  let timeoutId;

  // 再帰関数
  function showClock() {
    timeoutId = setTimeout(() => {
      pElement.textContent = new Date();
      showClock();
    }, 1000);
  }

  buttonElement.addEventListener('click', () => {
    clearTimeout(timeoutId);
  });

  showClock();
}