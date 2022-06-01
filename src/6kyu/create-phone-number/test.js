import { createPhoneNumber } from './index';

test('01. Create phone number', () => {
    expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toStrictEqual('(123) 456-7890');
});

test('02. Create phone number', () => {
    expect(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toStrictEqual('(111) 111-1111');
});

test('02. Create phone number', () => {
    expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toStrictEqual('(123) 456-7890');
});
