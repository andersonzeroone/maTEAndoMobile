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