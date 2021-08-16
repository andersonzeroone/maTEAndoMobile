import React from 'react';
import {StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import ImageBackGround from '../../assets/Home.png';
import logo from '../../assets/Logo.png';
import iconcontrole from '../../assets/iconcontrole.png';

import {
  Container,
  Header,
  Logo,
  Footer,
  ContentFooter,
  ImgControl,
  ButtonStart,
  TextButtonStart,
} from './styles';

export function Home() {

  const navigation = useNavigation();

  return (
    <>
      <StatusBar backgroundColor='#CCECFF'/>
      <Container source={ImageBackGround} resizeMode='stretch'>
        <Header>
          <Logo source={logo} />
        </Header>

        <Footer>
          <ContentFooter>
            <ImgControl source={iconcontrole} />
            <ButtonStart onPress={()=> navigation.navigate('tutorialIntroduction')}>
              <TextButtonStart>Jogar</TextButtonStart>
            </ButtonStart>
          </ContentFooter>
        </Footer>
      </Container>
    </>
  );
}
