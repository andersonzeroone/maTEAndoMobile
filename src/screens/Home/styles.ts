import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
  justify-content: center;

  flex-direction: column;
  justify-content: space-between;
  padding: 10% 0 8%;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
`;

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