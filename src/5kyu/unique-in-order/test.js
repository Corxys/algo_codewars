import { uniqueInOrder } from './index';

test('01. Unique in order', () => {
  expect(uniqueInOrder('AAAABBBCCDAABBB')).toStrictEqual(['A','B','C','D','A','B']);
});
