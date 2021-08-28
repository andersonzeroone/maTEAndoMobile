import React, { useState,useEffect } from 'react';
import { ModalProps, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { playSounds } from '../../utils/sounds/sound';
import {savePlaySound,getPlaySound} from '../../utils/storage';

import {
  ContainerModal,
  ContentModal,
  HeaderModal,
  TitleModal,
  ModalOptions,
  Button,
  TextButton,
  ButtonCancel
} from './styles';

interface modalProps extends ModalProps {
  title: string;
  handleCloseModalOptions: () => void;
  handleBackAction: () => void;
}
export function ModalOptionsHome({
  title,
  handleCloseModalOptions,
  handleBackAction
}: modalProps) {

  const navigation = useNavigation();

  const [sound, setSound] = useState<any>();
  const [handlePlaySound,setHandlePlaySound] = useState(true);

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

  async function handleMutate(){
    setHandlePlaySound((state)=> !state);
    handlePlaySound ? savePlaySound('false'): savePlaySound('true');
  
    if(!handlePlaySound){
      await playSound('feedback');
    }
  }

  async function playSound(typeSound: string) {

    const sound = await playSounds(typeSound)
    setSound(sound);

    if (!!sound) {
      await sound.playAsync();
    }

  }

  async function handleNavigation(route: string) {
    if (handlePlaySound) {
      await playSound('feedback');
    }

    navigation.navigate(route);
  }

  return (
    <>
      <ContainerModal>
        <ContentModal>
          <HeaderModal>
            <ButtonCancel onPress={() => handleCloseModalOptions()}>
              <Feather
                name='x-circle'
                size={25}
                color='#7018C9'
              />
            </ButtonCancel>
            <TitleModal>{title}</TitleModal>

            <View />
          </HeaderModal>

          <ModalOptions>
            {!handlePlaySound ? (
              <Button onPress={handleMutate}>
                <Feather
                  name='volume-2'
                  size={25}
                  color='#7018C9'
                />
                <TextButton>Ativar sons</TextButton>
              </Button>
            ) : (

              <Button onPress={handleMutate}>
                <Feather
                  name='volume-x'
                  size={25}
                  color='#7018C9'
                />

                <TextButton>Desativar sons</TextButton>
              </Button>
            )}

            <Button onPress={() => { }}>
              <Feather
                name='clipboard'
                size={25}
                color='#7018C9'
              />
              <TextButton>Ver relatório</TextButton>
            </Button>

            <Button onPress={() => handleBackAction()}>
              <Feather
                name='log-out'
                size={25}
                color='#7018C9'
              />
              <TextButton>Sair</TextButton>
            </Button>

          </ModalOptions>
        </ContentModal>
      </ContainerModal>
    </>
  )
}