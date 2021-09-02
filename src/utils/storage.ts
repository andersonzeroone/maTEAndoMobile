import AsyncStorage from '@react-native-async-storage/async-storage';
import { DataReport } from '../screens/Play';

interface PlaySoundProps{
  playfeedBack:boolean;
}

export async function savePlaySound(value:string): Promise<void>{

  try {
    await AsyncStorage.setItem('@maTEAando_PlaySound', value)
  } catch (e) {
    // saving error
  }

}

export async function getPlaySound(){

  try {
    const value = await AsyncStorage.getItem('@maTEAando_PlaySound')
    if(value !== null){
      return value;
    }

  } catch(e) {
  }

}

export async function removePlaysound(){
  try {
    await AsyncStorage.removeItem('@maTEAando_PlaySound')
  } catch(e) {
    // remove error
  }
}

export async function saveDataReport(data:any){
  try{
    await AsyncStorage.setItem('@maTEAando_DataReport',JSON.stringify(data));
  }catch(e){
  }
}

export async function getDataReport(){
  try{
    const data = await AsyncStorage.getItem('@maTEAando_DataReport')
    const newData = data ? JSON.parse(data) : [];

    return newData;
    
  }catch(e){

  }
}

export async function RemoveDataReport(){
  try {
    await AsyncStorage.removeItem('@maTEAando_DataReport');
  } catch(e) {
    // remove error
  }

  console.log('Done.')
}
