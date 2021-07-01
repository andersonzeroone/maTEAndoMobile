import React from "react";

import ImageBackGround from "../../assets/Home.png";
import logo from "../../assets/Logo.png";
import iconcontrole from "../../assets/iconcontrole.png";

import {
  Container,
  Header,
  Logo,
  Footer,
  ContentFooter,
  ImgControl,
  ButtonStart,
  TextButtonStart,
} from "./styles";
import { StatusBar } from "expo-status-bar";

export function Home() {
  return (
    <>
      <StatusBar backgroundColor='#CCECFF'/>
      <Container source={ImageBackGround} resizeMode="stretch">
        <Header>
          <Logo source={logo} />
        </Header>

        <Footer>
          <ContentFooter>
            <ImgControl source={iconcontrole} />
            <ButtonStart>
              <TextButtonStart>Jogar</TextButtonStart>
            </ButtonStart>
          </ContentFooter>
        </Footer>
      </Container>
    </>
  );
}
