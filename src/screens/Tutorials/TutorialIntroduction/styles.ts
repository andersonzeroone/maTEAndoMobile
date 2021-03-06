import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 2%;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: #7018C9;
  font-size: 40px;
  font-weight: bold;
  margin-right: -45px;

`;

export const ButtonGoBack = styled.TouchableOpacity``;

export const ImageButtonGoBack = styled.Image`
  width: 45px;
  height: 35px;
`;

export const Text = styled.Text`
  font-size: 20px;
  margin: 2% 0 4%;
`;

export const ContainerExample = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2%;

  margin:5% 0;
`;

export const ImageExample = styled.Image``;

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
  justify-content: center;

  margin-top: 5%;
`;

export const ButtonJump = styled.TouchableOpacity`
  margin-right: 20px;
`;

export const TextButtonJump = styled.Text`
  font-size: 18px;
  text-decoration:underline ;
`;

export const ButtonNext = styled.TouchableOpacity``;

export const ImageButtonNext = styled.Image``;
