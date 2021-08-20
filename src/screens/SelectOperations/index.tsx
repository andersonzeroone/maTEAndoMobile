import React, { useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { CardPrimary } from '../../components/CardsPrimary';
import { Alert, BackHandler } from 'react-native';

import imageGoBack from '../../assets/bntVoltar.png';
import addition from '../../assets/adicao.png';
import subtraction from '../../assets/subtracao.png';
import division from '../../assets/divisao.png';
import multiplication from '../../assets/multiplicacao.png';

import {
  Container,
  ContentHeader,
  Title,
  ButtonOptions,
  TextMenu,
  ButtonGoBack,
  ImageButtonGoBack,
  ContentCardsOperations,
} from './styles';

export function selectOperations() {

  const navigation = useNavigation();

  function handleNavigation(nameOperation: string, imageOperation: any) {
    navigation.navigate('selectObjects', {
      operation: nameOperation,
      imageOperation
    });
  }

  const backAction = () => {
    Alert.alert('Sair', 'Deseja sair do jogo?', [
      {
        text: 'Não',
        onPress: () => null,
        style: 'cancel'
      },
      { text: 'Sim', onPress: () => BackHandler.exitApp() }
    ]);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  return (
    <Container>
      <ContentHeader>
        <ButtonGoBack onPress={() => navigation.goBack()}>
          <ImageButtonGoBack source={imageGoBack} />
        </ButtonGoBack>
        <Title>Selecione uma operação</Title>

        <ButtonOptions onPress={backAction}>
          <TextMenu>Sair</TextMenu>
          <Feather
            name='log-out'
            size={20}
            color='#7018C9'
          />
        </ButtonOptions>
      </ContentHeader>

      <ContentCardsOperations>
        <CardPrimary
          image={addition}
          name='Soma'
          handleNavigation={() => handleNavigation('addition', addition)}
        />

        <CardPrimary
          image={subtraction}
          name='Subtração'
          handleNavigation={() => handleNavigation('subtraction', subtraction)}
        />

        <CardPrimary
          image={division}
          name='Divisão'
          handleNavigation={() => handleNavigation('division', division)}
        />

        <CardPrimary
          image={multiplication}
          name='Multiplicação'
          handleNavigation={() => handleNavigation('multiplication', multiplication)}
        />
      </ContentCardsOperations>
    </Container>
  )
}