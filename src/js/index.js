// const myname = 'uchikori'
// const age = 28

// console.log(`私の名前は${myname}、${age}歳です`);

// アロー関数
const func1 = (num1, num2) => num1 + num2;

const value = func1(10,12);
console.log(value);

//分割代入
const myProfile = {
    name: "uchikori",
    age: 28
};
const { name, age } = myProfile;
const message1 = `私の名前は${name}です。年齢は${age}歳です`;
console.log(message1);