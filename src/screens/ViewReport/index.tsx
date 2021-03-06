import React, { useEffect, useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, Alert } from 'react-native';
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
  TextNotFound,
  ContainerOprions,
  ButtonViewResultReport,
  ButtonViewResultReportText
} from './styles';

export function ViewReport() {

  const navigation = useNavigation();

  const [sound, setSound] = useState<any>();

  const [handlePlaySound, setHandlePlaySound] = useState(true);

  const [report, setReport] = useState<DataReport[]>([]);

  const [dateNow, setDateNow] = useState<string>('');

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

    const date = new Date();
    console.log(date,'dia', date.getDate(), 'hora:', date.getUTCDate())
    let year = date.getFullYear().toString();
    let month = (date.getMonth() + 1).toString();
    let day = date.getDate().toString();

    let selectedDateString = day.concat('/', month, '/', year);

    setDateNow(selectedDateString);

  }, []);

  async function deleteData() {
    await RemoveDataReport();

    navigation.navigate('Home');
  }

  const deleteDataCheck = useCallback(async () => {
    Alert.alert('Deletar relat??rio', 'Deseja apagar dados do relat??rio?', [
      {
        text: 'N??o',
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
            <Title>Relat??rio</Title>          

          {/* <OptionsMutateLogOut
          visibleMutate
          visibleLogOut
          playFeedBack={handlePlaySound}
          handlePlayFeedBack={handleMutate}
        /> */}

        <ContainerOprions>
        <ButtonViewResultReport onPress={()=>  navigation.navigate('ResultReport')}>
            <Feather
              name='bar-chart-2'
              size={20}
              color='#FFFFFF'
            />
            <ButtonViewResultReportText> Resultados</ButtonViewResultReportText>
          </ButtonViewResultReport>

          <ButtonCleanData onPress={deleteDataCheck}>
            <Feather
              name='trash'
              size={18}
              color='#7018C9'
            />
            <ButtonCleanDataText>Apagar</ButtonCleanDataText>
          </ButtonCleanData>

        </ContainerOprions>

        </ContentHeader>

        <Content>
          <HeaderTable>
            <TextLabel>Data</TextLabel>
            <TextLabel>Opera????o</TextLabel>
            <TextLabel>C??lculo</TextLabel>
            <TextLabel>Tentativas</TextLabel>
            <TextLabel>N?? de erros</TextLabel>
            {/* <TextLabel>N?? de jogadas</TextLabel> */}
          </HeaderTable>
          {report.length > 0 ? (
            report.map((item, index) => (
              <RowTable key={index} isDetach={(index % 2 == 0 ? true : false)}>
                <TextInfo>{item.dateView}</TextInfo>
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
              <TextNotFound>Nenhuma informa????o encontrada.</TextNotFound>
            </ContainerNotFound>)


          }

        </Content>
      </Container>
    </ScrollView>
  )
}
