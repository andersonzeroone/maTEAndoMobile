import React from 'react';
import {useNavigation} from '@react-navigation/native';

import ex1 from '../../../assets/Ex1.png';
import ex2 from '../../../assets/Ex2.png';
import ex3 from '../../../assets/Ex3.png';
import imaNext from '../../../assets/bntAvancar.png';

import {
  Container,
  Title,
  Content,
  Text,
  ContainerExample,
  ImageExample,
  ContainerFeedBack,
  TextFeedBack,
  Footer,
  ButtonJump,
  TextButtonJump,
  ButtonNext,
  ImageButtonNext,
} from './styles';

export function  tutorialIntroduction() {
  const navigation = useNavigation();
  return (
    <Container>
      <Title>Introdução</Title>

      <Content>
        <Text>
          Antes de iniciarmos o jogo, que tal entender um pouco sobre números e
          quantidades. A representação do número e da quantidade de maçãs.
          Exemplos:
        </Text>

        <ContainerExample>
          <ImageExample source={ex1}/>
          <ImageExample source={ex2}/>
          <ImageExample source={ex3}/>
        </ContainerExample>

        <ContainerFeedBack>
          <TextFeedBack>1 de 6</TextFeedBack>
        </ContainerFeedBack>

        <Footer>
          <ButtonJump>
            <TextButtonJump>Pular</TextButtonJump>
          </ButtonJump>

          <ButtonNext onPress={()=> navigation.navigate('tutorialOperations') }>
            <ImageButtonNext source={imaNext} />
          </ButtonNext>
        </Footer>
      </Content>
    </Container>
  );
}
