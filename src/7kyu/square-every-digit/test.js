import { squareDigits } from "./index";

test('01. Square every digit', () => {
    expect(squareDigits(3212)).toBe(9414);
});

test('02. Square every digit', () => {
    expect(squareDigits(2112)).toBe(4114);
});