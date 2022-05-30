export function inArray(array1,array2) {
  return array1.filter(string1 => new RegExp(string1).test(array2.map(string2 => string2))).sort()
};
