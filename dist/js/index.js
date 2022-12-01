"use strict";

// const myname = 'uchikori'
// const age = 28
// console.log(`私の名前は${myname}、${age}歳です`);
// アロー関数
// const func1 = (num1, num2) => num1 + num2;
// const value = func1(10,12);
// console.log(value);
//分割代入
// const myProfile = {
//     name: "uchikori",
//     age: 28
// };
// const { name, age } = myProfile;
// const message1 = `私の名前は${name}です。年齢は${age}歳です`;
// console.log(message1);

/**
 * デフォルト値
 */
// const sayHello = (name = 'uchikori') => {console.log(`こんにちは${name}さん`)}
// sayHello('uchiwa');

/**
 * スプレッド構文
 */
//配列の展開
// const array1 = [1, 2];
// console.log(array1);
// console.log(...array1);
// const summary = (num1, num2) => {console.log(num1 + num2)}
// summary(array1[0], array1[1]);
// summary(...array1);
//まとめる
// const array2 = [1, 2, 3, 4, 5,];
// const [num1, num2,...array3] = array2;
// console.log(num2)
// console.log(array3)
//配列のコピー、結合
// const array4 = [10, 20];
// const array5 = [30, 40];
// const array6 = [...array4];
// console.log(array6);
// const array7 = [...array4, ...array5];
// console.log(array7);
// const array8 = array4 →これはダメ

/**
 * 配列処理
 */
var nameArray = ["田中", "山田", "uchikori"];

for (var i = 0; i < nameArray.length; i++) {
  console.log(nameArray[i]);
}

var nameArray2 = nameArray.map(function (name) {
  return name;
});
console.log(nameArray2);