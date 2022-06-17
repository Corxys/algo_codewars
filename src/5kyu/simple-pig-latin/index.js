export function pigIt(str) {
  return str.split(' ').map(word => word.match(/[a-zA-Z]/) ? word.substring(1) + word[0] + 'ay' : word).join(' ');
};
