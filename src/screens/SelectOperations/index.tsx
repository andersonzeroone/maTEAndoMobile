import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CardPrimary } from '../../components/CardsPrimary';

import imageGoBack from '../../assets/bntVoltar.png';
import addition from '../../assets/adicao.png';
import subtraction from '../../assets/subtracao.png';
import division from '../../assets/divisao.png';
import multiplication from '../../assets/multiplicacao.png';

import {
  Container,
  ContentHeader,
  Title,
  ButtonGoBack,
  ImageButtonGoBack,
  ContentCardsOperations,
} from './styles';
 
export function selectOperations(){

  const navigation = useNavigation();

  function handleSaveOperation(operation:string){
    console.warn(operation);
  }

  return(
    <Container>
      <ContentHeader>
        <ButtonGoBack onPress={()=> navigation.goBack()}>
          <ImageButtonGoBack source={imageGoBack}/>
        </ButtonGoBack>
        <Title>Selecione uma operação</Title>
         <View/> 
      </ContentHeader>

      <ContentCardsOperations>
        <CardPrimary
          image={addition}
          name='Soma'
          handleNavigation={()=> handleSaveOperation('addtion')}
        />

        <CardPrimary
          image={subtraction}
          name='Subtração'
          handleNavigation={()=> handleSaveOperation('subtraction')}
        />

        <CardPrimary
          image={division}
          name='Divisão'
          handleNavigation={()=> handleSaveOperation('divisão')}
        />

        <CardPrimary
          image={multiplication}
          name='Multiplicação'
          handleNavigation={()=> handleSaveOperation('multiplicação')}
        />
      </ContentCardsOperations>
    </Container>
  )
}