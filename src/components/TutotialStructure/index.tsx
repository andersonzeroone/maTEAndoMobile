import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, ImageSourcePropType, View } from 'react-native';
import { OptionsMutateLogOut } from '../OptionsMutateLogOut';
import { getPlaySound, savePlaySound } from '../../utils/storage';
import { playSounds } from '../../utils/sounds/sound';

import imageBack from '../../assets/bntVoltar.png';
import imageNext from '../../assets/bntAvancar.png';

import {
  Header,
  ContenteNameImageOperation,
  NameOperation,
  ImageOperation,
  DescriptionOperation,
  ImageExampleOperation,
  ContainerFeedBack,
  TextFeedBack,
  Footer,
  ButtonBack,
  ImageButtonBack,
  ButtonJump,
  TextButtonJump,
  ButtonNext,
  ImageButtonNext,
} from './styles';

interface TutotialProps {
  nameOperation: string;
  imageOperation: ImageSourcePropType;
  description: string;
  imageExampleOperation: ImageSourcePropType;
  numberFeedback: number;
  screen?: string;
  nextScreen?: () => void | undefined;
  IsFuntionNext?: boolean;
}

export function TutotialStructure({
  nameOperation,
  imageOperation,
  description,
  imageExampleOperation,
  numberFeedback,
  screen,
  nextScreen,
  IsFuntionNext
}: TutotialProps) {

  const navigation = useNavigation();

  const [handlePlaySound, setHandlePlaySound] = useState(true);
  const [sound, setSound] = useState<any>();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadPlaySound();
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    loadPlaySound();
  }, []);

  async function loadPlaySound() {
    let data = await getPlaySound();

    if (data === 'true') {
      setHandlePlaySound(true)
    }

    if (data === 'false') {
      setHandlePlaySound(false)
    }

    return data;
  }

  async function playSound(typeSound: string) {

    const sound = await playSounds(typeSound)
    setSound(sound);

    if (!!sound) {
      await sound.playAsync();
    }

  }
  async function handleMutate() {
    setHandlePlaySound(state => (!state));
    handlePlaySound ? savePlaySound('false') : savePlaySound('true');

    if (!handlePlaySound) {
      await playSound('feedback');
    }
  }

  async function handleNavigationGoBack(router: string | undefined) {
    if (handlePlaySound) {
      await playSound('feedback');
    }

    router === '' ? navigation.goBack() : null;

    if (router) {
      navigation.navigate(router);
    }

  }

  async function handleAlert() {
    if (handlePlaySound) {
      await playSound('feedback');
    }

    Alert.alert('Pular tutorial 📚', 'Deseja pular essa etapa?', [
      {
        text: 'Não 😊',
        style: 'cancel'
      },
      {
        text: 'Sim 😀',
        onPress: () => navigation.navigate('selectOperations'),
      }
    ]);
  }

  return (
    <>
      <Header>
        <View />
        <ContenteNameImageOperation>
          <NameOperation>{nameOperation}: </NameOperation>
          <ImageOperation source={imageOperation} />
        </ContenteNameImageOperation>


        <OptionsMutateLogOut
          visibleMutate
          visibleLogOut
          playFeedBack={handlePlaySound}
          handlePlayFeedBack={handleMutate}
        />
      </Header>

      <DescriptionOperation>
        {description}
      </DescriptionOperation>

      <ImageExampleOperation source={imageExampleOperation} />

      <ContainerFeedBack>
        <TextFeedBack>{numberFeedback} de 6</TextFeedBack>
      </ContainerFeedBack>

      <Footer>
        <ButtonBack onPress={() => handleNavigationGoBack('')}>
          <ImageButtonBack source={imageBack} />
        </ButtonBack>

        <ButtonJump onPress={handleAlert}>
          <TextButtonJump>Pular</TextButtonJump>
        </ButtonJump>

        {IsFuntionNext && nextScreen? (
          <ButtonNext onPress={() => nextScreen()}>
            <ImageButtonNext source={imageNext} />
          </ButtonNext>
        ) : (<ButtonNext onPress={() => handleNavigationGoBack(screen)}>
          <ImageButtonNext source={imageNext} />
        </ButtonNext>)

        }

      </Footer>
    </>
  )
}