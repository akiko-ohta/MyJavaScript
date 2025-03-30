'use strict';


{
  // JavaScript クラス編#13
  class User {
    name;
    score;
    static count = 0; // 静的プロパティ

    constructor(name, score) {
      this.name = name;
      this.score = score;
      User.count++;
    }

    getUserString() {
      return `${this.name} ${this.score}`;
    }

    static getUserCountStrinig() { // 静的メソッド
      return `${User.count} instance(s) created.`;
    }
  }

  // let count = 0;
  const user1 = new User('Taro', 70);
  // count++;
  const user2 = new User('Jiro', 80);
  // count++;
  // console.log(count);
  // console.log(User.count);
  console.log(User.getUserCountStrinig());
  
  console.log(user1.getUserString());
  console.log(user2.getUserString());
}