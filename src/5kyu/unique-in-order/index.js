export function uniqueInOrder(iterable) {
  const letters = [];
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i + 1]) {
      letters.push(iterable[i]);
    }
  }
  return letters;
}
