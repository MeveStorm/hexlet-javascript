const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

const getFreeDomainsCount = (emails) => emails
  .map((email) => {
    const [, domain] = email.split('@');
    return domain;
  })
  .filter((email) => freeEmailDomains.includes(email))
  .reduce((acc, email) => {
    acc[email] = (acc[email] ?? 0) + 1;
    return acc;
  }, {});

export default getFreeDomainsCount;
