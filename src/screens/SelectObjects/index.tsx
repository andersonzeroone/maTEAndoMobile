import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CardPrimary } from '../../components/CardsPrimary';

import imageGoBack from '../../assets/bntVoltar.png';
import iconClick from '../../assets/click.png';
import apple from '../../assets/maca.png';
import car from '../../assets/carro.png';
import flower from '../../assets/flor.png';
import iceCream from '../../assets/sorverte.png';

import {
  Container,
  ContentHeader,
  ContenteTitle,
  IconClick,
  Title,
  ButtonGoBack,
  ImageButtonGoBack,
  ContentCardsOperations,
} from './styles';
 
export function selectObjects(){

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

        <ContenteTitle>
          <Title>Selecione um objeto</Title>
          <IconClick source={iconClick}/>
        </ContenteTitle>

         <View/> 
      </ContentHeader>

      <ContentCardsOperations>
      <CardPrimary
          image={apple}
          name='Maça'
          handleNavigation={()=> navigation.navigate('play')}
        />

        <CardPrimary
          image={car}
          name='carro'
          handleNavigation={()=> handleSaveOperation('subtraction')}
        />

        <CardPrimary
          image={flower}
          name='Flor'
          handleNavigation={()=> handleSaveOperation('divisão')}
        />

        <CardPrimary
          image={iceCream}
          name='Sorverte'
          handleNavigation={()=> navigation.navigate('selectObjects')}
        />
      </ContentCardsOperations>
    </Container>
  )
}