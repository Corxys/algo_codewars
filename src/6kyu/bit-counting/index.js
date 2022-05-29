export function countBits(n) {
  let total = 0;
  n.toString(2).split('').filter(el => el != '0').map(el => total += parseInt(el, 10));
  return total;
};
