'use strict';


{
  // JavaScript入門 DOM編#15
  // input → text, textarea, select
  // change → radio, checkbox
  // document.querySelector('input').addEventListener('input', () => {
    // const pElement = document.querySelector('p');
    // const inputElement = document.querySelector('input');
    // pElement.textContent = inputElement.value;
    // pElement.textContent = inputElement.value.length;

  // JavaScript入門 DOM編#16
  //   document.querySelector('p').textContent = 'English only!';
  // });
  // document.querySelector('input').addEventListener('blur', () => {
  //   document.querySelector('p').textContent = '';
  // });
  // document.querySelector('input').focus();
  
  // JavaScript入門 DOM編#17
  // document.addEventListener('keydown', (e) => {
  //   document.querySelector('p').textContent = e.key;
  
  // JavaScript入門 DOM編#18
  document.addEventListener('mousemove', (e) => {
    document.querySelector('p').textContent = `X: ${e.clientX} Y: ${e.clientY}`;
  });
}