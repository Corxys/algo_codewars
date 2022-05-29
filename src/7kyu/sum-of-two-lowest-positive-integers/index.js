export function sumTwoSmallestNumbers(numbers) {
  return Math.min(...numbers) + Math.min(...numbers.filter(num => num != Math.min(...numbers)));
};
