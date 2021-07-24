import React, {useEffect, useState } from 'react';
import { ScrollView, View, Text, ImageSourcePropType } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import logo from '../../assets/Logo.png';
import home from '../../assets/home.png';
import equal from '../../assets/igual.png';
import interrogation from '../../assets/interrogacao.png';
import zero from '../../assets/0.png';
import one from '../../assets/1.png';
import two from '../../assets/2.png';
import three from '../../assets/3.png';
import four from '../../assets/4.png';
import five from '../../assets/5.png';
import six from '../../assets/6.png';
import seven from '../../assets/7.png';
import eight from '../../assets/8.png';
import nine from '../../assets/9.png';

import { 
  additionOperation, 
  subtractionOperation,
  divisionOperation,
  multiplicationOperation
} from '../../operations';

import { getRandom, getMinMaxValueAlternative } from '../../utils/utils';

const imagesNumbers = [
  {number:0,image:zero},
  {number:1,image:one},
  {number:2,image:two},
  {number:3,image:three},
  {number:4,image:four},
  {number:5,image:five},
  {number:6,image:six},
  {number:7,image:seven},
  {number:8,image:eight},
  {number:9,image:nine},
]
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
  AlternativesList
} from './styles';

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

export interface alternativesProps{
  id:number,
  numberPrimary:number,
  numberSencondary:number,
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

  const [alternativesImages, setAlternativesImages] = useState<alternativesProps[]>([]);

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

      if(nameOperation === 'addition'){
        const addtion = additionOperation(limit);
        setResultOperation(addtion);
        handleArrayElements(addtion);
        getRandomAlternative(addtion.result);
      }

      // ||  'division' || 'multiplication' 
      if(nameOperation === 'subtraction'){
        const subtraction = subtractionOperation(limit);
        setResultOperation(subtraction);
        handleArrayElements(subtraction);
        getRandomAlternative(subtraction.result);
      }

      if(nameOperation === 'division'){
        const division = divisionOperation(limit);
        setResultOperation(division);
        handleArrayElements(division);
        getRandomAlternative(division.result);
      }

      if(nameOperation === 'multiplication'){
        const multiplication = multiplicationOperation(limit);
        setResultOperation(multiplication);
        handleArrayElements(multiplication);
        getRandomAlternative(multiplication.result);
      }      
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
    const arrAlternativeObject:alternativesProps[] = []
    // console.log('max:',valueMax ,'-', valueMin)
    // console.log('--------------');

    const array = [...Array(valueMax - valueMin)].map(() => {
      let numberRandom = getRandom(valueMin, valueMax);
      // console.log('random',numberRandom)
      if ( arrayAlternatives.length == 3 ||numberRandom === result || arrayAlternatives.includes(numberRandom)){
        valueMax + 1;
        return;
      }

      arrayAlternatives.push(numberRandom);
    });

    let indexRandom = getRandom(0, 3);
    arrayAlternatives.splice(indexRandom, 0, result);

    setAlternatives(arrayAlternatives);
    arrayAlternatives.map((item,index)=>{
       console.log(item);
      var valueInArr:string[] = []
      var numberPrimary = item;
      var numberSencondary = 0;
    
      if(item >= 10){
        valueInArr = Array.from(item.toString());
        numberPrimary = parseInt(valueInArr[0]);
        numberSencondary = parseInt(valueInArr[1]);        
      }
      
      const dataAlternatives = {
        id:item,
        numberPrimary,
        numberSencondary
      }

      console.log(dataAlternatives);

      arrAlternativeObject.push(dataAlternatives)

    });

    setAlternativesImages(arrAlternativeObject);
   
  }

  function checkedAlternative(value:number){
    if(value === resultOperation.result){
      console.log('acertou');
    }
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
            {resultOperation.numberPrimary} | {resultOperation.numberSecondary}{' '}
            - {resultOperation.result}
          </Text>

          {alternatives.map((item, index) => (
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
          {alternativesImages.map((item, index)=>(
            item.id < 10 ?(
              <CardAlternative key={index} onPress={() => checkedAlternative(item.id)}>
              < NumberCard source={imagesNumbers[item.id].image} />
              </CardAlternative>
            ):(
              <CardAlternative key={index} onPress={() => checkedAlternative(item.id)}>
                <NumberCard source={imagesNumbers[alternativesImages[index].numberPrimary].image} />
                <NumberCard source={imagesNumbers[alternativesImages[index].numberSencondary].image} />
              </CardAlternative>
            )
          ))

          }
        </ContainerAlternatives>
      </Container>
    </ScrollView>
  );
}
