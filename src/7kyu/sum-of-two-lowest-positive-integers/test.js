import { sumTwoSmallestNumbers } from './index';

test('01. Sum of two lowest positive integers', () => {
  expect(sumTwoSmallestNumbers([5, 8, 12, 19, 22])).toBe(13);
});

test('02. Sum of two lowest positive integers', () => {
  expect(sumTwoSmallestNumbers([15, 28, 4, 2, 43])).toBe(6);
});

test('03. Sum of two lowest positive integers', () => {
  expect(sumTwoSmallestNumbers([3, 87, 45, 12, 7])).toBe(10);
});

test('04. Sum of two lowest positive integers', () => {
  expect(sumTwoSmallestNumbers([23, 71, 33, 82, 1])).toBe(24);
});

test('04. Sum of two lowest positive integers', () => {
  expect(sumTwoSmallestNumbers([52, 76, 14, 12, 4])).toBe(16);
});
