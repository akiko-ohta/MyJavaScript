'use strict';


{
  // JavaScript入門 DOM編#11-14
  document.querySelector('button').addEventListener('click', () => {
  // alert(document.querySelector('input').value);
  // alert(document.querySelector('textarea').value);
  // document.querySelector('textarea').value = '';
  // alert(document.querySelector('select').value);
    // document.querySelectorAll('input').forEach((radio) => {
    //   if (radio.checked === true) {
    //     alert(radio.value);
    //   }
    // });
    const colors = [];
    document.querySelectorAll('input').forEach((checkbox) => {
      if (checkbox.checked === true) {
        colors.push(checkbox.value);
      }
    });
    alert(colors.join(','));
  });
}