import { past } from './index';

test('01. Clock beginner series #2', () => {
  expect(past(0, 1, 1)).toBe(61000);
});

test('02. Clock beginner series #2', () => {
  expect(past(1, 1, 1)).toBe(3661000);
});

test('03. Clock beginner series #2', () => {
  expect(past(0, 0, 0)).toBe(0);
});

test('04. Clock beginner series #2', () => {
  expect(past(1, 0, 1)).toBe(3601000);
});

test('05. Clock beginner series #2', () => {
  expect(past(1, 0, 0)).toBe(3600000);
});
