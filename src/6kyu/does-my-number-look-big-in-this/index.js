export function narcissistic(value) {
  let narcissistic = false;
  
  const valueString = value.toString();
  const digits = valueString.length;
  
  let powValue = 0;
  let sumValue = 0;
  const values = [];
  
  if (digits === 1) {
    narcissistic = true;
  } else {
    
    for (let index = 0; index < digits; index++) {
      powValue = Math.pow(parseInt(valueString[index], 10), digits);
      values.push(powValue);
    }
    
    for (let index = 0; index < values.length; index++) {
      sumValue += values[index];
    }
    
    if (value == sumValue) {
      narcissistic = true;
    } else {
      narcissistic = false;
    }
  }
  
  return narcissistic;
};
