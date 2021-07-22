import {getRandom} from './utils/utils';
 
export function addtionOperation(nivel:number){
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
