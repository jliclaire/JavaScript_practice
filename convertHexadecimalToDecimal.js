const convertHexadecimalToDecimal = (input) => {
  const HexInputToString = String(input);
  const HexLength = HexInputToString.length;

  let sum = 0, count = 0;

  while(count < HexLength){
    let char = HexInputToString[count];
    let convertToNum;

    if(char === 'A' || char == 'a'){
      convertToNum = 10;
    } else if(char === 'B' || char === 'b'){
      convertToNum = 11;
    } else if(char === 'C' || char === 'c'){
      convertToNum = 12;
    } else if(char === 'D' || char === 'd'){
      convertToNum = 13;
    } else if(char === 'E' || char === 'e'){
      convertToNum = 14;
    } else if(char === 'F' || char === 'f'){
      convertToNum = 15;
    } else {
      convertToNum = Number(char);
    }

    let power = HexLength - 1 - count;

    let toThePowerOfSixteen = 16 ** power;

    sum += convertToNum * toThePowerOfSixteen;

    count ++;     
  }
  return sum;
}

console.log(convertHexadecimalToDecimal('ffffff')); //=> 16777215
