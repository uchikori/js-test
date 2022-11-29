"use strict";

// const myname = 'uchikori'
// const age = 28
// console.log(`私の名前は${myname}、${age}歳です`);
// アロー関数
var func1 = function func1(num1, num2) {
  return num1 + num2;
};

var value = func1(10, 12);
console.log(value); //分割代入

var myProfile = {
  name: "uchikori",
  age: 28
};
var name = myProfile.name,
    age = myProfile.age;
var message1 = "\u79C1\u306E\u540D\u524D\u306F".concat(name, "\u3067\u3059\u3002\u5E74\u9F62\u306F").concat(age, "\u6B73\u3067\u3059");
console.log(message1);