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
  numberAttempts:number;
}

export function ResultReport() {
  const navigation = useNavigation();

  const [report, setReport] = useState<DataReport[]>([]);

  const [filterReport, setFilterReport] = useState<FilterReportProps[]>([]);

  const [dateNow, setDateNow] = useState<string>("");

  const [dateInitialView, setDateInitialView] = useState<string>("");
  const [dateFinishView, setDateFinishView] = useState<string>("");

  const [dateInitial, setDateInitial] = useState(new Date());
  const [dateFinish, setDateFinish] = useState(new Date())
  
  const [isDateInitialView, setIsDateInitialView] = useState(false);
  const [isDateFinishView, setIsDateFinishView] = useState(false);

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
    setDateInitialView(selectedDateString);
    setDateFinishView(selectedDateString);
  }, []);

  function getCompact(operation: string) {
    console.log(operation)
    let array: FilterReportProps[] = [];
    let arrayFilter: FilterReportProps[] = [];

    if (operation === "Todos") {
      let mergeSubtracion = mergerData(report, "Subtra????o");
      let mergeAddtion = mergerData(report, "Adi????o");
      let mergeDivision = mergerData(report, "Divis??o");
      let mergeMultiplication = mergerData(report, "Multiplica????o");

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

      // console.log(arrayFilter)
   
      setFilterReport([...arrayFilter]);

      // console.log('__________________________________________________________')
      // console.log('1 - opera????o :',mergeSubtracion.operation, 'taxa de acertos:',mergeSubtracion.rateHit,'%')
      // console.log('2 - opera????o :',mergeAddtion.operation, 'taxa de acertos:',mergeAddtion.rateHit,'%')
      // console.log('3 - opera????o :',mergeDivision.operation, 'taxa de acertos:',mergeDivision.rateHit,'%')
      // console.log('4 - opera????o :',mergeMultiplication.operation, 'taxa de acertos:',mergeMultiplication.rateHit,'%')
      return;
    } else {
      let dataFilter = mergerData(report, operation);
      // console.log("__________________________________________________________");
      // console.log(
      //   "1 - opera????o :",
      //   dataFilter.operation,
      //   "taxa de acertos:",
      //   dataFilter.rateHit,
      //   "%",
      //   'Dateinicial:', dateInitial, 'dataFinal:',dateFinish
      // );
      // if(dateInitial.getTime() === dateFinish.getTime()){
      //   console.log('sadsdasd')
      // }
      console.log(dataFilter)
      dataFilter.operation != "" ? setFilterReport([dataFilter]) : null;
    }
  }

  function mergerData(data: DataReport[], operation: string) {
    let numberAttempts: number = 0;
    let rateHit: number = 0;

 
    const newInitiDate = new Date(dateInitial.getFullYear(),dateInitial.getMonth()
    , dateInitial.getDate()-1 ,21,0, 0)

    const newFinishDate = new Date(dateFinish.getFullYear(),dateFinish.getMonth()
    , dateFinish.getDate(),20,59, 59)

    // console.log('dateInicio:',newInitiDate, 'Final:',newFinishDate)
   
    const arrayFilter = report.filter((data) =>( 
      new Date(data.date) >= newInitiDate&& new Date(data.date) <= newFinishDate) && (data.nameOperation === operation)
    );

    numberAttempts = arrayFilter.reduce((total, valor) => {
      return total + valor.corrects + valor.incorrects;
    }, 0);

    rateHit = arrayFilter.reduce((total, valor) => {
      return total + valor.corrects;
    }, 0);

    // if(operation === 'Multiplica????o'){
    //   console.log(arrayFilter)
    //   console.log('numberAttempts',numberAttempts,'rateHit',rateHit)
    // }
    rateHit = parseInt(((rateHit * 100) / numberAttempts).toFixed(2));

    if (rateHit > 0) {
      return {
        operation,
        numberAttempts,
        rateHit,
      };
    }

    return {
      operation: "",
      numberAttempts:0,
      rateHit: 0,
    };
  }

  const showDatepicker = useCallback((dateType: string) => {
    setShow((state) => !state);
    dateType === "initial" ? setIsDateInitialView((state) => !state) : null;
    dateType === "finish" ? setIsDateFinishView((state) => !state) : null;
  }, []);

  function handleDateChange(event: any, date: Date | undefined) {
    if (Platform.OS === "android") {
      setShow(false);
    }
    if (date) {
      let year = date.getFullYear().toString();
      let month = (date.getMonth() + 1).toString();
      let day = date.getDate().toString();

      // console.log('date', date, 'day',day, 'month', month, 'year', year)
      let selectedDateString = day.concat("/", month, "/", year);

      // console.log('no set:', 'isDateInitialView:', isDateInitialView, 'isDateFinishView', isDateFinishView, 'date:', selectedDateString)

      if (isDateInitialView) {
        setDateInitialView(selectedDateString);
        setDateInitial(date);
        setIsDateInitialView((state) => !state);
        return;
      }

      if (isDateFinishView) {
        setDateFinishView(selectedDateString);
        setDateFinish(date)
        setIsDateFinishView((state) => !state);
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
              <DateText>{dateInitialView}</DateText>
            </ButtonSetDate>
            <DateLabel>At??:</DateLabel>

            <ButtonSetDate onPress={() => showDatepicker("finish")}>
              <DateText>{dateFinishView}</DateText>
            </ButtonSetDate>
            <DateLabel>Opera????o:</DateLabel>
            <SelectContainer>
              <PickerSelect
                selectedValue={selectedOperation}
                onValueChange={(itemValue) =>
                  setSelectedOperation(String(itemValue))
                }
              >
                <PickerSelect.Item label="Todos" value="Todos" />
                <PickerSelect.Item label="Adi????o" value="Adi????o" />
                <PickerSelect.Item label="Subtra????o" value="Subtra????o" />
                <PickerSelect.Item label="Divis??o" value="Divis??o" />
                <PickerSelect.Item
                  label="Multiplica????o"
                  value="Multiplica????o"
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
              <TextLabel>Per??odo</TextLabel>
              <TextLabel>Opera????o</TextLabel>
              <TextLabel>N?? de tentativas</TextLabel>
              <TextLabel>Acertos (%)</TextLabel>
            </HeaderTable>
          ) : null}
          {filterReport.length > 0 ? (
            filterReport.map((item, index) => (
              <RowTable key={index} isDetach={index % 2 == 0 ? true : false}>
                <TextInfo>
                  {dateInitialView} - {dateFinishView}
                </TextInfo>
                <TextInfo>{item.operation}</TextInfo>
                <TextInfo>{item.numberAttempts}</TextInfo>
                <TextInfo>{item.rateHit} %</TextInfo>
              </RowTable>
            ))
          ) : (
            <ContainerNotFound>
              <ImageNotFound source={notFound} />
              <TextNotFound>Nenhuma informa????o encontrada.</TextNotFound>
            </ContainerNotFound>
          )}
        </Content>
      </Container>
    </ScrollView>
  );
}
