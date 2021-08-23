import React from 'react';
import { Modal,ModalProps } from 'react-native';

import iconControle from '../../assets/iconcontrole.png';
import iconplay from '../../assets/play.png';

import{
  ContainerModal,
  ContentModal,
  HeaderModal,
  TitleModal,
  ModalOptions,
  ButtonStart,
  ButtonTutorial,
  TextButtonStart,
  TextButtonTutorial,
  Icon
} from './styles';

interface modalProps extends ModalProps{
  title:string;
  visibliModal:boolean;
  handleNavigation:() => void;
  handleNavigationPlay:() => void;
}
export function ModalPlayTutorial({
  title, 
  visibliModal,
  handleNavigation,
  handleNavigationPlay
}:modalProps){
  return(
    <>
      <Modal
        animationType='slide'
        transparent
        visible={visibliModal}
      >
        <ContainerModal>
          <ContentModal>
            <HeaderModal>
              <TitleModal>{title}</TitleModal>
            </HeaderModal>

            <ModalOptions>
              <Icon
                source={iconplay}
              />
              <ButtonTutorial onPress={()=> handleNavigation()}>
                <TextButtonTutorial>Ver tutoria</TextButtonTutorial>
              </ButtonTutorial>
            </ModalOptions>


            <ModalOptions>
              <Icon
                source={iconControle}
              />
              <ButtonStart onPress={()=> handleNavigationPlay()}>
                <TextButtonStart>Jogar</TextButtonStart>
              </ButtonStart>
            </ModalOptions>
          </ContentModal>
        </ContainerModal>
      </Modal>
    </>
  )
}