import styled from 'styled-components/native';

export const Card = styled.TouchableOpacity`
  border-width: 2px;
  border-color: #B46AFD;
  border-radius: 10px;

  padding: 1%;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  width: 20%;
  /* height: %; */
`;

export const Name = styled.Text`
  font-weight: bold;
  margin-top: 10%;
`;

export const Image = styled.Image`
  width: 95%;
  height:57%; 
`;
