import React, {useEffect, useState}from 'react';
import {  Alert, BackHandler, ImageSourcePropType} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import {OptionsMutateLogOut} from '../../components/OptionsMutateLogOut';
import { CardPrimary } from '../../components/CardsPrimary';

import {playSounds} from '../../utils/sounds/sound';
import {getPlaySound, savePlaySound} from '../../utils/storage';

import imageGoBack from '../../assets/bntVoltar.png';
import iconClick from '../../assets/click.png';
import apple from '../../assets/maca.png';
import car from '../../assets/carro.png';
import flower from '../../assets/flor.png';
import iceCream from '../../assets/sorverte.png';

import {
  Container,
  ContentHeader,
  ContenteTitle,
  IconClick,
  Title,
  ButtonGoBack,
  ImageButtonGoBack,
  ContentCardsOperations,
} from './styles';
 
interface Params{
  operation:string;
  imageOperation:ImageSourcePropType;
}
export function selectObjects(){
  const navigation = useNavigation();
  const route = useRoute();

  const {operation,imageOperation} = route.params as Params;
  
  const [sound, setSound] = useState<any>();

  const[handlePlaySound,setHandlePlaySound] = useState(false);
 
  useEffect(()=>{
    loadPlaySound();
  },[]);

  async function loadPlaySound(){
    let data = await getPlaySound();

    if(data === 'true'){
      setHandlePlaySound(true)
    }

    if(data === 'false'){
      setHandlePlaySound(false)
    }

    return data;
  }

  async function playSound(typeSound:string){

    const sound = await playSounds(typeSound)
    setSound(sound);

    if(!!sound){
      await sound.playAsync(); 
    }
    
  }

  async function handleNaviagationGoBack(){
    if(handlePlaySound){
      await playSound('feedback');
     }

     navigation.navigate('selectOperations');
  }

  async function handleNavigation(objectSelect:any){
    if(handlePlaySound){
      await playSound('feedback');
    }
    
    navigation.navigate('play',{
      operation,
      imageOperation,
      object:objectSelect
    });
  }

  async function handleMutate(){
    setHandlePlaySound(state => (!state));
    handlePlaySound ? savePlaySound('false'): savePlaySound('true');
    
    if(!handlePlaySound){
      await playSound('feedback');
    }
  }

  const backAction = () => {
    Alert.alert('Sair', 'Deseja sair do jogo?', [
      {
        text: 'Não',
        onPress: () => null,
        style: 'cancel'
      },
      { text: 'Sim', onPress: () => BackHandler.exitApp() }
    ]);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  return(
    <Container>
      <ContentHeader>
        <ButtonGoBack onPress={handleNaviagationGoBack}>
          <ImageButtonGoBack source={imageGoBack}/>
        </ButtonGoBack>

        <ContenteTitle>
          <Title>Selecione um objeto</Title>
          <IconClick source={iconClick}/>
        </ContenteTitle>

        <OptionsMutateLogOut
          visibleMutate
          visibleLogOut
          playFeedBack={handlePlaySound}
          handlePlayFeedBack={handleMutate}
        />
      </ContentHeader>

      <ContentCardsOperations>
      <CardPrimary
          image={apple}
          name='Maça'
          handleNavigation={()=> handleNavigation(apple)}
        />

        <CardPrimary
          image={car}
          name='carro'
          handleNavigation={()=> handleNavigation(car)}
        />

        <CardPrimary
          image={flower}
          name='Flor'
          handleNavigation={()=> handleNavigation(flower)}
        />

        <CardPrimary
          image={iceCream}
          name='Sorverte'
          handleNavigation={()=> handleNavigation(iceCream)}
        />
      </ContentCardsOperations>
    </Container>
  )
}