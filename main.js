'use strict';


{
  // JavaScript入門 データ構造編#15-16
  // const scores = [70, 90, 80, 85];

  // scores.splice(2, 0, 77, 88);
  // // [70, 90, 77, 88, 80, 85]

  // const deleted = scores.splice(3, 1);
  // // [70, 90, 77, 80, 85]
  // // [88]

  // scores.splice(2, 2, 30);
  // // [70, 90, 30, 85]

  // console.log(scores);
  // console.log(deleted);

  // JavaScript入門 データ構造編#17
  // const names = ['Taro', 'Jiro', 'Saburo'];

  // Taro|Jiro|Saburo
  // console.log(names.join('|'));
  // console.log(names.join());
  // console.log(names.join(''));

  // const names = 'Taro|Jiro|Saburo';
  // console.log(names.split('|'));

  // JavaScript入門 データ構造編#18-19
  const prices = [100, 150, 200];

  // const pricesOver150 = [];
  // prices.forEach((price) => {
  //   if (price >= 150) {
  //     pricesOver150.push(price);
  //   }
  // });

  const pricesOver150= prices.filter((price) => {
    return price >= 150;
  })

  console.log(pricesOver150);

  // const pricesWithTax = [];
  // prices.forEach((price) => {
  //   pricesWithTax.push(price * 1.1);
  // });

  // const pricesWithTax = prices.map((price) => {
  //   return price * 1.1;
  // });

  // console.log(pricesWithTax);
}