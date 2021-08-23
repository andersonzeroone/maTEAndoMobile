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
  width: 40px;
  height: 40px;
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

export const ContainerElementsPrimary = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  width: 36%;
`;

export const ContainerElementsSecondary = styled(ContainerElementsPrimary)``;

export const ElementsPrimary = styled.Image`
  margin: 0 17px 15px 0;
`;

export const ImageOperation = styled.Image`
  margin-right: 6%;
`;
 
export const ElementsSecondary = styled.Image``;

export const ImageEqual = styled.Image`
  width: 35px;
  height: 35px;
`;

export const ImageInterrogation = styled.Image``;

export const ContainerAlternatives = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 85%;

  margin-top: 35px;
`;

export const CardAlternative = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;

  border-radius: 10px;
  /* background-color: #CCECFF; */
  background: #B6DCF2;
`;

export const NumberCard = styled.Image`
  height: 80px;
  width: 70px;
`;

export const ContainerMensageError = styled.View`
  border-width: 2px;
  border-color: red;
  border-radius:15px;

  padding: 10px;
  margin-top: 10px;
`;


export const TextMensageError = styled.Text`
  font-size: 25px;
`;