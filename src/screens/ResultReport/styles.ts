import styled,{css} from 'styled-components/native';
import {Picker} from '@react-native-picker/picker';

interface RowtableProps{
  isDetach:boolean;
}

export const Container = styled.View`
  flex-direction: column;
  align-items: center;
  padding: 2%;
`;

export const ContentHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 30px;
  color: #7018C9;
`;

export const ButtonGoBack = styled.TouchableOpacity``;

export const ImageButtonGoBack = styled.Image`
  width: 40px;
  height: 30px;
`;

export const Content = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  padding: 0 2%;
`;

export const HeaderTable = styled.View`
  flex-direction: row;
  align-items: center;
  /* justify-content: space-around; */
  width: 100%;

  margin: 3% 0 1% 0;
`;

export const TextLabel = styled.Text`
  font-weight: bold;
  font-size: 20px;
  width: 30%;
  text-align: center;
`;

export const RowTable = styled.View<RowtableProps>`
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 1% 0;
  ${(props)=>
    props.isDetach &&
      css`
        background: #C9E3F2;
      `
  }

  margin-bottom: 1%;
`;

export const TextInfo = styled.Text`
  font-size: 16px;
  width: 30%;
  text-align: center;
`;


export const ButtonCleanData = styled.TouchableOpacity`
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
`;

export const ButtonCleanDataText = styled.Text`
  margin-left:1%;
`;


export const ContainerNotFound = styled.View`
  flex-direction: column;
  align-items: center;
  width: 100%;
  height:30%;
`;

export const ImageNotFound = styled.Image`
`;

export const TextNotFound = styled.Text`
  font-size: 24px;
  color: #000;
`;

export const ContainerFilter = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 2% 0% 1% 0;
  margin-top: 2%;

  border-bottom-width:1px;
`;

export const ContentFilter = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ButtonSetDate = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1% 2%;
  border-color: #7018C9;
  border-width: 1px;
  border-radius: 10px;
`;

export const DateText = styled.Text`
  font-size: 16px;
`;

export const DateLabel = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin: 0 2% ;
`;

export const SelectContainer = styled.View`
  background: #F2FBFF;
  width:20%;
  height: 40px;
  border-width:1px;
  border-color:#7018C9; 
  border-radius:10px;
  margin-right: 2%;
`;

export const PickerSelect = styled(Picker)`
  color:#596C83;
  width:100%;
  border-width:3px;
  height: 40px;
`;

export const ButtonSearchResults = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background: #7018C9;

  border-radius: 10px;

  width: 14%;
  padding: 2%;
`;

export const ButtonSearchResultsText = styled.Text`
  color: #FFFFFF;

  font-weight: bold;
`;