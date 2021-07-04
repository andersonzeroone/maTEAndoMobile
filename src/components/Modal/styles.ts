import styled from 'styled-components/native';

export const ContainerModal = styled.View`
  flex: 1;
  background-color:rgba(59, 82, 80, 0.80);
  padding:0 20px;
  align-items:center;
  justify-content:center;
`;

export const ContentModal = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 20px;

  width:85%;
  border-radius:15px;

  background: #FFF;

`;

export const TitleModal = styled.Text`
  font-size:28px;
  font-weight: bold;
  color:#000;
`;

export const ImageModal = styled.Image`
  margin: 25px 0;
`;

export const FooterModal = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 70%;
`;

export const ButtonNext = styled.TouchableOpacity``;

export const ImageButtonNext = styled.Image``;