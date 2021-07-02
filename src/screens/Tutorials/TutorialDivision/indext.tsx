import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { TutotialStructure } from '../../../components/TutotialStructure';

import division from '../../../assets/divisao.png'
import imgExample from '../../../assets/exDivisao.png'

import {
  Conteiner,
} from '../StyleScreenOperations/style';

export function tutorialDivision() {
  const navigation = useNavigation();

  return (
    <Conteiner>
      <TutotialStructure
        nameOperation='Divisão'
        imageOperation={division}
        description='É uma operação matemática com a finalidade de dividir, 
        repartir. Exemplo:'
        imageExampleOperation={imgExample}
        numberFeedback={6}
        nextScreen={()=> navigation.navigate('Home')}
      />
    </Conteiner>
  );
}
