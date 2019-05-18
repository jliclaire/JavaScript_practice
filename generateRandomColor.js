const generateRandomColor = () =>{
  const hexCodeArray = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
  let colorArray = [];

  for(let i = 0; i < 6; i++){    
    let randomIndex = Math.floor(Math.random() * 15);
    colorArray.push(hexCodeArray[randomIndex]);  
  }

  return String(colorArray.join(''));
}

console.log(generateRandomColor());