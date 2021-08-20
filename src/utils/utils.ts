export function getRandom(min:number,max:number){
  min = Math.floor(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min;
}

export function getMinMaxValueAlternative(value:number){
  console.log('valor:', value)
  let valueMaxAlternatives:number = 0;
  let valueMinAlternatives:number = 0;

  console.log('inicial:','Max:',valueMaxAlternatives,'Min:',valueMinAlternatives)
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
  console.log(dataMinMaxValueAlternative)

  return dataMinMaxValueAlternative;
}