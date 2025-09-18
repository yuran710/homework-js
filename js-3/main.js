// Задание 1
for (let i = 1; i <= 20; i++) {
  if (i % 4 === 0) continue;
  console.log(i);
}

// Задание 2
let num = +prompt('Введите число для вычисления факториала:');
let factorial = 1;

for (let i = 1; i <= num; i++) {
  factorial *= i;
}

console.log(`Факториал числа ${num} равен ${factorial}`);

// Задание 3
let size = 8;
let board = '';

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 === 0) {
      board += 'Ч';
    } else {
      board += 'Б';
    }
  }
  board += '\n';
}

console.log(board);
