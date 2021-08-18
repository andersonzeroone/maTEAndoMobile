import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 1% 0 8%;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

export const ButtonOptions = styled.TouchableOpacity`
  flex-direction: row;
`;

export const ContainerMenu = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const TextMenu = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin: 0 4% 0 5%;
`;

export const Logo = styled.Image``;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ContentFooter = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const ImgControl = styled.Image`
  margin-bottom: 20px;
`;

export const ButtonStart = styled.TouchableOpacity`
  width: 150px;
  height: 50px;
  background:#7018C9;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 5px;
  border-radius:10px;
`;

export const TextButtonStart = styled.Text`
  font-weight: bold;
  color: #FFFFFF;
  font-size: 30px;
`;