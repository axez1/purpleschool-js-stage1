let getYourLang = String(prompt('Введите ваш язык из списка: ru, de, en, fr, ua'));

switch (getYourLang) {
  case 'ru':
    alert('Привет');
    break;
  case 'de':
    alert('Hallo');
    break;
  case 'en':
    alert('Hello there');
    break;
  case 'fr':
    alert('Bonjour');
    break;
  case 'ua':
    alert('Привіт');
    break;
  default:
    alert('Такой язык система не поддерживает!');
}