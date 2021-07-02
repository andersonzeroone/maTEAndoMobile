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

export function tutorialPartThree() {
  const navigation = useNavigation();

  return (
    <Conteiner>
      {/* <Title>Parte 3</Title> */}

      <ContenteNameImageOperation>
        <NameOperation>Adição:  </NameOperation>
        <ImageOperation  source={addition}/>    
      </ContenteNameImageOperation>

      <DescriptionOperation>
        É uma operação matemática com a finalidade de somar, adicionar,
        acrescentar. Exemplo:
      </DescriptionOperation>
      <ImageExampleOperation  source={imgExample}/>

      <Footer>
        <ButtonBack onPress={() => navigation.goBack()}>
          <ImageButtonBack source={imaBack} />
        </ButtonBack>

        <ButtonJump>
          <TextButtonJump>Pular</TextButtonJump>
        </ButtonJump>

        <ButtonNext onPress={() => navigation.navigate('tutorialPartThree')}>
          <ImageButtonNext source={imaNext} />
        </ButtonNext>
      </Footer>
    </Conteiner>
  );
}
