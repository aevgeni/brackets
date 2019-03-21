module.exports = function check(str, bracketsConfig) {
  // your solution
  let arrayString = str.split('');  
  for (let i = 0; i <= bracketsConfig.length; i++) {
    for (let k = 0; k < bracketsConfig.length; k++) {
      console.log(k);
        for (let p = 0; p < arrayString.length; p++) {
          if (arrayString[p] == bracketsConfig[k][0] && arrayString[p+1] == bracketsConfig[k][1]) {
            delete arrayString[p];   
            delete arrayString[p+1]; 
            arrayString = arrayString.filter(element => element !== undefined);
            p = 0;
            k = 0;
          }
        }
        
            
    }
  }
  if (arrayString.length == 0) {
    return true;
  } else {
  return false;}   
}


const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];


check('111115611111111222288888822225577877778775555666677777777776622222', config6);
