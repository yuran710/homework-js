// Задание 1
const person = {
  firstName: 'Иван',
  lastName: 'Иванов',
  age: 30,
  occupation: 'Разработчик',
};

console.log(person);

// Задание 2
function isEmpty(object) {
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

console.log(isEmpty({}));
console.log(isEmpty({ name: 'Алексей' }));

// Задание 3
const task = {
  title: 'Изучить JavaScript',
  description: 'Разобраться с объектами и методами',
  isCompleted: false,
};

function cloneAndModify(object, modifications) {
  const newTask = { ...object, ...modifications };

  for (let prop in newTask) {
    console.log(`${prop}: ${newTask[prop]}`);
  }

  return newTask;
}

cloneAndModify(task, { isCompleted: true });

// Задание 4
const callAllMethods = (object) => {
  for (let key in object) {
    if (typeof object[key] === 'function') {
      object[key]();
    }
  }
};

const myObject = {
  method1() {
    console.log('Метод 1 вызван');
  },
  method2() {
    console.log('Метод 2 вызван');
  },
  property: 'Это не метод',
};

callAllMethods(myObject);
