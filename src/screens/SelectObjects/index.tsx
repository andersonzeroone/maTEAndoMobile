import React, {useEffect}from 'react';
import {  Alert, BackHandler, ImageSourcePropType} from 'react-native';
import { Feather } from '@expo/vector-icons';
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
  ButtonOptions,
  TextMenu,
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