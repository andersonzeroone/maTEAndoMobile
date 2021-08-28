import React from 'react';
import { Modal,ModalProps } from 'react-native';

import{
  ContainerModal,
  ContentModal,
  TitleModal,
} from './styles';

interface modalProps extends ModalProps{
  title:string;
  visibliModal:boolean;
}
export function ModalAnswerError({
  title, 
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
          </ContentModal>
        </ContainerModal>
      </Modal>
    </>
  )
}