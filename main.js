'use strict';

{
  document.querySelector('button').addEventListener('click', () => {
    // console.log(document.querySelector('p').classList.contains('pink-bg')); // false
    // if (document.querySelector('p').classList.contains('pink-bg') === false) {
    //   document.querySelector('p').classList.add('pink-bg');
    // } else {
    //   document.querySelector('p').classList.remove('pink-bg');
    // }
    // console.log('Clicked');
    // document.querySelector('p').textContent = 'こんにちは';
    // document.querySelector('p').textContent = document.querySelector('button').textContent;
    document.querySelector('p').classList.toggle('pink-bg');
  });

  // console.log('Hello');
}