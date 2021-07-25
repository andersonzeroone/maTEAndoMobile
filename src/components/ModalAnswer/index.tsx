import React from 'react';
import { Modal,ModalProps } from 'react-native';


import{
  ContainerModal,
  ContentModal,
  TitleModal,
  Emoji
} from './styles';

interface modalProps extends ModalProps{
  title:string;
  emoji:string;
  visibliModal:boolean;
}
export function ModalAnswer({
  title, 
  emoji,
  visibliModal
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
            <TitleModal>{title}</TitleModal>

            <Emoji>{emoji}</Emoji>
          </ContentModal>
        </ContainerModal>
      </Modal>
    </>
  )
}