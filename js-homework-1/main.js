const firsrName = 'Юрий';
const lastName = 'Багадеров';
const isStudent = true;

let age = 43;
let currentYear = 2025;
let birthYear = currentYear - age;

console.log(
  `Меня зовут ${
    firsrName + ' ' + lastName
  }, мне ${age} года. Я ученик курса: ${isStudent}`
);

let a = '123';
let b = +'456';
let c = Number('789');
let d = Boolean(0);
let e = Boolean(' ');
let result = a + b + c + d + e;
console.log(result); // 123456789falsetrue
