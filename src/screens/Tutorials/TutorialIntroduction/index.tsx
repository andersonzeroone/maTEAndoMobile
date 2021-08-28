import React, { useEffect, useState } from 'react';
import { Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { getPlaySound, savePlaySound } from '../../../utils/storage';
import { playSounds } from '../../../utils/sounds/sound';

import { OptionsMutateLogOut } from '../../../components/OptionsMutateLogOut';

import ex1 from '../../../assets/Ex1.png';
import ex2 from '../../../assets/Ex2.png';
import ex3 from '../../../assets/Ex3.png';
import imaNext from '../../../assets/bntAvancar.png';
import imageGoBack from '../../../assets/bntVoltar.png';

import {
  Container,
  Header,
  ButtonGoBack,
  ImageButtonGoBack,
  Title,
  Text,
  ContainerExample,
  ImageExample,
  ContainerFeedBack,
  TextFeedBack,
  Footer,
  ButtonJump,
  TextButtonJump,
  ButtonNext,
  ImageButtonNext,
} from './styles';
import { func } from 'joi';


export function tutorialIntroduction() {
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
  async function handleMutate(){
    setHandlePlaySound(state => (!state));
    handlePlaySound ? savePlaySound('false'): savePlaySound('true');
    
    if(!handlePlaySound){
      await playSound('feedback');
    }
  }

  async function handleNavigation(router:string){
    if (handlePlaySound) {
      await playSound('feedback');
    }

    navigation.navigate(router);
  }

  function handleAlert() {
    Alert.alert('Pular tutorial 📚', 'Deseja pular essa etapa?', [
      {
        text: 'Não 😊',
        style: 'cancel'
      },
      {
        text: 'Sim 😀',
        onPress: () => navigation.navigate('selectOperations'),
      }
    ]);
  }

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Container>
          <Header>
            <ButtonGoBack onPress={()=> handleNavigation('Home')}>
              <ImageButtonGoBack source={imageGoBack} />
            </ButtonGoBack>

            <Title>Introdução</Title>

            <OptionsMutateLogOut
              visibleMutate
              visibleLogOut
              playFeedBack={handlePlaySound}
              handlePlayFeedBack={handleMutate}
            />
          </Header>

          <Text>
            Antes de iniciarmos o jogo, que tal entender um pouco sobre números e
            quantidades. A representação do número e da quantidade de maçãs.
            Exemplos:
          </Text>

          <ContainerExample>
            <ImageExample source={ex1} />
            <ImageExample source={ex2} />
            <ImageExample source={ex3} />
          </ContainerExample>

          <ContainerFeedBack>
            <TextFeedBack>1 de 6</TextFeedBack>
          </ContainerFeedBack>

          <Footer>
            <ButtonJump onPress={handleAlert}>
              <TextButtonJump>Pular</TextButtonJump>
            </ButtonJump>

            <ButtonNext onPress={() => handleNavigation('tutorialOperations')}>
              <ImageButtonNext source={imaNext} />
            </ButtonNext>
          </Footer>
        </Container>
      </ScrollView>
    </>
  );
}
