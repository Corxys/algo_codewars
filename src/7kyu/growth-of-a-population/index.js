export function nbYear(p0, percent, aug, p) {
  let nbYear = 0;
  
  while (p0 < p) {
    nbYear += 1;
    p0 += Math.floor(p0 * (percent / 100)) + aug;
  }
  
  return nbYear;
};
