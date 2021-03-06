import { boolean } from 'joi';
import React from 'react';
import { View, Modal,ImageSourcePropType, ModalProps } from 'react-native';

import bntNext from '../../assets/bntAvancar.png';

import{
  ContainerModal,
  ContentModal,
  TitleModal,
  ImageModal,
  FooterModal,
  ButtonNext,
  ImageButtonNext
} from './styles';

interface modalProps extends ModalProps{
  title:string;
  imageModal:ImageSourcePropType;
  next:()=> void;
  visibliModal:boolean;
}
export function ModalPrimary({
  title, 
  imageModal,
  next, 
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

            <ImageModal source={imageModal}/>

            <FooterModal>
              <View/>
              <ButtonNext onPress={()=> next()}>
                <ImageButtonNext source={bntNext}/>
              </ButtonNext>
            </FooterModal>
          </ContentModal>
        </ContainerModal>
      </Modal>
    </>
  )
}