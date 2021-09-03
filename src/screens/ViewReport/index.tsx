import React, { useEffect, useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, View, TouchableOpacity, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { CardPrimary } from '../../components/CardsPrimary';
import { OptionsMutateLogOut } from '../../components/OptionsMutateLogOut';
import { DataReport } from '../Play';
import { playSounds } from '../../utils/sounds/sound';
import { getPlaySound, savePlaySound, getDataReport, RemoveDataReport } from '../../utils/storage';

import imageGoBack from '../../assets/home.png';
import notFound from '../../assets/not_found.png';

import {
  Container,
  ContentHeader,
  Title,
  ButtonGoBack,
  ImageButtonGoBack,
  Content,
  HeaderTable,
  TextLabel,
  RowTable,
  TextInfo,
  ButtonCleanData,
  ButtonCleanDataText,
  ContainerNotFound,
  ImageNotFound,
  TextNotFound
} from './styles';

export function ViewReport() {

  const navigation = useNavigation();

  const [sound, setSound] = useState<any>();

  const [handlePlaySound, setHandlePlaySound] = useState(true);

  const [report, setReport] = useState<DataReport[]>([]);

  useEffect(() => {
    async function loadDataReport() {
      const data = await getDataReport();
      setReport(data);
    }

    loadDataReport()
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadPlaySound();
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    loadPlaySound();
  }, []);

  async function deleteData() {
    await RemoveDataReport();

    navigation.navigate('Home');
  }

  const deleteDataCheck = useCallback(async () => {
    Alert.alert('Deletar relatório', 'Deseja apagar dados do relatório?', [
      {
        text: 'Não',
        onPress: () => null,
        style: 'cancel'
      },
      { text: 'Sim', onPress: () => deleteData() }
    ]);
    return true;
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

  async function handleNaviagationGoBack() {
    if (handlePlaySound) {
      await playSound('feedback');
    }

    navigation.navigate('Home');
  }

  async function handleMutate() {
    setHandlePlaySound(state => (!state));
    handlePlaySound ? savePlaySound('false') : savePlaySound('true');

    if (!handlePlaySound) {
      await playSound('feedback');
    }
  }


  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      <Container>
        <ContentHeader>
          <ButtonGoBack onPress={handleNaviagationGoBack}>
            <ImageButtonGoBack source={imageGoBack} />
          </ButtonGoBack>

          <Title>Relatório</Title>

          {/* <OptionsMutateLogOut
          visibleMutate
          visibleLogOut
          playFeedBack={handlePlaySound}
          handlePlayFeedBack={handleMutate}
        /> */}


          <ButtonCleanData onPress={deleteDataCheck}>
            <Feather
              name='trash'
              size={18}
              color='#7018C9'
            />
            <ButtonCleanDataText>Apagar</ButtonCleanDataText>
          </ButtonCleanData>
        </ContentHeader>

        <Content>
          <HeaderTable>
            <TextLabel>Data</TextLabel>
            <TextLabel>Operação</TextLabel>
            <TextLabel>Cálculo</TextLabel>
            <TextLabel>Tentativas</TextLabel>
            <TextLabel>Nº de erros</TextLabel>
            {/* <TextLabel>Nº de jogadas</TextLabel> */}
          </HeaderTable>
          {report.length > 0 ? (
            report.map((item, index) => (
              <RowTable key={index} isDetach={(index % 2 == 0 ? true : false)}>
                <TextInfo>{item.date}</TextInfo>
                <TextInfo>{item.nameOperation}</TextInfo>
                <TextInfo>{item.calculation}</TextInfo>
                <TextInfo>{item.corrects + item.incorrects}</TextInfo>
                <TextInfo>{item.incorrects}</TextInfo>
                {/* <TextInfo>{item.corrects+item.incorrects}</TextInfo> */}
              </RowTable>
            ))
          ) : (
            <ContainerNotFound>
              <ImageNotFound
                source={notFound}
              />
              <TextNotFound>Nenhuma informação encontrada.</TextNotFound>
            </ContainerNotFound>)


          }

        </Content>
      </Container>
    </ScrollView>
  )
}
