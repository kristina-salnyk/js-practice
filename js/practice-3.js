// Массивы

// Example 1 - Базовые операции с массивом
// Создайте массив genres с элементами «Jazz» и «Blues».
// Добавьте «Рок-н-ролл» в конец.
// Выведите в консоль первый элемент массива.
// Выведите в консоль последний элемент массива. Код должен работать для массива произвольной длины.
// Удалите первый элемент и выведите его в консоль.
// Вставьте «Country» и «Reggy» в начало массива.

const genres = ['Jazz', 'Blues'];
genres.push('Rock&Roll');

console.log(genres[0]);

console.log(genres[genres.length - 1]);
console.log(genres.at(-1)); // last element

// console.log(genres.splice(0, 1)[0]);
console.log(genres.shift());

// genres.splice(0, 0, 'Country', 'Reggy');
genres.unshift('Country', 'Reggy');

console.log(genres);

// Example 2 - Массивы и строки
// Напиши скрипт для вычисления площади прямоугольника со сторонами, значения которых хранятся
// в переменной values в виде строки.Значения гарантированно разделены пробелом.

const values = '8 11';
const param = values.split(' ');
console.log(Number(param[0]) * Number(param[1]));

// Example 3 - Перебор массива
// Напиши скрипт для перебора массива fruits циклом for. Для каждого элемента массива выведи в
// консоль строку в формате номер_элемента: значение_элемента.Нумерация элементов должна начинаться с 1.

const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
for (let i = 0; i < fruits.length; i++) {
  console.log(`${i + 1}: ${fruits[i]}`);
}

// fruits.map((fruit, index) => console.log(`${index + 1}: ${fruit}`));

// Example 4 - Массивы и циклы
// Напиши скрипт который выводит в консоль имя и телефонный номер пользователя. В переменных
// names и phones хранятся строки имен и телефонных номеров, разделенные запятыми.Порядковый
// номер имен и телефонов в строках указывают на соответствие.Количество имен и телефонов
// гарантированно одинаковое.

const names = 'Jacob,William,Solomon,Artemis';
const phones = '89001234567,89001112233,890055566377,890055566300';

const arrOfNames = names.split(',');
const arrOfPhones = phones.split(',');

for (let i = 0; i < arrOfNames.length; i++) {
  console.log(`name: ${arrOfNames[i]}, phone: ${arrOfPhones[i]}`);
}

// names
//   .split(',')
//   .forEach((name, index) => console.log(`name: ${name}, phone: ${phones.split(',')[index]}`));

// Example 5 - Массивы и строки
// Напиши скрипт который выводит в консоль все слова строки кроме первого и последнего.
// Результирующая строка не должна начинаться или заканчиваться пробельным символом.Скрипт должен
// работать для любой строки.

const string = 'Welcome      to the       future';
const arr = string.split(' ').slice(1, -1).join(' ').trim();
console.log(arr);

// Example 6 - Массивы и строки
// Напиши скрипт который «разворачивает» строку (обратный порядок букв) и выводит ее в консоль.

const string2 = 'Welcome to the future';
// const arr2 = string2.split(' ').reverse().join(' ');
const arr2 = string2.split('').reverse().join('');
console.log(arr2);

// Example 7 - Сортировка массива с циклом
// Напиши скрипт сортировки массива строк в алфавитном порядке по первой букве элемента.

const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
const sortLangs = langs.sort((a, b) => a.localeCompare(b));
console.log(sortLangs);

// Example 8 - Поиск элемента
// Напиши скрипт поиска самого маленького числа в массиве. Код должен работать для любого массива
// чисел. Используй цикл для решения задачи.

const numbers = [2, 17, 94, 1, 23, 37];
// let min = Math.min(...numbers);
let min = numbers[0];
numbers.forEach(num => {
  if (num < min) min = num;
});
console.log(min); // 1
