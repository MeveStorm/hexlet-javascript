## domain.js

Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход 
имя сайта и возвращает информацию о нем:

```js
import getDomainInfo from './domain.js';

// Если домен передан без указания протокола,
// то по умолчанию берется http
getDomainInfo('yandex.ru')
// {
//   scheme: 'http',
//   name: 'yandex.ru',
// }


getDomainInfo('https://hexlet.io');
// {
//   scheme: 'https',
//   name: 'hexlet.io',
// }


getDomainInfo('http://google.com');
// {
//   scheme: 'http',
//   name: 'google.com',
// }
```

### Подсказки

* startsWith
* replace
* Совершенный код: нормализация данных

