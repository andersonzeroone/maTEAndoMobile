import React, { useState } from 'react';
import {  ModalProps, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {playSounds} from '../../utils/sounds/sound';

import iconControle from '../../assets/iconcontrole.png';
import iconplay from '../../assets/play.png';

import {
  ContainerModal,
  ContentModal,
  HeaderModal,
  TitleModal,
  ModalOptions,
  ButtonStart,
  ButtonTutorial,
  TextButtonStart,
  TextButtonTutorial,
  Icon,
  ButtonCancel
} from './styles';

interface modalProps extends ModalProps {
  title: string;
  playFeedBack:boolean;
  handleCloseModal: () => void;
}
export function ModalPlayTutorial({
  title,
  handleCloseModal,
  playFeedBack
}: modalProps) {

  const navigation = useNavigation();

  const [sound, setSound] = useState<any>();

  async function playSound(typeSound:string){

    const sound = await playSounds(typeSound)
    setSound(sound);

    if(!!sound){
      await sound.playAsync(); 
    }
    
  }

  async function handleNavigation(route:string) {
    if(playFeedBack){
      await playSound('feedback');
     }

     navigation.navigate(route);
  }

  return (
    <>
      <ContainerModal>
        <ContentModal>
          <HeaderModal>
            <ButtonCancel onPress={() => handleCloseModal()}>
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
            <Icon
              source={iconplay}
            />
            <ButtonTutorial onPress={() => handleNavigation('tutorialIntroduction')}>
              <TextButtonTutorial>Ver tutorial</TextButtonTutorial>
            </ButtonTutorial>
          </ModalOptions>


          <ModalOptions>
            <Icon
              source={iconControle}
            />
            <ButtonStart onPress={() => handleNavigation('selectOperations')}>
              <TextButtonStart>Jogar</TextButtonStart>
            </ButtonStart>
          </ModalOptions>

          <ButtonCancel>
          </ButtonCancel>
        </ContentModal>
      </ContainerModal>
    </>
  )
}