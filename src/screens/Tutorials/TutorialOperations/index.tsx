import React,{useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, ScrollView, View } from 'react-native';

import { getPlaySound, savePlaySound } from '../../../utils/storage';
import { playSounds } from '../../../utils/sounds/sound';

import { OptionsMutateLogOut } from '../../../components/OptionsMutateLogOut';

import addition from '../../../assets/adicao.png';
import subtraction from '../../../assets/subtracao.png';
import division from '../../../assets/divisao.png';
import multiplication from '../../../assets/multiplicacao.png';

import imaBack from '../../../assets/bntVoltar.png';
import imaNext from '../../../assets/bntAvancar.png';

import {
  Container,
  Header,
  Title,
  Text,
  ContainerOperations,
  CardOperation,
  TitleOperation,
  ImageOperations,
  ContainerFeedBack,
  TextFeedBack,
  Footer,
  ButtonBack,
  ImageButtonBack,
  ButtonJump,
  TextButtonJump,
  ButtonNext,
  ImageButtonNext,
} from './styles';


export function tutorialOperations() {
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
            <View/>
          <Title>Operações</Title>
          <OptionsMutateLogOut
              visibleMutate
              visibleLogOut
              playFeedBack={handlePlaySound}
              handlePlayFeedBack={handleMutate}
            />
          </Header>

          <Text>
            As operações matemáticas são:
          </Text>

          <ContainerOperations>

            <CardOperation>
              <ImageOperations source={addition} />
              <TitleOperation>Adição</TitleOperation>
            </CardOperation>

            <CardOperation>
              <ImageOperations source={subtraction} />
              <TitleOperation>Subtração</TitleOperation>
            </CardOperation>

            <CardOperation>
              <ImageOperations source={division} />
              <TitleOperation>Divisão</TitleOperation>
            </CardOperation>

            <CardOperation>
              <ImageOperations source={multiplication} />
              <TitleOperation>Multiplicação</TitleOperation>
            </CardOperation>
          </ContainerOperations>

          <ContainerFeedBack>
            <TextFeedBack>2 de 6</TextFeedBack>
          </ContainerFeedBack>

          <Footer>
            <ButtonBack onPress={() => handleNavigation('tutorialIntroduction')}>
              <ImageButtonBack source={imaBack} />
            </ButtonBack>

            <ButtonJump onPress={handleAlert}>
              <TextButtonJump>Pular</TextButtonJump>
            </ButtonJump>

            <ButtonNext onPress={() => handleNavigation('tutorialAddition')}>
              <ImageButtonNext source={imaNext} />
            </ButtonNext>
          </Footer>
        </Container>
      </ScrollView>
    </>

  );
}
