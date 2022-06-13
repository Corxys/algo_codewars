export function count (string) {
  const occurrences = {};
  
  for (let index = 0; index < string.length; index++) {
    const count = string.split(string[index]).length - 1;
    occurrences[string[index]] = count;
  }
  
  return occurrences;
}
