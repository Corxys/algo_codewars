export function maskify(cc) {
  let newCC = '';
  
  for (let index = 0; index < cc.length - 4; index++) {
    newCC += '#';
  }
  
  if (cc.length <= 4) {
    return cc;
  } else {
    return newCC + cc.slice(cc.length - 4, cc.length)
  }
};
