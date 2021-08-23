import React, { useEffect, useState } from 'react';
import { StatusBar, BackHandler, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import {ModalPlayTutorial} from '../../components/ModalPlayTutorial';

import ImageBackGround from '../../assets/Home.png';
import logo from '../../assets/Logo.png';
import iconcontrole from '../../assets/iconcontrole.png';

import {
  Container,
  Header,
  ButtonOptions,
  ContainerMenu,
  TextMenu,
  Logo,
  Footer,
  ContentFooter,
  ImgControl,
  ButtonStart,
  TextButtonStart,
} from './styles';

export function Home() {

  const navigation = useNavigation();

  const [modalvisible, setModalvisible] = useState(false);
  
  
  function handlenaviagtion(route:string){
    setModalvisible(false);
    navigation.navigate(route);
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
  return (
    <>
      <StatusBar backgroundColor='#CCECFF' barStyle='dark-content'/>
      <Container source={ImageBackGround} resizeMode='stretch'>
        <ModalPlayTutorial
          title='Selecione uma opção'
          visibliModal={modalvisible}
          handleNavigation={()=> handlenaviagtion('tutorialIntroduction')}
          handleNavigationPlay={()=> handlenaviagtion('selectOperations')}
        />
        <Header>
          <ContainerMenu>
            <ButtonOptions>
              <TextMenu>Opções</TextMenu>
              <Feather
                name='settings'
                size={25}
                color='#7018C9'
              />
            </ButtonOptions>

            <ButtonOptions onPress={backAction}>
              <TextMenu>Sair</TextMenu>
              <Feather
                name='log-out'
                size={25}
                color='#7018C9'
              />
            </ButtonOptions>

          </ContainerMenu>

        </Header>
        <Logo source={logo} />
        <Footer>
          <ContentFooter>
            <ImgControl source={iconcontrole} />
            <ButtonStart style={{elevation:20}} onPress={() => setModalvisible(true)}>
              <TextButtonStart>Iniciar</TextButtonStart>
            </ButtonStart>
          </ContentFooter>
        </Footer>
      </Container>
    </>
  );
}
