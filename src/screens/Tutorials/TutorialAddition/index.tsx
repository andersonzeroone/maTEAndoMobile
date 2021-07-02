import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { TutotialStructure } from '../../../components/TutotialStructure';

import addition from '../../../assets/adicao.png'
import imgExample from '../../../assets/expart3.png'

import {
  Conteiner,
} from './styles';

export function tutorialAddition() {
  const navigation = useNavigation();

  return (
    <Conteiner>
      <TutotialStructure
        nameOperation='Adicão'
        imageOperation={addition}
        imageExampleOperation={imgExample}
        numberFeedback={3}
        nextScreen={()=> navigation.navigate('Home')}
      />
    </Conteiner>
  );
}
