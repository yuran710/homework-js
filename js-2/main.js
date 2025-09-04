// Задание 1
let num = 10;
if (num % 2 === 0) {
  console.log(num + ' — чётное число');
} else {
  console.log(num + ' — нечётное число');
}

// Задание 2
let age = 45;
let discount = age < 18 ? '10%' : age <= 65 ? '20%' : '30%';

console.log('Скидка: ' + discount);

// Задание 3
let username = prompt('Введите имя пользователя:');
let password = prompt('Введите пароль:');

if ((username === 'admin' || username === 'user') && password === '123456') {
  console.log('Доступ разрешен');
} else {
  console.log('Доступ запрещен');
}

// Задание 4
let weight = parseFloat(prompt('Введите вес посылки (кг):'));
let deliveryType = prompt(
  'Введите тип доставки (Стандарт, Экспресс, Премиум):'
);

if (isNaN(weight) || weight <= 0) {
  alert('Некорректный вес посылки');
} else if (
  deliveryType !== 'Стандарт' &&
  deliveryType !== 'Экспресс' &&
  deliveryType !== 'Премиум'
) {
  alert('Неверный тип доставки');
} else {
  let baseCost = weight < 1 ? 5 : weight <= 5 ? 10 : 15;
  let coefficient;
  if (deliveryType === 'Стандарт') {
    coefficient = 1;
  } else if (deliveryType === 'Экспресс') {
    coefficient = 1.5;
  } else {
    coefficient = 2;
  }

  let totalCost = baseCost * coefficient;

  alert('Итоговая стоимость доставки: ' + totalCost + '$.');
}
