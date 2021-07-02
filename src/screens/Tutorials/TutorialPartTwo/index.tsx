import React from 'react';
import { useNavigation } from '@react-navigation/native';

import addition from '../../../assets/adicao.png';
import subtraction from '../../../assets/subtracao.png';
import division from '../../../assets/divisao.png';
import multiplication from '../../../assets/multiplicacao.png';

import imaBack from '../../../assets/bntVoltar.png';
import imaNext from '../../../assets/bntAvancar.png';

import {
  Container,
  Title,
  Content,
  Text,
  ContainerOperations,
  CardOperation,
  TitleOperation,
  ImageOperations,
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

export function tutorialPartTwo(){
  const navigation = useNavigation();
  return (
    <Container>
      <Title>Parte 2</Title>

      <Content>
        <Text>
          As operações matemáticas são:
        </Text>

        <ContainerOperations>
          <CardOperation>
            <ImageOperations source={addition}/>
            <TitleOperation>Adição</TitleOperation>
          </CardOperation>

          <CardOperation>  
            <ImageOperations source={subtraction}/>
            <TitleOperation>Subtração</TitleOperation>
          </CardOperation>

          <CardOperation>
            <ImageOperations source={division}/>
            <TitleOperation>Divição</TitleOperation>
          </CardOperation>

          <CardOperation>
            <ImageOperations source={multiplication}/>
            <TitleOperation>Multiplicação</TitleOperation>
          </CardOperation>
        </ContainerOperations>

        <ContainerFeedBack>
          <TextFeedBack>2 de 6</TextFeedBack>
        </ContainerFeedBack>

        <Footer>
          <ButtonBack onPress={()=> navigation.goBack()}>
            <ImageButtonBack source={imaBack} />
          </ButtonBack>

          <ButtonJump>
            <TextButtonJump>Pular</TextButtonJump>
          </ButtonJump>

          <ButtonNext onPress={()=> navigation.navigate('tutorialPartThree')}>
            <ImageButtonNext source={imaNext} />
          </ButtonNext>
        </Footer>
      </Content>
    </Container>
  );
}
