import React, { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';

import { TutotialStructure } from '../../../components/TutotialStructure';
import { ModalPrimary } from '../../../components/Modal';

import division from '../../../assets/multiplicacao.png'
import imgExample from '../../../assets/exMultiplicacao.png'
import imageModal from '../../../assets/sucesso.png';

import {
  Container,
} from '../StyleScreenOperations/style';

export function tutorialMultiplication() {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  const handleModalVisible = useCallback(() => {
    setModalVisible((state) => !state);
  }, []);

  function handleNavigation() {
    setModalVisible((state) => !state);
    navigation.navigate('selectOperations');
  }

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Container>
          <TutotialStructure
            nameOperation='Multiplicação'
            imageOperation={division}
            description=''
            imageExampleOperation={imgExample}
            numberFeedback={6}
            IsFuntionNext
            nextScreen={handleModalVisible}
          />

          <ModalPrimary
            title='Parabéns, você concluiu a primeira etapa!'
            imageModal={imageModal}
            next={handleNavigation}
            visibliModal={modalVisible}
          />

        </Container>
      </ScrollView>
    </>

  );
}
