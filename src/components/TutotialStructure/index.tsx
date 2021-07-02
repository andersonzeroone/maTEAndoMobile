import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {ImageSourcePropType} from 'react-native';

import imageBack from '../../assets/bntVoltar.png';
import imageNext from '../../assets/bntAvancar.png';

import {
  ContenteNameImageOperation,
  NameOperation,
  ImageOperation,
  DescriptionOperation,
  ImageExampleOperation,
  ContainerFeedBack,
  TextFeedBack,
  Footer,
  ButtonBack,
  ImageButtonBack,
  ButtonJump,
  TextButtonJump,
  ButtonNext,
  ImageButtonNext,
} from './styles';

interface TutotialProps{
  nameOperation:string;
  imageOperation:ImageSourcePropType;
  imageExampleOperation:ImageSourcePropType;
  numberFeedback:number;
  nextScreen:()=> void;
}

export function TutotialStructure({
  nameOperation,
  imageOperation,
  imageExampleOperation,
  numberFeedback,
  nextScreen
}:TutotialProps){

  const navigation = useNavigation();

  return(
    <>
      <ContenteNameImageOperation>
        <NameOperation>{nameOperation}:  </NameOperation>
        <ImageOperation source={imageOperation}/>    
      </ContenteNameImageOperation>

      <DescriptionOperation>
        É uma operação matemática com a finalidade de somar, adicionar,
        acrescentar. Exemplo:
      </DescriptionOperation>

      <ImageExampleOperation source={imageExampleOperation} />

      <ContainerFeedBack>
          <TextFeedBack>{numberFeedback} de 6</TextFeedBack>
      </ContainerFeedBack>

      <Footer>
        <ButtonBack onPress={() => navigation.goBack()}>
          <ImageButtonBack source={imageBack} />
        </ButtonBack>

        <ButtonJump>
          <TextButtonJump>Pular</TextButtonJump>
        </ButtonJump>

        <ButtonNext onPress={() => nextScreen()}>
          <ImageButtonNext  source={imageNext}/>
        </ButtonNext>
      </Footer>
  </>
  )
}