import styled from 'styled-components/native';

export const ContainerModal = styled.View`
  flex: 1;
  background-color:transparent;
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
  border-color: red;

  background: #FFF;

`;

export const TitleModal = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #7018C9;
`;
