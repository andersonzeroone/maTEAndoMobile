import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
  CardsOperations,
  NameOperation,
  ImageOperation
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
        <CardsOperations onPress={()=> handleSaveOperation('addtion')}>
          <ImageOperation source={addition}/>
          <NameOperation>Soma</NameOperation>
        </CardsOperations>

        <CardsOperations onPress={()=> handleSaveOperation('subtraction')}>
          <ImageOperation source={subtraction}/>
          <NameOperation>Subtração</NameOperation>
        </CardsOperations>

        <CardsOperations onPress={()=> handleSaveOperation('division')}>
          <ImageOperation source={division}/>
          <NameOperation>Divisão</NameOperation>
        </CardsOperations>

        <CardsOperations onPress={()=> handleSaveOperation('multiplication')}>
          <ImageOperation source={multiplication}/>
          <NameOperation>Multiplicação</NameOperation>
        </CardsOperations>
      </ContentCardsOperations>
    </Container>
  )
}