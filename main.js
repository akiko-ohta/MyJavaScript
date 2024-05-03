'use strict';

{
  document.querySelector('button').addEventListener('click', () => {
    document.querySelector('p').classList.add('pink-bg', 'red-border');
    document.querySelector('p').classList.remove('green-color');
    // console.log('Clicked');
    // document.querySelector('p').textContent = 'こんにちは';
    // document.querySelector('p').textContent = document.querySelector('button').textContent;
  });

  // console.log('Hello');
}