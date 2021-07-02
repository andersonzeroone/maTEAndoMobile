import React from 'react';
import { useNavigation } from '@react-navigation/native';

import addition from '../../../assets/adicao.png'
import imgExample from '../../../assets/expart3.png'
import imaBack from '../../../assets/bntVoltar.png';
import imaNext from '../../../assets/bntAvancar.png';

import {
  Conteiner,
  Title,
  ContenteNameImageOperation,
  NameOperation,
  ImageOperation,
  DescriptionOperation,
  ImageExampleOperation,
  Footer,
  ButtonBack,
  ImageButtonBack,
  ButtonJump,
  TextButtonJump,
  ButtonNext,
  ImageButtonNext,
} from './styles';
import { Tutotialstructure } from '../../../components/Tutotialstructure';

export function tutorialAddition() {
  const navigation = useNavigation();

  return (
    <Conteiner>
      <Tutotialstructure
        nameOperation='Adicão'
        imageOperation={addition}
        imageExampleOperation={imgExample}
        numberFeedback={3}
        nextScreen={()=> navigation.navigate('Home')}
      />
    </Conteiner>
  );
}
