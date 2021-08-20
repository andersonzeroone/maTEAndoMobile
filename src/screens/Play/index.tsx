import React, {useEffect, useState } from 'react';
import { ScrollView, View, Text, ImageSourcePropType } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import {ModalAnswer} from '../../components/ModalAnswer';

import logo from '../../assets/Logo.png';
import home from '../../assets/home.png';
import equal from '../../assets/igual.png';
import interrogation from '../../assets/interrogacao.png';

import zero from '../../assets/0.4.png';
import one from '../../assets/1.4.png';
import two from '../../assets/2.4.png';
import three from '../../assets/3.4.png';
import four from '../../assets/4.4.png';
import five from '../../assets/5.4.png';
import six from '../../assets/6.4.png';
import seven from '../../assets/7.4.png';
import eight from '../../assets/8.4.png';
import nine from '../../assets/9.4.png';

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
  ContainerMensageError,
  TextMensageError
} from './styles';
import { func } from 'joi';

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

  const [alternativesImages, setAlternativesImages] = useState<alternativesProps[]>([]);
  
  const [modalVisible, setModalVisible] = useState(false);

  const [nivel, setNivel] = useState<number>(2);

  const [mensageError,setMensageError] = useState(false);

  useEffect(() => {
    start(operation);
  }, []);

  function start(nameOperation: string | null){
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
        generateArrayAlternatives(addtion.result);
      }

      if(nameOperation === 'subtraction'){
        const subtraction = subtractionOperation(limit);
        setResultOperation(subtraction);
        handleArrayElements(subtraction);
        generateArrayAlternatives(subtraction.result);
      }

      if(nameOperation === 'division'){
        const division = divisionOperation(limit);
        setResultOperation(division);
        handleArrayElements(division);
        generateArrayAlternatives(division.result);
      }

      if(nameOperation === 'multiplication'){
        const multiplication = multiplicationOperation(limit);
        setResultOperation(multiplication);
        handleArrayElements(multiplication);
        generateArrayAlternatives(multiplication.result);
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

  function generateArrayAlternatives(result: number){
    const { valueMax, valueMin } = getMinMaxValueAlternative(result);
    console.log('********')
    console.log('result:',result,'valueMax:', valueMax, 'ValueMin:',valueMin)
    let getRandam = true;
    const arrayAlternatives: number[] = [];

    while(getRandam){
      let numberRandom = getRandom(valueMin, valueMax);

      if(arrayAlternatives.length == 3){
        let indexRandom = getRandom(0, 3);
        console.log('indexRandom', indexRandom)
        arrayAlternatives.splice(indexRandom, 0, result);
        getRandam = false;

        handleArrayAlternatives(arrayAlternatives);
        console.log(arrayAlternatives)
        return;
      } 

      if(!(arrayAlternatives.includes(numberRandom) || numberRandom === result)){
        arrayAlternatives.push(numberRandom);
      }

    }
  }

  function handleArrayAlternatives(alternatives:number[]){
    const arrAlternativeObject:alternativesProps[] = []

    alternatives.map((item,index)=>{
      var valueInArr:string[] = []
      var numberPrimary = item;
      var numberSencondary = 0;

      if(item >= 10){
        valueInArr = Array.from(item.toString());
        numberPrimary = parseInt(valueInArr[0]);
        numberSencondary = parseInt(valueInArr[1]);        
      }

      arrAlternativeObject.push({
        id:item,
        numberPrimary,
        numberSencondary
      });

    });

    setAlternativesImages(arrAlternativeObject);
  }

  function checkedAlternative(value:number){
    if(value === resultOperation.result){
      setModalVisible(true);

      setTimeout(function(){
        setModalVisible(false);
      }, 1000);

      setNivel(state => (state +1));
      start(operation);
      return;
    }

    setMensageError(true);

    setTimeout(function(){
      setMensageError(false);
    }, 3000);
  }

  return (
    <ScrollView>
      <Container> 
        <ModalAnswer
          title='Parabéns você acertou!'
          emoji='😀'
          visibliModal={modalVisible}   
        />
        <Header>
          <ButtonGoBackHome onPress={()=>navigation.goBack()}>
            <IconHome source={home} />
          </ButtonGoBackHome>

          <Logo source={logo} />
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
        {
          mensageError&&(
            <ContainerMensageError>
              <TextMensageError>Por favor tente novamente 😃</TextMensageError>  
            </ContainerMensageError> 
          )
        }
   
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
