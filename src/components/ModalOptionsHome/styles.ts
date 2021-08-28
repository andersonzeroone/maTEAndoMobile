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

  padding: 10px 20px;

  width:60%;
  border-radius:15px;
  border-width: 2px;
  border-color: #7018C9;

  background: #FFF;
`;

export const HeaderModal = styled.View`
  margin-bottom: 8%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const TitleModal = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #7018C9;
`;

export const ModalOptions = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 5%;

`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content:center;

  padding: 10px; 
  width: 78%;
  margin-bottom: 5%;

  border-radius:10px;
  border-width: 2px;
  border-color:#7018C9;
  background: #FFFFFF;
`;

export const TextButton = styled.Text`
  color: #7018C9;
  font-size: 30px;

  margin-left: 6%;
`;

export const ButtonCancel = styled.TouchableOpacity`

`;
