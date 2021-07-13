import React from 'react';
import {ScrollView, View} from 'react-native';

import logo from '../../assets/Logo.png';
import home from '../../assets/home.png';
import maca from '../../assets/maca.png';
import operation from '../../assets/adicao.png';
import equal from '../../assets/igual.png';
import interrogation from '../../assets/interrogacao.png';
import one from '../../assets/1.png';

import {
  Container,
  Header,
  ButtonGoBackHome,
  IconHome,
  Logo,
  Content,
  ContainerElementsPrimary,
  ElementsPrimary,
  ContainerElementsSecondary,
  ElementsSecondary,
  ImageOperation,
  ImageEqual,
  ImageInterrogation,
  ContainerAlternatives,
  CardAlternative,
  NumberCard,
} from './styles';

export function play(){
  return (
    <ScrollView>
      <Container>
        <Header>
          <ButtonGoBackHome>
            <IconHome source={home}/>
          </ButtonGoBackHome>

          <Logo source={logo}/>

          <View />
        </Header>

        <Content>
          <ContainerElementsPrimary>
            <ElementsPrimary source={maca}/>
            <ElementsPrimary source={maca}/>
            <ElementsPrimary source={maca}/>
            <ElementsPrimary source={maca}/>
            <ElementsPrimary source={maca}/>
            <ElementsPrimary source={maca}/>
          </ContainerElementsPrimary>

          <ImageOperation source={operation}/>

          <ContainerElementsSecondary>
            <ElementsPrimary source={maca}/>
            <ElementsPrimary source={maca}/>
            <ElementsPrimary source={maca}/>
            <ElementsPrimary source={maca}/>
            <ElementsPrimary source={maca}/>
            <ElementsPrimary source={maca}/>
          </ContainerElementsSecondary>

          <ImageEqual source={equal}/>

          <ImageInterrogation source={interrogation}/>
        </Content>

        <ContainerAlternatives>
          <CardAlternative>
            <NumberCard source={one}/>
          </CardAlternative>

          <CardAlternative>
            <NumberCard source={one}/>
          </CardAlternative>

          <CardAlternative>
            <NumberCard source={one}/>
          </CardAlternative>

          <CardAlternative>
            <NumberCard source={one}/>
          </CardAlternative>
        </ContainerAlternatives>
      </Container>
    </ScrollView>
  );
}
