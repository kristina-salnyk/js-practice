// Коллбеки. Стрелочные функции. forEach

// Example 1 - Коллбек функции
// Напишите следующие функции:

// createProduct(obj, callback) - принимает объект товара без id, а также колбек.
// Функция создаёт обьект товара, добавляя ему уникальный идентификатор в свойство
//  id и вызывает колбек передавая ему созданный обьект. logProduct(product) -
// коллбек принимающий обьект продукта и логирующий его в консоль
// logTotalPrice(product) - коллбек принимающий обьект продукта и логирующий
// общую стоимость товара в консоль

// Решение
const createProduct = (obj, callback) => {
  callback({ id: Date.now(), ...obj });
};

const logProduct = product => {
  console.log('Product: ', product);
};

const logTotalPrice = product => {
  console.log(product.price * product.quantity);
};

createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

// Example 2 - Коллбек функции
// Добавьте объекту account методы withdraw(amount, onSuccess, onError) и
// deposit(amount, onSuccess, onError), где первый параметр это сумма операции,
// а второй и третий - колбеки. Метод withdraw вызывает onError если amount
// больше TRANSACTION_LIMIT или this.balance, и onSuccess в противном случае.
// Метод deposit вызывает onError если amount больше TRANSACTION_LIMIT или меньше
// либо равен нулю, и onSuccess в противном случае.

// Решение
const TRANSACTION_LIMIT = 1000;

const account = {
  name: 'Jacob',
  balance: 400,
  withdraw(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) onError('Limit is exceeded');
    else if (amount > this.balance)
      onError(`Amount exceeds your balance. Balance: ${this.balance}`);
    else {
      this.balance -= amount;
      onSuccess(`Your balance: ${this.balance}`);
    }
  },
  deposit(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) onError('Limit is exceeded');
    else if (amount <= 0) onError('Amount is not positive');
    else {
      this.balance += amount;
      onSuccess(`Your balance: ${this.balance}`);
    }
  },
};

const handleSuccess = message => {
  console.log(`✅ Success! ${message}`);
};
const handleError = message => {
  console.log(`❌ Error! ${message}`);
};

account.withdraw(2000, handleSuccess, handleError);
account.withdraw(600, handleSuccess, handleError);
account.withdraw(300, handleSuccess, handleError);
account.deposit(1700, handleSuccess, handleError);
account.deposit(0, handleSuccess, handleError);
account.deposit(-600, handleSuccess, handleError);
account.deposit(600, handleSuccess, handleError);

// Example 3 - Коллбек функции
// Напишите функцию each(array, callback), которая первым параметром ожидает
// массив, а вторым - функцию, которая применится к каждому элементу массива.
// Функция each должна вернуть новый массив, элементами которого будут результаты
// вызова коллбека.

// Решение

const each = (array, callback) => {
  const newArray = [];
  array.forEach(element => {
    newArray.push(callback(element));
  });
  return newArray;
};

console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value * 2;
  })
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value - 10;
  })
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return Math.sqrt(value);
  })
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.ceil(value);
  })
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.floor(value);
  })
);

// Example 4 - Стрелочные функции
// Выполните рефакторинг кода используя стрелочные функции.

const createProductNew = (partialProduct, callback) =>
  callback({ id: Date.now(), ...partialProduct });

const logProductNew = product => console.log(product);

const logTotalPriceNew = product => console.log(product.price * product.quantity);

createProductNew({ name: '🍎', price: 30, quantity: 3 }, logProductNew);
createProductNew({ name: '🍋', price: 20, quantity: 5 }, logTotalPriceNew);

// Example 5 - Стрелочные функции
// Выполните рефакторинг кода используя стрелочные функции.

const accountNew = {
  username: 'Jacob',
  balance: 400,
  withdraw(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
    } else if (amount > this.balance) {
      onError(`Amount can't exceed account balance of ${this.balance} credits`);
    } else {
      this.balance -= amount;
      onSuccess(`Account balance: ${this.balance}`);
    }
  },
  deposit(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
    } else if (amount <= 0) {
      onError(`Amount must be more than 0 credits`);
    } else {
      this.balance += amount;
      onSuccess(`Account balance: ${this.balance}`);
    }
  },
};

const handleSuccessNew = message => console.log(`✅ Success! ${message}`);

const handleErrorNew = message => console.log(`❌ Error! ${message}`);

account.withdraw(2000, handleSuccessNew, handleErrorNew);
account.withdraw(600, handleSuccessNew, handleErrorNew);
account.withdraw(300, handleSuccessNew, handleErrorNew);
account.deposit(1700, handleSuccessNew, handleErrorNew);
account.deposit(0, handleSuccessNew, handleErrorNew);
account.deposit(-600, handleSuccessNew, handleErrorNew);
account.deposit(600, handleSuccessNew, handleErrorNew);

// Example 6 - Инлайн стрелочные функции
// Выполните рефакторинг кода используя стрелочные функции.

const eachNew = (array, callback) => {
  const newArr = [];
  for (const el of array) {
    newArr.push(callback(el));
  }
  return newArr;
};

console.log(eachNew([64, 49, 36, 25, 16], value => value * 2));
console.log(eachNew([64, 49, 36, 25, 16], value => value - 10));
console.log(eachNew([64, 49, 36, 25, 16], value => Math.sqrt(value)));
console.log(eachNew([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));
console.log(eachNew([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.floor(value)));

// Example 7 - Метод forEach
// Выполните рефакторинг кода используя метод forEach и стрелочные функции.

const logItems = items => {
  console.log(items);
  // for (let i = 0; i < items.length; i += 1) {
  items.forEach((element, index) => console.log(`${index + 1} - ${element}`));
  // }
};

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// Example 8 - Метод forEach
// Выполните рефакторинг кода используя метод forEach и стрелочные функции.

const printContactsInfo = ({ names, phones }) => {
  const data = [];
  names.split(',').forEach(element => {
    data.push(new Array(element));
  });
  phones.split(',').forEach((element, index) => {
    data[index].push(element);
  });
  // for (let i = 0; i < nameList.length; i += 1) {
  data.forEach(element => console.log(`${element[0]}: ${element[1]}`));
  // }
};

printContactsInfo({
  names: 'Jacob,William,Solomon,Artemis',
  phones: '89001234567,89001112233,890055566377,890055566300',
});

// Example 9 - Метод forEach
// Выполните рефакторинг кода используя метод forEach и стрелочные функции.

const calсulateAverage = (...args) => {
  let total = 0;
  // for (let i = 0; i < args.length; i++) {
  args.forEach(element => (total += element));
  // }
  return total / args.length;
};

console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
console.log(calсulateAverage(14, 8, 2)); // 8
console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2
