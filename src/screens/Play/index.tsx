import React, { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView, View, Text, ImageSourcePropType } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import logo from "../../assets/Logo.png";
import home from "../../assets/home.png";
import equal from "../../assets/igual.png";
import interrogation from "../../assets/interrogacao.png";
import one from "../../assets/1.png";

import { addtionOperation } from "../../operations";
import { getRandom, getMinMaxValueAlternative } from "../../utils/utils";

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
} from "./styles";

interface resultProps {
  numberPrimary: number;
  numberSecondary: number;
  result: number;
}

interface Params {
  operation: string;
  imageOperation: ImageSourcePropType;
  object: ImageSourcePropType;
}
export function play() {
  const navigation = useNavigation();
  const route = useRoute();

  const { operation, imageOperation, object } = route.params as Params;

  const [resultOperation, setResultOperation] = useState<resultProps>(
    {} as resultProps
  );

  const [numberElementPrimary, setNumberElementPrimary] = useState<number[]>(
    []
  );
  const [numberElementSecondary, setNumberElementSecondary] = useState<
    number[]
  >([]);

  const [alternatives, setAlternatives] = useState<number[]>([]);

  useEffect(() => {
    start(operation, 2);
  }, []);

  function start(nameOperation: string | null, nivel: number){
  let limit = 4;

      if (nivel > 3) {
        limit = 5;
      }

      if (nivel > 10) {
        limit = 7;
      }

      if (nivel > 14) {
        limit = 10;
      }

      if(nameOperation === "addition" || "subtraction" ||  "division" || "multiplication" ){
        var addtion = addtionOperation(limit);
        setResultOperation(addtion);
      }

      handleArrayElements(resultOperation);
      getRandomAlternative(resultOperation.result);
  }


  function handleArrayElements(result: resultProps) {
    const arrayElmentsPrimary = [...Array(result.numberPrimary)].map(() =>
      getRandom(1, result.numberPrimary)
    );

    const arrayElmentsSecondary = [...Array(result.numberSecondary)].map(() =>
      getRandom(1, result.numberSecondary)
    );

    setNumberElementSecondary(arrayElmentsSecondary);
    setNumberElementPrimary(arrayElmentsPrimary);
  }

  function getRandomAlternative(result: number){
    const { valueMax, valueMin } = getMinMaxValueAlternative(result);
    const arrayAlternatives: number[] = [];
    console.log('max:',valueMax ,'-', valueMin)
    console.log('--------------');

    const array = [...Array(valueMax - valueMin)].map(() => {
      let numberRandom = getRandom(valueMin, valueMax);
      console.log('random',numberRandom)
      if ( arrayAlternatives.length == 3 ||numberRandom === result || arrayAlternatives.includes(numberRandom)){
        valueMax + 1;
        return;
      }

      arrayAlternatives.push(numberRandom);
    });

    let indexRandom = getRandom(0, 3);
    arrayAlternatives.splice(indexRandom, 0, result);

    setAlternatives(arrayAlternatives);
  }

  return (
    <ScrollView>
      <Container>
        <Header>
          <ButtonGoBackHome onPress={() => navigation.goBack()}>
            <IconHome source={home} />
          </ButtonGoBackHome>

          <Logo source={logo} />
          <Text>
            {resultOperation.numberPrimary} | {resultOperation.numberSecondary}{" "}
            - {resultOperation.result}
          </Text>

          {alternatives.map((item) => (
            <Text key={item}>({item})</Text>
          ))}
          <View />
        </Header>

        <Content>
          <ContainerElementsPrimary>
            {numberElementPrimary.map((item, index) => (
              <ElementsPrimary key={index} source={object} />
            ))}
          </ContainerElementsPrimary>
          <ImageOperation source={imageOperation} />

          <ContainerElementsSecondary>
            {numberElementSecondary.map((item, index) => (
              <ElementsPrimary key={index} source={object} />
            ))}
          </ContainerElementsSecondary>

          <ImageEqual source={equal} />

          <ImageInterrogation source={interrogation} />
        </Content>

        <ContainerAlternatives>
          <CardAlternative onPress={() => start("addition", 4)}>
            <NumberCard source={one} />
          </CardAlternative>

          <CardAlternative>
            <NumberCard source={one} />
          </CardAlternative>

          <CardAlternative>
            <NumberCard source={one} />
          </CardAlternative>

          <CardAlternative>
            <NumberCard source={one} />
          </CardAlternative>
        </ContainerAlternatives>
      </Container>
    </ScrollView>
  );
}
