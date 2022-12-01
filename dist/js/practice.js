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
// const nameArray = ["田中","山田","uchikori"];
// for(let i = 0; i < nameArray.length; i++) {
//     console.log(nameArray[i]);
// }
// const nameArray2 = nameArray.map(function(name){
//     return name;
// });
// console.log(nameArray2);
// nameArray.map(function(name, index){
//     console.log(`${index + 1}番目は${name}です`);
// })
// const numArray = [1,2,3,4,5];
// const newNumArray = numArray.filter(function(num){
//     if(num % 2 === 1){
//         return num;
//     }
// })
// console.log(newNumArray);
// const newNameArray = nameArray.map(function(name){
//     if(name === 'uchikori'){
//         return name;
//     }else{
//         return `${name}さん`
//     }
// })
// console.log(newNameArray);

/**
 * 三項演算子
 */
//ある条件 ? 条件がtrue : 条件がfalse;
// const num = '1300';
// const formattedNum = typeof num === 'number' ? num.toLocaleString(9) :'数値を有力してください';
// console.log(formattedNum);
// const checkSum = (num1, num2) => {
//     return num1 + num2 > 100 ? '100を超えています' : '許容範囲内です'
// }
// console.log(checkSum(51, 50));

/**
 * 論理演算子の本当の意味
 */
// const flag1 = true;
// const flag2 = false;
// if(flag1 || flag2){
//     console.log("１か２はtrueです");
// }
// if(flag1 || !flag2){
//     console.log("１はtrueで2はfalseです")
// }
//{||}の左側がfalseの場合右側を返す、trueならそのまま左側を返す
var num = null;
var fee = num || '金額未設定';
console.log(fee); //{&&}は左側がtrueなら右側を返す、falseならそのまま左側を返す

var num2 = 100;
var fee2 = num2 && '何か設定されました';
console.log(fee2);