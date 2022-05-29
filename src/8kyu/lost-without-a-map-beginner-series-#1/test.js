import { maps } from './index';

test('01. Lost without a map beginner series #1', () => {
  expect(maps([1, 2, 3])).toStrictEqual([2, 4, 6]);
});

test('02. Lost without a map beginner series #1', () => {
  expect(maps([4, 1, 1, 1, 4])).toStrictEqual([8, 2, 2, 2, 8]);
});

test('03. Lost without a map beginner series #1', () => {
  expect(maps([2, 2, 2, 2, 2, 2])).toStrictEqual([4, 4, 4, 4, 4, 4]);
});
