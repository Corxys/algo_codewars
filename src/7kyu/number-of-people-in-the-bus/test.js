import { number } from './index';

test('01. Number of people in the bus', () => {
  expect(number([[10,0],[3,5],[5,8]])).toBe(5);
});

test('02. Number of people in the bus', () => {
  expect(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])).toBe(17);
});

test('03. Number of people in the bus', () => {
  expect(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]])).toBe(21);
});

test('04. Number of people in the bus', () => {
  expect(number([[0,0]])).toBe(0);
});
