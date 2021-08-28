import { Audio } from 'expo-av';

export async function playSounds(typeSound:string){
  
  if(typeSound === 'feedback'){
    const { sound } = await Audio.Sound.createAsync(
      require('./feedback.mp3')
   );
  
   return sound;
  }

  if(typeSound === 'error'){
    const { sound } = await Audio.Sound.createAsync(
      require('./error.mp3')
   );
  
   return sound;
  }

  if(typeSound === 'correct'){
    const { sound } = await Audio.Sound.createAsync(
      require('./correct.mp3')
   );
  
   return sound;
  }
  

}