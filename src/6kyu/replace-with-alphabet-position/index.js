export function alphabetPosition(text) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  const string = [];
  
  text.split('').forEach(character => {
    const index = alphabet.findIndex(letter => character.toLowerCase() == letter) + 1;
    
    if (index !== 0) {
      string.push(index);
    }
  });
  
  return string.join(' ');
};
