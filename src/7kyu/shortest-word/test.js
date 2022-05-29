import { findShort } from './index';

test('01. Shortest word', () => {
    expect(findShort('bitcoin take over the world maybe who knows perhaps')).toBe(3);
});

test('02. Shortest word', () => {
    expect(findShort('turns out random test cases are easier than writing out basic ones')).toBe(3);
});

test('03. Shortest word', () => {
    expect(findShort('Let\'s travel abroad shall we')).toBe(2);
});