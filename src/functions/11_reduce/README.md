## groupBy.js

Реализуйте и экспортируйте по умолчанию функцию для группировки объектов по заданному 
свойству. Функция принимает аргументами массив объектов и название свойства для группировки.
Она должна возвращать объект, где ключ - это значение по заданному свойству, а значение - 
массив с данными, подходящими для группы.

```js
import groupBy from './groupBy.js';
 
const students = [
  { name: 'Tirion', class: 'B', mark: 3 },
  { name: 'Keit', class: 'A', mark: 3 },
  { name: 'Ramsey', class: 'A', mark: 4 },
];
 
groupBy([], ''); // {}
groupBy(students, 'mark');
// {
//   3: [
//     { name: "Tirion", class: "B", mark: 3 },
//     { name: "Keit", class: "A", mark: 3 },
//   ],
//   4: [
//     { name: "Ramsey", class: "A", mark: 4 },
//   ],
// }
```
