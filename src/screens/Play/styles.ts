import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 1% 2%;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  margin-bottom: 5%;
`;

export const ButtonGoBackHome = styled.TouchableOpacity``;

export const IconHome = styled.Image`
  width: 45px;
  height: 35px;
`;

export const Logo = styled.Image`
  margin-left: 10%;
`;

export const ButtonOptions = styled.TouchableOpacity`
  flex-direction: row;
`;

export const TextMenu = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin-right: 2%;

  color: #7018C9;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;

`;

export const ContainerOperation = styled.View`
  flex-direction: row;
  width: 85%;
  align-items:center;
  justify-content: space-around;
`;

export const ContainerElementsPrimary = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  width: 40%;
`;

export const ContainerElementsSecondary = styled(ContainerElementsPrimary)``;

export const ElementsPrimary = styled.Image`
  margin-right: 2%;
  width: 28%;
`;

export const ImageOperation = styled.Image`
  width: 9%;
`;
 
export const ElementsSecondary = styled.Image``;

export const ImageEqual = styled.Image`
  /* width: 35px;
  height: 35px; */
`;

export const ImageInterrogation = styled.Image``;

export const ContainerAlternatives = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  width: 100%;

  margin-top: 5%;
`;

export const CardAlternative = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 10px;

  border-radius: 10px;
  /* background-color: #CCECFF; */
  background: #B6DCF2;
`;

export const NumberCard = styled.Image`
  margin-right: 1%;
`;
