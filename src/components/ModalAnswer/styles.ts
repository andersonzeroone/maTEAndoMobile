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

  width:65%;
  border-radius:15px;

  background: #FFF;

`;

export const TitleModal = styled.Text`
  font-size:28px;
  font-weight: bold;
  color: #7018C9;
`;

export const Emoji = styled.Text`
  font-size: 80px;
`;