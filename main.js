'use strict';

{
  // const names = ['Taro', 'Jiro', 'Saburo'];
  // Taro|Jiro|Saburo
  // console.log(names.join('|'));
  // console.log(names.join(''));
  // console.log(names.join(','));

  // const names = 'Taro|Jiro|Saburo';
  // console.log(names.split('|'));

  const prices = [100, 150, 200];

  // const pricesOver150 = [];
  // prices.forEach((price) => {
  //   if (price >= 150) {
  //     pricesOver150.push(price);
  //   }
  // });

  const pricesOver150 =prices.filter ((price) => {
    return price >= 150;
  });

  console.log(pricesOver150);

  // const pricesWithTax = [];
  // prices.forEach((price) => {
  //   pricesWithTax.push(price * 1.1);
  // });

  // const pricesWithTax = prices.map((price) => {
  //   return price * 1.1
  // });
  // console.log(pricesWithTax)
}