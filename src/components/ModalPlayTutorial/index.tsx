import React, { useState } from 'react';
import { Modal, ModalProps, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

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
  handleNavigation: () => void;
  handleNavigationPlay: () => void;
  handleOpenModal: () => void;
}
export function ModalPlayTutorial({
  title,
  handleNavigation,
  handleNavigationPlay,
  handleOpenModal
}: modalProps) {


  return (
    <>
      <ContainerModal>
        <ContentModal>
          <HeaderModal>
            <ButtonCancel onPress={() => handleOpenModal()}>
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
            <ButtonTutorial onPress={() => handleNavigation()}>
              <TextButtonTutorial>Ver tutorial</TextButtonTutorial>
            </ButtonTutorial>
          </ModalOptions>


          <ModalOptions>
            <Icon
              source={iconControle}
            />
            <ButtonStart onPress={() => handleNavigationPlay()}>
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