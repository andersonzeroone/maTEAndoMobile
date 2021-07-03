import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const ContentHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  margin-top: 20px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 30px;
  color: #7018C9;
`;

export const ButtonGoBack = styled.TouchableOpacity``;

export const ImageButtonGoBack = styled.Image`
  width: 45px;
  height: 30px;
`;

export const ContentCardsOperations = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 70%;

  margin-top: 50px;
`;

export const CardsOperations = styled.TouchableOpacity`
  border-width: 2px;
  border-color: #7018C9;
  border-radius: 10px;

  padding: 15px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100px;
`;

export const NameOperation = styled.Text`
  margin-top: 10px;

  font-weight: bold;
`;

export const ImageOperation = styled.Image``;
