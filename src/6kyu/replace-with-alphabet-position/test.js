import { alphabetPosition } from './index';

test('01. Replace with alphabet position', () => {
  expect(alphabetPosition("The sunset sets at twelve o' clock.")).toStrictEqual("20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
});

test('02. Replace with alphabet position', () => {
  expect(alphabetPosition("The narwhal bacons at midnight.")).toStrictEqual("20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");
});
