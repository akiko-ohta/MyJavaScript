'use strict';


{
    // JavaScript入門 DOM編#6-7
  document.querySelector('button').addEventListener('click', () => {
    // document.querySelector('#second').textContent = 'Canged!';
    // document.querySelectorAll('li')[0].textContent = 'Canged!';
    // document.querySelectorAll('li')[1].textContent = 'Canged!';
    // document.querySelectorAll('li')[2].textContent = 'Canged!';
    // document.querySelectorAll('.target').forEach((li) => {
    //   li.textContent = 'Changed!'
    // });

    // JavaScript入門 DOM編#8-10
    const liElement = document.createElement('li');
    liElement.textContent = 'Hanako';
    // document.querySelector('ul').appendChild(liElement);
    // document.querySelector('ul').insertBefore(
    //   liElement,
    //   document.querySelector('#second')
    // );
    if (confirm('Sure?') === true) {
      document.querySelector('#second').remove();
    }
  });
}