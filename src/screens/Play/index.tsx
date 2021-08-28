import React, { useEffect, useState, useCallback } from 'react';
import { ScrollView, ImageSourcePropType, Alert, BackHandler, StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { ModalAnswer } from '../../components/ModalAnswer';
import { ModalAnswerError } from '../../components/ModalAnswerError';
import { OptionsMutateLogOut } from '../../components/OptionsMutateLogOut';

import { playSounds } from '../../utils/sounds/sound';
import {getPlaySound, savePlaySound} from '../../utils/storage';

import logo from '../../assets/Logo.png';
import home from '../../assets/bntVoltar.png';
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

import { getRandom, getMinMaxValueAlternative, handleSortArr } from '../../utils/utils';

const imagesNumbers = [
  { number: 0, image: zero },
  { number: 1, image: one },
  { number: 2, image: two },
  { number: 3, image: three },
  { number: 4, image: four },
  { number: 5, image: five },
  { number: 6, image: six },
  { number: 7, image: seven },
  { number: 8, image: eight },
  { number: 9, image: nine },
]
import {
  Container,
  Header,
  ButtonGoBackHome,
  IconHome,
  Logo,
  Content,
  ContainerOperation,
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

export interface alternativesProps {
  id: number,
  numberPrimary: number,
  numberSencondary: number,
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

  const [modalErrorVisible, setModalErrorVisible] = useState(false);

  const [nivel, setNivel] = useState<number>(2);

  const [sound, setSound] = useState<any>();

  const [handlePlaySound, setHandlePlaySound] = useState(true);

  useEffect(() => {
    loadPlaySound();
    start(operation);
  }, []);

  async function loadPlaySound(){
    let data = await getPlaySound();

    if(data === 'true'){
      setHandlePlaySound(true)
    }

    if(data === 'false'){
      setHandlePlaySound(false)
    }

    return data;
  }

  function start(nameOperation: string | null) {
    let limit = 4;
    if (nivel > 4) {
      limit = 7;
    }

    if (nivel > 10) {
      limit = 10;
    }

    if (nivel > 14) {
      limit = 12;
    }

    if (nameOperation === 'addition') {
      const addtion = additionOperation(limit);
      setResultOperation(addtion);
      handleArrayElements(addtion);
      generateArrayAlternatives(addtion.result);
    }

    if (nameOperation === 'subtraction') {
      const subtraction = subtractionOperation(limit);
      setResultOperation(subtraction);
      handleArrayElements(subtraction);
      generateArrayAlternatives(subtraction.result);
    }

    if (nameOperation === 'division') {
      const division = divisionOperation(limit);
      setResultOperation(division);
      handleArrayElements(division);
      generateArrayAlternatives(division.result);
    }

    if (nameOperation === 'multiplication') {
      const multiplication = multiplicationOperation(limit);
      setResultOperation(multiplication);
      handleArrayElements(multiplication);
      generateArrayAlternatives(multiplication.result);
    }
  }

  function generateArrayAlternatives(result: number) {
    const { valueMax, valueMin } = getMinMaxValueAlternative(result);
    const arrAlternativeObject: alternativesProps[] = []

    const arrayAlternatives: number[] = [];
    var newArray: number[] = []

    for (let x = valueMin; x <= valueMax; x++) {
      arrayAlternatives.push(x)
    }

    if (result <= 3 && arrayAlternatives.length == 4) {
      newArray = handleSortArr(arrayAlternatives);
    }

    if (result <= 3 && arrayAlternatives.length == 5) {
      arrayAlternatives.splice(arrayAlternatives.indexOf(result), 1);

      arrayAlternatives.splice(getRandom(0, 3), 1);
      arrayAlternatives.splice(getRandom(0, 3), 0, result);
      newArray = arrayAlternatives;
    }

    if ((result <= 3 || result >= 4) && arrayAlternatives.length == 6) {
      arrayAlternatives.splice(arrayAlternatives.indexOf(result), 1);

      arrayAlternatives.splice(getRandom(0, 4), 1);
      arrayAlternatives.splice(getRandom(0, 3), 1);
      arrayAlternatives.splice(getRandom(0, 3), 0, result);

      newArray = arrayAlternatives;
    }

    newArray.map((item, index) => {
      var valueInArr: string[] = []
      var numberPrimary = item;
      var numberSencondary = 0;

      if (item >= 10) {
        valueInArr = Array.from(item.toString());
        numberPrimary = parseInt(valueInArr[0]);
        numberSencondary = parseInt(valueInArr[1]);
      }

      arrAlternativeObject.push({
        id: item,
        numberPrimary,
        numberSencondary
      });

    });

    setAlternativesImages(arrAlternativeObject);
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

  async function checkedAlternative(value: number) {
    if (value === resultOperation.result){
      if(handlePlaySound){
        await playSound('correct');
      }
      setModalVisible(true);

      setTimeout(function () {
        setModalVisible(false);
      }, 2000);

      setNivel(state => (state + 1));
      start(operation);
      return;
    }
    if(handlePlaySound){
      await playSound('error');
    }
    setModalErrorVisible(true);

    setTimeout(function () {
      setModalErrorVisible(false);
    }, 3000);
  }

  async function playSound(typeSound: string) {

    const sound = await playSounds(typeSound)
    setSound(sound);

    if (!!sound) {
      await sound.playAsync();
    }

  }

  async function handleMutate(){
    setHandlePlaySound(state => (!state));
    handlePlaySound ? savePlaySound('false'): savePlaySound('true');
    
    if(!handlePlaySound){
      await playSound('feedback');
    }
  }

  async function handleNaviagationGoBack() {
    if (handlePlaySound) {
      await playSound('feedback');
    }
    navigation.navigate('selectOperations');
  }

  const backAction = useCallback(() => {
    Alert.alert('Sair', 'Deseja sair do jogo?', [
      {
        text: 'Não',
        onPress: () => null,
        style: 'cancel'
      },
      { text: 'Sim', onPress: () => BackHandler.exitApp() }
    ]);
    return true;
  }, []);

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  return (
    <>
      <StatusBar />
      <ScrollView>
        <Container>
          <ModalAnswer
            title='Parabéns você acertou!'
            emoji='😀'
            visibliModal={modalVisible}
          />
          <ModalAnswerError
            title='Por favor tente novamente 😃'
            visibliModal={modalErrorVisible}
          />
          <Header>
            <ButtonGoBackHome onPress={handleNaviagationGoBack}>
              <IconHome source={home} />
            </ButtonGoBackHome>

            <Logo source={logo} />

            <OptionsMutateLogOut
              visibleMutate
              visibleLogOut
              playFeedBack={handlePlaySound}
              handlePlayFeedBack={handleMutate}
            />

          </Header>

          <Content>
            <ContainerOperation>
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
            </ContainerOperation>


            <ImageEqual source={equal} />

            <ImageInterrogation source={interrogation} />
          </Content>
          <ContainerAlternatives>
            {alternativesImages.map((item, index) => (
              item.id < 10 ? (
                <CardAlternative key={index} onPress={() => checkedAlternative(item.id)}>
                  < NumberCard source={imagesNumbers[item.id].image} />
                </CardAlternative>
              ) : (
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
    </>
  );
}
