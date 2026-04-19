'use strict';
//Задание 1
const users = [
  { name: 'Alex', age: 24, isAdmin: false },
  { name: 'Bob', age: 13, isAdmin: false },
  { name: 'John', age: 31, isAdmin: true },
  { name: 'Jane', age: 20, isAdmin: false },
];

users.push(
  {
    name: 'Ann',
    age: 19,
    isAdmin: false,
  },
  { name: 'Jack', age: 43, isAdmin: true }
);

console.log(users);

//Задание 2
function getUserAverageAge(users) {
  const totalAge = users.reduce((sum, user) => sum + user.age, 0);
  return totalAge / users.length;
}

console.log(getUserAverageAge(users));

//Задание 3
function getAllAdmins(users) {
  return users.filter((user) => user.isAdmin === true);
}

console.log(getAllAdmins(users));

//Задание 4
function first(arr, n) {
  if (n === 0) {
    return [];
  }
  if (n === undefined) {
    return [arr[0]];
  }

  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(arr[i]);
  }
  return result;
}

const arr = [1, 2, 3, 4, 5];
console.log(first(arr, 3));
console.log(first(arr, 0));
console.log(first(arr));
