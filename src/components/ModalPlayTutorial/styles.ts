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

  width:60%;
  border-radius:15px;
  border-width: 2px;
  border-color: #7018C9;

  background: #FFF;
`;

export const HeaderModal = styled.View`
  margin-bottom: 10%;
`;

export const TitleModal = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #7018C9;
`;

export const ModalOptions = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 5%;
`;

export const ButtonTutorial = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5px;

  border-radius:10px;
  border-width: 2px;
  border-color:#7018C9;
  background: #FFFFFF;
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

export const TextButtonTutorial = styled.Text`
  color: #7018C9;
  font-size: 30px;
`;

export const Icon = styled.Image`
  margin-right: 8%;

  width: 48px;
  height: 40px;
`;
