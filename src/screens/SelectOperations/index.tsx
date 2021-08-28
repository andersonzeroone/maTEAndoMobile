import React, { useEffect, useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import { CardPrimary } from '../../components/CardsPrimary';
import {OptionsMutateLogOut} from '../../components/OptionsMutateLogOut';

import { playSounds } from '../../utils/sounds/sound';
import {getPlaySound, savePlaySound} from '../../utils/storage';

import imageGoBack from '../../assets/home.png';
import addition from '../../assets/adicao.png';
import subtraction from '../../assets/subtracao.png';
import division from '../../assets/divisao.png';
import multiplication from '../../assets/multiplicacao.png';

import {
  Container,
  ContentHeader,
  Title,
  ButtonGoBack,
  ImageButtonGoBack,
  ContentCardsOperations,
} from './styles';

export function selectOperations() {

  const navigation = useNavigation();

  const [sound, setSound] = useState<any>();

  const [handlePlaySound, setHandlePlaySound] = useState(true);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadPlaySound();
    });

    return unsubscribe;
  }, [navigation]);
  
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

  async function playSound(typeSound: string) {

    const sound = await playSounds(typeSound)
    setSound(sound);

    if (!!sound) {
      await sound.playAsync();
    }

  }

  async function handleNaviagationGoBack() {
    if (handlePlaySound) {
      await playSound('feedback');
    }

    navigation.navigate('Home');
  }

  async function handleMutate(){
    setHandlePlaySound(state => (!state));
    handlePlaySound ? savePlaySound('false'): savePlaySound('true');
    
    if(!handlePlaySound){
      await playSound('feedback');
    }
  }

  async function handleNavigation(nameOperation: string, imageOperation: any) {
    const valueSound =  await  loadPlaySound();

    if(valueSound === 'false'){
      navigation.navigate('selectObjects',{
        operation: nameOperation,
        imageOperation
      });

      return;
    }

    if (handlePlaySound) {
      await playSound('feedback');
    }

    navigation.navigate('selectObjects', {
      operation: nameOperation,
      imageOperation
    });
  }

  return (
    <Container>
      <ContentHeader>
        <ButtonGoBack onPress={handleNaviagationGoBack}>
          <ImageButtonGoBack source={imageGoBack} />
        </ButtonGoBack>

        <Title>Selecione uma operação</Title>
        <OptionsMutateLogOut
          visibleMutate
          visibleLogOut
          playFeedBack={handlePlaySound}
          handlePlayFeedBack={handleMutate}
        />

      </ContentHeader>
      <ContentCardsOperations>
        <CardPrimary
          image={addition}
          name='Soma'
          handleNavigation={() => handleNavigation('addition', addition)}
        />

        <CardPrimary
          image={subtraction}
          name='Subtração'
          handleNavigation={() => handleNavigation('subtraction', subtraction)}
        />

        <CardPrimary
          image={division}
          name='Divisão'
          handleNavigation={() => handleNavigation('division', division)}
        />

        <CardPrimary
          image={multiplication}
          name='Multiplicação'
          handleNavigation={() => handleNavigation('multiplication', multiplication)}
        />
      </ContentCardsOperations>
    </Container>
  )
}
