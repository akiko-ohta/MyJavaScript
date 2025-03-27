'use strict';


{
  // JavaScript入門 文字列操作編#1
  // const string = prompt('Any message?');
  // console.log(string);
  // console.log(string.length);
  // console.log(string[0]);
  // string[0] = 'w';

  // JavaScript入門 文字列操作編#2
  // const string = prompt('Name?');
  // if (string.toLowerCase === 'taro') {
  // if (string.toUpperCase().trim() === 'TARO') {
  //   console.log('Correct!');
  // } else {
  //   console.log('Wrong!');
  // }
  // JavaScript入門 文字列操作編#3-5
  // const emails = [
  //   'taro@example.com',
  //   'kintaro@example.com',
  //   'kojiro@example.com',
  // ];

  // emails.forEach((email) => {
    // if (email.includes('taro') === true) {
    //   console.log(email);
    // }

  //   if (email.indexOf('taro') === 0) {
  //     console.log(email);
  //   }

  // if (email.startsWith('taro') === true) {
  //   console.log(email);
  // }

  // const loc = email.indexOf('@')
  // console.log(email.slice(0, loc));
  // console.log(email.substring(0, loc));

  // console.log(email.replace('@example.com', ''));

  // const items = email.split('@');
  // console.log(items[0]);
  // });

  // JavaScript入門 文字列操作編#6-7
  const counts = [6, 12, 8, 15];
  counts.forEach((count) => {
    // let bar= '';
    // for (let i = 0; i < count; i++) {
    //   // bar = bar + '*';
    //   bar += '*';
    // }
    const bar = '*'.repeat(count);
    // const label = String(count).padStart(2, ' ');
    const label = String(count).padEnd(2, ' ');
    console.log(`${label}: ${bar}`);
  });
}