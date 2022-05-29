decodeMorse = function(morseCode){
  let string = '';
  
  morseCode.trim().split('   ').map((words, index) => {
      const wordsSplit = words.split(' ');
      
      wordsSplit.forEach((letter) => {
        string += MORSE_CODE[letter];
      })
      
      string += ' ';
    }
  );
  
  return string.trim();
};
