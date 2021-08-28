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

  margin-right: -95px;
`;

export const Text = styled.Text`
  font-size: 20px;

  margin: 2% 0 4%;
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

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
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

  margin: 2% 0 4%;
`;

export const TextFeedBack = styled.Text`
  font-weight: bold;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width:40% ;
`;

export const ButtonJump = styled.TouchableOpacity`

`;

export const TextButtonJump = styled.Text`
  font-size: 18px;
  text-decoration:underline ;
`;
export const ButtonBack = styled.TouchableOpacity``;

export const ImageButtonBack = styled.Image``;


export const ButtonNext = styled.TouchableOpacity``;

export const ImageButtonNext = styled.Image``;
