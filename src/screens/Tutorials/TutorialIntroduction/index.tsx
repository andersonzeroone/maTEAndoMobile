import React from 'react';
import { useNavigation } from '@react-navigation/native';

import ex1 from '../../../assets/Ex1.png';
import ex2 from '../../../assets/Ex2.png';
import ex3 from '../../../assets/Ex3.png';
import imaNext from '../../../assets/bntAvancar.png';

import {
  Container,
  Title,
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
import { Alert, ScrollView } from 'react-native';

export function tutorialIntroduction() {
  const navigation = useNavigation();

  function handleAlert() {
    Alert.alert('Pular tutorial 📚', 'Deseja pular essa etapa?', [
      {
        text: 'Não 😊',
        style: 'cancel'
      },
      {
        text: 'Sim 😀',
        onPress: () => navigation.navigate('selectOperations'),
      }
    ]);
  }

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Container>

          <Title>Introdução</Title>

          <Text>
            Antes de iniciarmos o jogo, que tal entender um pouco sobre números e
            quantidades. A representação do número e da quantidade de maçãs.
            Exemplos:
          </Text>

          <ContainerExample>
            <ImageExample source={ex1} />
            <ImageExample source={ex2} />
            <ImageExample source={ex3} />
          </ContainerExample>

          <ContainerFeedBack>
            <TextFeedBack>1 de 6</TextFeedBack>
          </ContainerFeedBack>

          <Footer>
            <ButtonJump onPress={handleAlert}>
              <TextButtonJump>Pular</TextButtonJump>
            </ButtonJump>

            <ButtonNext onPress={() => navigation.navigate('tutorialOperations')}>
              <ImageButtonNext source={imaNext} />
            </ButtonNext>
          </Footer>
        </Container>
      </ScrollView>
    </>
  );
}
