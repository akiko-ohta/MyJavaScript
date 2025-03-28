'use strict';


{
  // JavaScript入門 日時操作編#1-2
  // const d = new Date();
  // console.log(d);
  // console.log(d.toLocaleString());
  // console.log(d.getFullYear());
  // console.log(d.getMonth()); // 0, 1, 2, ...
  // console.log(d.getDate());
  // console.log(d.getHours());
  // console.log(d.getMinutes());
  // console.log(d.getSeconds());
  // console.log(d.getMilliseconds());
  // console.log(d.getDay()); // 0, 1, 2, ...

  // JavaScript入門 日時操作編#3
  // 2000 4 11
  // const d = new Date(2000, 3, 11);
  //2000 2 ??
  // const d = new Date(2000, 2, 0);
  // console.log(d.toLocaleString());

  // JavaScript入門 日時操作編#4-6
  // 2000 4 11
  // const d = new Date(2000, 3, 11);
  // const dBacnup = d;
  // const dBacnup = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  // const dBacnup = new Date(d.getTime());
  // d.setDate(23);
  // d.setDate(d.getDate() + 100);

  // console.log(d.toLocaleString());
  // console.log(dBacnup.toLocaleString());

  // console.log(d);
  // UTC
  // 1970/01/01 00:00:00
  // Unix Timestamp
  // console.log(d.getTime());

  // const d2= new Date(d.getTime() + 1000);
  // console.log(d2);

  // JavaScript入門 日時操作編#7
  // 2023 6 10
  // 
  // const diff = new Date().getTime() - new Date(2023, 5, 10).getTime();
  // const diff = Date.now().getTime() - new Date(2023, 5, 10).getTime();
  // const days = Math.floor(diff / 1000 / 60 / 60 / 24);
  
  // console.log(diff);
  // console.log(days);

  // JavaScript入門 日時操作編#8
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const d = new Date(2001, 0, 1);
  // January 01, Monday
  const month = months[d.getMonth()];
  const date = String(d.getDate()).padStart(2, '0');
  const day = days[d.getDay()];
  console.log(`${month} ${date}, ${day}`);
}