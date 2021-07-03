import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {Alert, ImageSourcePropType} from 'react-native';

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
  description:string;
  imageExampleOperation:ImageSourcePropType;
  numberFeedback:number;
  nextScreen:()=> void;
}

export function TutotialStructure({
  nameOperation,
  imageOperation,
  description,
  imageExampleOperation,
  numberFeedback,
  nextScreen
}:TutotialProps){

  const navigation = useNavigation();

  function handleAlert(){
    Alert.alert('Pular tutorial 📚','Deseja pular essa etapa?',[
      {
        text:'Não 😊',
        style:'cancel'
      },
      {
        text:'Sim 😀' ,
        onPress:()=>navigation.navigate('selectOperations'),
      }
    ]);
  }

  return(
    <>
      <ContenteNameImageOperation>
        <NameOperation>{nameOperation}:  </NameOperation>
        <ImageOperation source={imageOperation}/>    
      </ContenteNameImageOperation>

      <DescriptionOperation>
        {description}
      </DescriptionOperation>

      <ImageExampleOperation source={imageExampleOperation} />

      <ContainerFeedBack>
          <TextFeedBack>{numberFeedback} de 6</TextFeedBack>
      </ContainerFeedBack>

      <Footer>
        <ButtonBack onPress={() => navigation.goBack()}>
          <ImageButtonBack source={imageBack} />
        </ButtonBack>

        <ButtonJump onPress={handleAlert}>
          <TextButtonJump>Pular</TextButtonJump>
        </ButtonJump>

        <ButtonNext onPress={() => nextScreen()}>
          <ImageButtonNext  source={imageNext}/>
        </ButtonNext>
      </Footer>
  </>
  )
}