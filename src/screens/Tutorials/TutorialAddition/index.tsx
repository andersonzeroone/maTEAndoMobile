import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { TutotialStructure } from '../../../components/TutotialStructure';

import addition from '../../../assets/adicao.png'
import imgExample from '../../../assets/exAdicao.png'

import {
  Conteiner,
} from '../StyleScreenOperations/style';

export function tutorialAddition() {
  const navigation = useNavigation();

  return (
    <Conteiner>
      <TutotialStructure
        nameOperation='Adicão'
        imageOperation={addition}
        description='É uma operação matemática com a finalidade de somar, adicionar,
        acrescentar. Exemplo:'
        imageExampleOperation={imgExample}
        numberFeedback={3}
        nextScreen={()=> navigation.navigate('tutorialSubtraction')}
      />
    </Conteiner>
  );
}
