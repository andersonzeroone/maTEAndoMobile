import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;

  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const Title = styled.Text`
  color: #7018C9;
  font-size: 40px;
  font-weight: bold;

`;

export const Text = styled.Text`
  font-size: 20px;
`;

export const Content = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80%;
`;

export const ContainerOperations = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 80%;
`;

export const CardOperation = styled.View`
  border-width: 2px;
  border-color: #7018C9;
  border-radius: 10px;

  padding: 15px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100px;
`;

export const TitleOperation = styled.Text`
  margin-top: 10px;

  font-weight: bold;
`;

export const ImageOperations = styled.Image``;

export const ContainerFeedBack = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TextFeedBack = styled.Text`
  font-weight: bold;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ButtonJump = styled.TouchableOpacity`
  margin: 0 20px;
`;

export const ButtonBack = styled.TouchableOpacity``;

export const ImageButtonBack = styled.Image``;

export const TextButtonJump = styled.Text`
  font-size: 18px;
  text-decoration:underline ;
`;

export const ButtonNext = styled.TouchableOpacity``;

export const ImageButtonNext = styled.Image``;
