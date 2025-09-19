const CURRENCY = 'JPY'; 
const EXACT_DATE = '20240127';
const BASE_URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange';
const url = new URL(BASE_URL);

url.search = new URLSearchParams({
  date: EXACT_DATE,
  valcode: CURRENCY,
  json: '' 
}).toString();

console.log(url.href);

