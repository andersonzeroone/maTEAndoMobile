export function getRandom(min:number,max:number){
  min = Math.floor(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min;
}

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

export function arrayAlternativesRandom(result:number){
  const { valueMax, valueMin } = getMinMaxValueAlternative(result);
    let getRandam = true;
    const arrayAlternatives: number[] = [];

    while (getRandam) {
      let numberRandom = getRandom(valueMin, valueMax);

      if (arrayAlternatives.length == 3) {
        let indexRandom = getRandom(0, 3);
        arrayAlternatives.splice(indexRandom, 0, result);
        getRandam = false;
        return arrayAlternatives;
      }

      if (!(arrayAlternatives.includes(numberRandom) || numberRandom === result)) {
        arrayAlternatives.push(numberRandom);
      }
    }
}