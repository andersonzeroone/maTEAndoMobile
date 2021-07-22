
export function createArrAlternatives(resulCalt:number){
  const arrAlternatives:any[] = [];

  const data = getMinMaxValueAlternative(resulCalt);
  
  for(var x = data.valueMin; x<= data.valueMax;x++){ // @ts-ignore
    if(arrAlternatives.length == 3)return;
    let numberRandom = getRandom(data.valueMin,data.valueMax)
    if(arrAlternatives.includes(numberRandom) || numberRandom === resulCalt){
      data.valueMax + 1;
      return;
    } 

    arrAlternatives.push(numberRandom);
    console.log(arrAlternatives);
    // arrAlternatives.push({
    //   id:numberRandom,
    //   value:numberRandom
    // });
  }  
  // let indexRandom = getValeuRandomArr(0,3);
  // arrAlternatives[indexRandom].push({
  //   id:resulCalt,
  //   value:resulCalt
  // });
 
  return arrAlternatives;
}

export function getRandom(min:number,max:number) {
  return Math.floor(Math.random() * max + min);
};

export function getMinMaxValueAlternative(value:number){
  let valueMaxAlternatives:number = 0;
  let valueMinAlternatives:number = 0;

  if(value <= 3){
    valueMaxAlternatives = value + 3;
    valueMinAlternatives = 1;
  }

  if(value >= 4){
    valueMaxAlternatives = value +3;
    valueMinAlternatives = value - 2; 
  }

  const dataMinMaxValueAlternative = {
    valueMin:valueMinAlternatives,
    valueMax:valueMaxAlternatives
  }

  return dataMinMaxValueAlternative;
}