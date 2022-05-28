import { narcissistic } from './index';

test('01. Does my number look big in this', () => {
  expect(narcissistic(7)).toBe(true);
});

test('02. Does my number look big in this', () => {
  expect(narcissistic(371)).toBe(true);
});
