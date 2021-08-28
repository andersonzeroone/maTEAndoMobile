import AsyncStorage from '@react-native-async-storage/async-storage';

interface PlaySoundProps{
  playfeedBack:boolean;
}

export async function savePlaySound(value:string): Promise<void>{

  try {
    await AsyncStorage.setItem('@valuePlaySound', value)
  } catch (e) {
    // saving error
  }

}

export async function getPlaySound(){

  try {
    const value = await AsyncStorage.getItem('@valuePlaySound')
    if(value !== null) {
      return value;
    }
  } catch(e) {
  }

}

export async function removePlaysound(){
  try {
    await AsyncStorage.removeItem('@valuePlaySound')
  } catch(e) {
    // remove error
  }
}
