import { maskify } from './index';

test('01. Credit card mask', () => {
  expect(maskify('4556364607935616')).toBe('############5616');
});

test('02. Credit card mask', () => {
  expect(maskify('1')).toBe('1');
});

test('03. Credit card mask', () => {
  expect(maskify('11111')).toBe('#1111');
});
