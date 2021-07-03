import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { TutotialStructure } from '../../../components/TutotialStructure';

import subtraction from '../../../assets/subtracao.png'
import imgExample from '../../../assets/exSubtracao.png'

import {
  Conteiner,
} from '../StyleScreenOperations/style';

export function tutorialSubtraction() {
  const navigation = useNavigation();

  return (
    <Conteiner>
      <TutotialStructure
        nameOperation='Subtração'
        imageOperation={subtraction}
        description='É uma operação matemática com a finalidade de 
          diminuir, reduzir, tirar. Exemplo:'
        imageExampleOperation={imgExample}
        numberFeedback={4}
        nextScreen={()=> navigation.navigate('tutorialDivision')}
      />
    </Conteiner>
  );
}
