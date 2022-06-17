import { pigIt } from './index';

test('01. Simple pig latin', () => {
  expect(pigIt('Pig latin is cool')).toStrictEqual('igPay atinlay siay oolcay');
});

test('02. Simple pig latin', () => {
  expect(pigIt('This is my string')).toStrictEqual('hisTay siay ymay tringsay');
});
