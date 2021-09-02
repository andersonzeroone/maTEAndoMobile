import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, View,TouchableOpacity } from 'react-native';

import { CardPrimary } from '../../components/CardsPrimary';
import { OptionsMutateLogOut } from '../../components/OptionsMutateLogOut';
import { DataReport } from '../Play';
import { playSounds } from '../../utils/sounds/sound';
import { getPlaySound, savePlaySound, getDataReport, RemoveDataReport} from '../../utils/storage';

import imageGoBack from '../../assets/home.png';

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
  TextInfo
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

  async function deleteData(){
    await RemoveDataReport()
  }

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
    <ScrollView>
      <Container>
        <ContentHeader>
          <ButtonGoBack onPress={handleNaviagationGoBack}>
            <ImageButtonGoBack source={imageGoBack} />
          </ButtonGoBack>
          <TouchableOpacity onPress={deleteData}>
            <Title>Relatório</Title>
          </TouchableOpacity>
         
          {/* <OptionsMutateLogOut
          visibleMutate
          visibleLogOut
          playFeedBack={handlePlaySound}
          handlePlayFeedBack={handleMutate}
        /> */}


          <View />
        </ContentHeader>

        <Content>
          <HeaderTable>
            <TextLabel>Data</TextLabel>
            <TextLabel>Operação</TextLabel>
            <TextLabel>Nº de acertos</TextLabel>
            <TextLabel>Incorretas</TextLabel>
            <TextLabel>Nº de jogadas</TextLabel>
          </HeaderTable>
          {

            report.map((item, index) => (
              <>
              <RowTable key={index}>                
                <TextInfo>{item.date}</TextInfo>
                <TextInfo>{item.operation}</TextInfo>
                <TextInfo>{item.corrects}</TextInfo>
                <TextInfo>{item.incorrects}</TextInfo>
                <TextInfo>{item.corrects+item.incorrects}</TextInfo>
              </RowTable>
              </>
            ))
          }
        </Content>
      </Container>
    </ScrollView>
  )
}
