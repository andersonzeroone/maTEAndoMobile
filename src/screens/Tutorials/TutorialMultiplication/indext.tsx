import React, {useState }from 'react';
import { useNavigation } from '@react-navigation/native';

import { TutotialStructure } from '../../../components/TutotialStructure';
import {ModalPrimary} from '../../../components/Modal';

import division from '../../../assets/multiplicacao.png'
import imgExample from '../../../assets/exMultiplicacao.png'
import imageModal from '../../../assets/sucesso.png';

import {
  Container,
} from '../StyleScreenOperations/style';

export function tutorialMultiplication() {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(true);

  return (
    <Container>
      <TutotialStructure
        nameOperation='Multiplicação'
        imageOperation={division}
        description='É uma operação matemática com a finalidade de multiplicar, 
          aumentar. Exemplo:'
        imageExampleOperation={imgExample}
        numberFeedback={6}
        nextScreen={()=> navigation.navigate('selectOperations')}
      />

      <ModalPrimary
        title='Parabéns, você concluiu a primeira etapa!'
        imageModal={imageModal}
        next={()=>{}}
        visible={modalVisible}
      />
      
    </Container>
  );
}
