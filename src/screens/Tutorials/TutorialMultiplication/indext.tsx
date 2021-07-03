import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { TutotialStructure } from '../../../components/TutotialStructure';

import division from '../../../assets/multiplicacao.png'
import imgExample from '../../../assets/exMultiplicacao.png'

import {
  Conteiner,
} from '../StyleScreenOperations/style';

export function tutorialMultiplication() {
  const navigation = useNavigation();

  return (
    <Conteiner>
      <TutotialStructure
        nameOperation='Multiplicação'
        imageOperation={division}
        description='É uma operação matemática com a finalidade de multiplicar, 
          aumentar. Exemplo:'
        imageExampleOperation={imgExample}
        numberFeedback={6}
        nextScreen={()=> navigation.navigate('selectOperations')}
      />
    </Conteiner>
  );
}
