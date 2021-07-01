import React from "react";
import ex1 from "../../assets/Ex1.png";
import ex2 from "../../assets/Ex2.png";
import ex3 from "../../assets/Ex3.png";
import imaNext from "../../assets/bntAvancar.png";

import {
  Container,
  Title,
  Content,
  Text,
  ContainerExample,
  ImageExample,
  Footer,
  ButtonJump,
  TextButtonJump,
  ButtonNext,
  ImageButtonNext,
} from "./styles";

export function Introduction() {
  return (
    <Container>
      <Title>Introdução</Title>

      <Content>
        <Text>
          Antes de iniciarmos o jogo, que tal entender um pouco sobre números e
          quantidades. A representação do número e da quantidade de maçãs.
          Exemplos:
        </Text>

        <ContainerExample>
          <ImageExample source={ex1}/>
          <ImageExample source={ex2}/>
          <ImageExample source={ex3}/>
        </ContainerExample>

        <Footer>
          <ButtonJump>
            <TextButtonJump>Pular</TextButtonJump>
          </ButtonJump>

          <ButtonNext>
            <ImageButtonNext source={imaNext} />
          </ButtonNext>
        </Footer>
      </Content>
    </Container>
  );
}
