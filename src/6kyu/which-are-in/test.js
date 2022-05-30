import { inArray } from './index';

test('01. Wich are in ?', () => {
  expect(inArray(["xyz", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"])).toStrictEqual(["live", "strong"]);
});

test('02. Wich are in ?', () => {
  expect(inArray(["live", "strong", "arp"], ["lively", "alive", "harp", "sharp", "armstrong"])).toStrictEqual(["arp", "live", "strong"]);
});

test('03. Wich are in ?', () => {
  expect(inArray(["tarp", "mice", "bull"], ["lively", "alive", "harp", "sharp", "armstrong"])).toStrictEqual([]);
});
