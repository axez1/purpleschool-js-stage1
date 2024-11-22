const converterMoney = (cash, myNameCash, needNameCash) => {
  let rate;
  let result;

  switch (myNameCash) {
    case 'rub':
      switch (needNameCash) {
        case 'usd': rate = 0.01;
          break;
        case 'eur': rate = 0.009;
          break;
        case 'rub': rate = 1;
          break;
        default:
          return null;
      }
      break;
    case 'usd':
      switch (needNameCash) {
        case 'usd': rate = 1;
          break;
        case 'eur': rate = 0.95;
          break;
        case 'rub': rate = 100.68;
          break;
        default:
          return null;
      }
      break;
    case 'eur':
      switch (needNameCash) {
        case 'usd': rate = 1.05;
          break;
        case 'eur': rate = 1;
          break;
        case 'rub': rate = 106.08;
          break;
        default:
          return null;
      }
      break;

    default: return null;
  }

  return result = cash * rate;
}

const money = converterMoney(1000, 'eur', 'usd');

console.log(money);
