import { jadenCasingStrings } from "./index";

test('01. Jaden casing strings', () => {
    expect(jadenCasingStrings('How can mirrors be real if our eyes aren\'t real')).toBe('How Can Mirrors Be Real If Our Eyes Aren\'t Real');
});