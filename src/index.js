module.exports = function makeExchange(currency) {
  let value = currency;
  let result = {};
  
  let money = {
    'H': 50,
    'Q': 25,
    'D': 10,
    'N': 5,
    'P': 1
  };

  for (let key in money) {
    if (value >= money[key]) {
      result[key] = Math.floor( value / money[key] );
      value = value - result[key] * money[key];
    }
    if (value == 0) return result;
  }
















}
