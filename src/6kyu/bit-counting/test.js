import { countBits } from './index';

test('01. Bit counting', () => {
  expect(countBits(0)).toBe(0);
});

test('02. Bit counting', () => {
  expect(countBits(4)).toBe(1);
});

test('03. Bit counting', () => {
  expect(countBits(7)).toBe(3);
});

test('04. Bit counting', () => {
  expect(countBits(9)).toBe(2);
});

test('04. Bit counting', () => {
  expect(countBits(10)).toBe(2);
});
