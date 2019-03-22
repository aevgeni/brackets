module.exports = function check(str, bracketsConfig) {
  // your solution
  let arrayStr = str.split('');  
  for (let i = 0; i <= 1; i++) {
    for (let k = 0; k < bracketsConfig.length; k++) {
      for (let l = 0; l < arrayStr.length; l++) {
        if (arrayStr[l] == bracketsConfig[k][0] && arrayStr[l+1] == bracketsConfig[k][1]) {
          delete arrayStr[l];
          delete arrayStr[l+1];
          arrayStr = arrayStr.filter(element => element !== undefined);
          i = 0;
        }
      }
    }
  }
  if (arrayStr.length == 0) {
    return true;
  } else {
  return false;
  }   
}