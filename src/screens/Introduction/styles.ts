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

export const ContainerExample = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ImageExample = styled.Image``;

export const ContainerFeedBack = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TextFeedBack = styled.Text``;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
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
