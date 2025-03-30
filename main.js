'use strict';


{
  // JavaScript クラス編#1-12
  class Score {
    constructor(subject, result) {
      this.subject = subject;
      this.result = result;
    }

    getGrade() {
      // let grade;
      // if (this.result >= 80) {
      //   grade = 'A';
      // } else {
      //   grade = 'B';
      // }
      // return grade;
      return this.result >= 80 ?'A' : 'B';
    }

    getScoreString() {
      return `${this.subject} ${this.result} ${this.getGrade()}`;
    }
  }

  class MathScore extends Score {
    constructor(result) {
      super('Math', result);
    }
    getGrade() {
      return this.result >= 50 ?'A' : 'B';
    }
  }

  class EnglishScore extends Score {
    constructor(result) {
      super('English', result);
    }
  }

  class User {
    // constructor(nameFormNew, scoreFromNew) {
    //   this.name = nameFormNew;
    //   this.score = scoreFromNew;
    // }
  constructor(name, score) {
    this.name = name;
    this.score = score;
    }
    getUserString() {
      // return `${this.name} ${this.score.subject} ${this.score.result}`;
      return `${this.name} ${this.score.getScoreString()}`;
    }
  }

  const user1 = new User('Taro', new MathScore(70));
  // user1.name = 'Taro';
  // user1.score = 70;
  const user2 = new User('Jiro', new EnglishScore(80));
  // user2.name = 'Jiro';
  // user2.score = 80;

  console.log(user1.getUserString());
  console.log(user2.getUserString());

  // console.log(user1.name);
  // console.log(user1.score);
  // console.log(user2.name);
  // console.log(user2.score);
}