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

  margin-right: -10%;
`;

export const ButtonGoBack = styled.TouchableOpacity``;

export const ImageButtonGoBack = styled.Image`
  width: 40px;
  height: 40px;
`;

export const ContentCardsOperations = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;

  margin-top: 5px;
`;


