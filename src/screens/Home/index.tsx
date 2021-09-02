import React, {useEffect, useState } from 'react';
import { Modal, StatusBar, BackHandler, Alert } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import {playSounds} from '../../utils/sounds/sound';
import {getPlaySound} from '../../utils/storage';

import { ModalPlayTutorial } from '../../components/ModalPlayTutorial';
import {ModalOptionsHome} from '../../components/ModalOptionsHome';

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

  const [modalVisible, setModalVisible] = useState(false);
  const [modalOptionsVisible, setModalOptionsVisible] = useState(false);
  const [sound, setSound] = useState<any>();
  const[handlePlaySound,setHandlePlaySound] = useState(true);

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

  async function playSound(typeSound:string){
    const sound = await playSounds(typeSound)
    setSound(sound);

    if(!!sound){
      await sound.playAsync(); 
    }
  }

  async function handlemodal(modalType:string){
    const valueSound =  await  loadPlaySound();

    if(valueSound === 'false'){
      if(modalType === 'options' ){
        setModalOptionsVisible((state)=> !state);
        return;
      }
      setModalVisible((state)=> !state);
      return;
    }

    if(handlePlaySound){
      await playSound('feedback');
     }

     modalType === 'options' ? (setModalOptionsVisible((state)=> !state)
     ):(setModalVisible((state)=> !state))
     
     setTimeout(function () {
      setModalOptionsVisible(false);
      setModalVisible(false);
    }, 8000);
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
      <StatusBar backgroundColor='#CCECFF' barStyle='dark-content' />
      <Container source={ImageBackGround} resizeMode='stretch'>
        <Modal
          animationType='slide'
          transparent
          visible={modalVisible}
        >
          <ModalPlayTutorial
            title='Selecione uma opção'
            handleCloseModal={()=> handlemodal('modal')}
            playFeedBack={handlePlaySound}
          />
        </Modal>

        <Modal
          animationType='slide'
          transparent
          visible={modalOptionsVisible}
        >
          <ModalOptionsHome
            handleCloseModalOptions={()=> handlemodal('options')}
            title='Selecione uma opção'
            handleBackAction={backAction}
          />
        </Modal>       
        <Header>
          <ContainerMenu>
            <ButtonOptions onPress={()=> handlemodal('options')}>
              <TextMenu>Opções</TextMenu>
              <Feather
                name='settings'
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
            <ButtonStart style={{ elevation: 20 }} onPress={()=> handlemodal('modal')}>
              <TextButtonStart>Iniciar</TextButtonStart>
            </ButtonStart>
          </ContentFooter>
        </Footer>
      </Container>
    </>
  );
}
