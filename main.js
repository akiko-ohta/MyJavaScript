'use strict';


{
  // JavaScript入門 DOM編#1-3
  // document.querySelector('button').addEventListener('click', () => {
    // console.log('Clicked');
    // document.querySelector('p').textContent = 'こんにちは';
    // document.querySelector('p').textContent = document.querySelector('button').
    // textContent;
  // });

  // console.log('Hello');

  // JavaScript入門 DOM編#4-5
  document.querySelector('button').addEventListener('click', () => {
    // document.querySelector('p').classList.add('pink-bg', 'red-border');
    // document.querySelector('p').classList.remove('green-color');
    // console.log(document.querySelector('p').classList.contains('pink-bg')); // false
    // if (document.querySelector('p').classList.contains('pink-bg') === false) {
    //   document.querySelector('p').classList.add('pink-bg');
    // } else {
    //   document.querySelector('p').classList.remove('pink-bg');
    // }
    document.querySelector('p').classList.toggle('pink-bg');
  });
}