import { count } from './index';

test('01. Count characters in your string', () => {
  expect(count('aba')).toStrictEqual({ a: 2, b: 1 });
});

test('02. Count characters in your string', () => {
  expect(count('')).toStrictEqual({});
});
