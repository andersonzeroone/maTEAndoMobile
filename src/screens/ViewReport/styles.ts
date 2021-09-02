import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  align-items: center;
  padding: 2% 1% 0;
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

export const RowTable = styled.View`
  flex-direction: row;
  align-items: center;

  margin-bottom: 1%;
`;

export const TextInfo = styled.Text`
  font-size: 16px;
  width: 20%;
  text-align: center;
`;
