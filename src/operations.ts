import {getRandom} from './utils/utils';
 
export function additionOperation(nivel:number){
  const numberPrimary = getRandom(1,nivel);
  const numberSecondary = getRandom(1,nivel);

  const result = numberPrimary + numberSecondary;

  const dataResult={
    numberPrimary,
    numberSecondary,
    result
  }
  return dataResult;
  
}

export function subtractionOperation(nivel:number){
  let numberPrimary = getRandom(2,nivel);

  let limitNum2 = numberPrimary - 1;

  var numberSecondary = getRandom(1,limitNum2);

  let subtraction = numberPrimary - numberSecondary;

  const dataResult={
    numberPrimary,
    numberSecondary,
    result:subtraction
  }

  return dataResult;
}

export function divisionOperation(nivel:number){
  let numberPrimary = getRandom(2,nivel);
  let numberSecondary = getNumbetTwo(numberPrimary,nivel);

  const dataResult ={
    numberPrimary,
    numberSecondary,
    result:numberPrimary /numberSecondary
  }

  return dataResult;
}

function getNumbetTwo(numberPrimary:number,nivel:number){
  let numberTwo = getRandom(1,nivel);

  if(numberPrimary % numberTwo === 0){
    return numberTwo;
  }
  return numberPrimary;
}

export function multiplicationOperation(nivel:number){
  let  numberPrimary = getRandom(1,nivel);
  var numberSecondary = 0;

  if(numberPrimary <= 5){
    numberSecondary = getRandom(1,6);
  }

  if (numberPrimary >= 6 && numberPrimary <= 9) {
    numberSecondary = getRandom(1,5);
  }

  const dataResult = {
    numberPrimary,
    numberSecondary,
    result:numberPrimary * numberSecondary
  }

  return dataResult;
}
