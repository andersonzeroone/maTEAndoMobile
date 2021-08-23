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


export function handleSortArr(arr: number[]) {
  for (let i = arr.length - 1; i > 0; i--) {
    // Escolhendo elemento aleatório
    const j = Math.floor(Math.random() * (i + 1));
    // Reposicionando elemento
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  // Retornando array com aleatoriedade
  return arr;
}