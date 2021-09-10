import React, { useCallback, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ScrollView,
  View,
  TouchableOpacity,
  Platform,
  Text,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";

import { DataReport } from "../Play";
import { getDataReport } from "../../utils/storage";

import imageGoBack from "../../assets/bntVoltar.png";
import notFound from "../../assets/not_found.png";

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
  ContainerFilter,
  ContentFilter,
  ButtonSetDate,
  DateText,
  DateLabel,
  SelectContainer,
  PickerSelect,
  ButtonSearchResults,
  ButtonSearchResultsText,
} from "./styles";
import { string } from "joi";

interface FilterReportProps {
  operation: string;
  rateHit: number;
}

export function ResultReport() {
  const navigation = useNavigation();

  const [report, setReport] = useState<DataReport[]>([]);

  const [filterReport, setFilterReport] = useState<FilterReportProps[]>([]);

  const [dateNow, setDateNow] = useState<string>("");

  const [dateInitial, setDateInitial] = useState<string>("");
  const [dateFinish, setDateFinish] = useState<string>("");

  const [isDateInitial, setIsDateInitial] = useState(false);
  const [isDateFinish, setIsDateFinish] = useState(false);

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const [selectedOperation, setSelectedOperation] = useState<string>("Todos");

  useEffect(() => {
    async function loadDataReport() {
      const data = await getDataReport();
      setReport(data);
    }

    loadDataReport();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {});

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    const date = new Date();

    let year = date.getFullYear().toString();
    let month = (date.getMonth() + 1).toString();
    let day = date.getDate().toString();

    let selectedDateString = day.concat("/", month, "/", year);

    setDateNow(selectedDateString);
    setDateInitial(selectedDateString);
    setDateFinish(selectedDateString);
  }, []);

  function getCompact(operation: string) {
    let array: FilterReportProps[] = [];
    let arrayFilter: FilterReportProps[] = [];

    if (operation === "Todos") {
      let mergeSubtracion = mergerData(report, "Subtração");
      let mergeAddtion = mergerData(report, "Adição");
      let mergeDivision = mergerData(report, "Divisão");
      let mergeMultiplication = mergerData(report, "Multiplicação");

      array = [
        mergeSubtracion,
        mergeAddtion,
        mergeDivision,
        mergeMultiplication,
      ];

      array.map((item, index) => {
        if (item.operation !== "") {
          arrayFilter.push(array[index]);
        }
      });

      setFilterReport([...arrayFilter]);

      // console.log('__________________________________________________________')
      // console.log('1 - operação :',mergeSubtracion.operation, 'taxa de acertos:',mergeSubtracion.rateHit,'%')
      // console.log('2 - operação :',mergeAddtion.operation, 'taxa de acertos:',mergeAddtion.rateHit,'%')
      // console.log('3 - operação :',mergeDivision.operation, 'taxa de acertos:',mergeDivision.rateHit,'%')
      // console.log('4 - operação :',mergeMultiplication.operation, 'taxa de acertos:',mergeMultiplication.rateHit,'%')
      return;
    } else {
      let dataFilter = mergerData(report, operation);
      console.log("__________________________________________________________");
      console.log(
        "1 - operação :",
        dataFilter.operation,
        "taxa de acertos:",
        dataFilter.rateHit,
        "%"
      );

      dataFilter.operation != "" ? setFilterReport([dataFilter]) : null;
    }
  }

  function mergerData(data: DataReport[], operation: string) {
    let numberAttempts: number = 0;
    let rateHit: number = 0;

    const arrayFilter = report.filter(
      (data) =>
        data.date >= dateInitial &&
        data.date <= dateFinish &&
        data.nameOperation === operation
    );

    // if (operation === 'Multiplicação') {
    //   console.log(arrayFilter)
    // }

    numberAttempts = arrayFilter.reduce((total, valor) => {
      return total + valor.corrects + valor.incorrects;
    }, 0);

    rateHit = arrayFilter.reduce((total, valor) => {
      return total + valor.corrects;
    }, 0);

    // if(operation === 'Multiplicação'){
    //   console.log(arrayFilter)
    //   console.log('numberAttempts',numberAttempts,'rateHit',rateHit)
    // }
    rateHit = parseInt(((rateHit * 100) / numberAttempts).toFixed(2));

    if (rateHit > 0) {
      return {
        operation,
        rateHit,
      };
    }

    return {
      operation: "",
      rateHit: 0,
    };
  }

  const showDatepicker = useCallback((dateType: string) => {
    setShow((state) => !state);
    dateType === "initial" ? setIsDateInitial((state) => !state) : null;
    dateType === "finish" ? setIsDateFinish((state) => !state) : null;
  }, []);

  function handleDateChange(event: any, date: Date | undefined) {
    if (Platform.OS === "android") {
      setShow(false);
    }

    if (date) {
      setDate(date);

      let year = date.getFullYear().toString();
      let month = (date.getMonth() + 1).toString();
      let day = date.getDate().toString();

      // console.log('date', date, 'day',day, 'month', month, 'year', year)
      let selectedDateString = day.concat("/", month, "/", year);

      // console.log('no set:', 'isDateInitial:', isDateInitial, 'isDateFinish', isDateFinish, 'date:', selectedDateString)

      if (isDateInitial) {
        setDateInitial(selectedDateString);
        setIsDateInitial((state) => !state);
        return;
      }

      if (isDateFinish) {
        setDateFinish(selectedDateString);
        setIsDateFinish((state) => !state);
        return;
      }
    }
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <ContentHeader>
          <ButtonGoBack onPress={() => navigation.goBack()}>
            <ImageButtonGoBack source={imageGoBack} />
          </ButtonGoBack>
          <Title>Resultados </Title>

          <View />
        </ContentHeader>
        <ContainerFilter>
          <ContentFilter>
            <DateLabel>De:</DateLabel>
            <ButtonSetDate onPress={() => showDatepicker("initial")}>
              <DateText>{dateInitial}</DateText>
            </ButtonSetDate>
            <DateLabel>Até:</DateLabel>

            <ButtonSetDate onPress={() => showDatepicker("finish")}>
              <DateText>{dateFinish}</DateText>
            </ButtonSetDate>
            <DateLabel>Operação:</DateLabel>
            <SelectContainer>
              <PickerSelect
                selectedValue={selectedOperation}
                onValueChange={(itemValue) =>
                  setSelectedOperation(String(itemValue))
                }
              >
                <PickerSelect.Item label="Todos" value="Todos" />
                <PickerSelect.Item label="Adição" value="Adição" />
                <PickerSelect.Item label="Subtração" value="Subtração" />
                <PickerSelect.Item label="Divisão" value="Divisão" />
                <PickerSelect.Item
                  label="Multiplicação"
                  value="Multiplicação"
                />
              </PickerSelect>
            </SelectContainer>

            <ButtonSearchResults onPress={() => getCompact(selectedOperation)}>
              <Feather name="search" size={18} color="#FFFFFF" />

              <ButtonSearchResultsText>Buscar</ButtonSearchResultsText>
            </ButtonSearchResults>
          </ContentFilter>

          <View>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="date"
                display="spinner"
                maximumDate={date}
                onChange={handleDateChange}
              />
            )}
          </View>
        </ContainerFilter>
        <Content>
          {filterReport.length > 0 ? (
            <HeaderTable>
              <TextLabel>Período</TextLabel>
              <TextLabel>Operação</TextLabel>
              <TextLabel>Taxa de acertos (%)</TextLabel>
            </HeaderTable>
          ) : null}
          {filterReport.length > 0 ? (
            filterReport.map((item, index) => (
              <RowTable key={index} isDetach={index % 2 == 0 ? true : false}>
                <TextInfo>
                  {dateInitial} - {dateFinish}
                </TextInfo>
                <TextInfo>{item.operation}</TextInfo>
                <TextInfo>{item.rateHit} %</TextInfo>
              </RowTable>
            ))
          ) : (
            <ContainerNotFound>
              <ImageNotFound source={notFound} />
              <TextNotFound>Nenhuma informação encontrada.</TextNotFound>
            </ContainerNotFound>
          )}
        </Content>
      </Container>
    </ScrollView>
  );
}
