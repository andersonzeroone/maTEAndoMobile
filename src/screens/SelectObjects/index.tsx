import React from 'react';
import { View,ImageSourcePropType} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
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
 
interface Params{
  operation:string,
  imageOperation:ImageSourcePropType,
}
export function selectObjects(){
  const navigation = useNavigation();
  const route = useRoute();

  const dataRoute = route.params as Params;

  function handleNavigation(objectSelect:any){
    navigation.navigate('play',{
      ...dataRoute,
      object:objectSelect
    });
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
          handleNavigation={()=> handleNavigation(apple)}
        />

        <CardPrimary
          image={car}
          name='carro'
          handleNavigation={()=> handleNavigation(car)}
        />

        <CardPrimary
          image={flower}
          name='Flor'
          handleNavigation={()=> handleNavigation(flower)}
        />

        <CardPrimary
          image={iceCream}
          name='Sorverte'
          handleNavigation={()=> handleNavigation(iceCream)}
        />
      </ContentCardsOperations>
    </Container>
  )
}