import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { TutotialStructure } from '../../../components/TutotialStructure';

import division from '../../../assets/divisao.png'
import imgExample from '../../../assets/exDivisao.png'

import {
  Container,
} from '../StyleScreenOperations/style';

export function tutorialDivision() {
  const navigation = useNavigation();

  return (
    <Container>
      <TutotialStructure
        nameOperation='Divisão'
        imageOperation={division}
        description='É uma operação matemática com a finalidade de dividir, 
        repartir. Exemplo:'
        imageExampleOperation={imgExample}
        numberFeedback={5}
        nextScreen={()=> navigation.navigate('tutorialMultiplication')}
      />
    </Container>
  );
}
