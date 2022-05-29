import { filterList } from './index';

test('01. List filtering', () => {
    expect(filterList([1,2,'a','b'])).toStrictEqual([1, 2]);
});

test('02. List filtering', () => {
    expect(filterList([1,'a','b',0,15])).toStrictEqual([1, 0, 15]);
});

test('03. List filtering', () => {
    expect(filterList([1,2,'aasf','1','123',123])).toStrictEqual([1, 2, 123]);
});

