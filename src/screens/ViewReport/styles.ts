import styled,{css} from 'styled-components/native';

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
  height: 40px;
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

  margin: 5% 0 1% 0;
`;

export const TextLabel = styled.Text`
  font-weight: bold;
  font-size: 20px;
  width: 20%;
  text-align: center;
`;

export const RowTable = styled.View<RowtableProps>`
  flex-direction: row;
  align-items: center;
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
  width: 20%;
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
  width: 80%;
  height: 80%;
`;

export const ImageNotFound = styled.Image`
`;

export const TextNotFound = styled.Text`
  font-size: 24px;
  color: #121212;
`;
