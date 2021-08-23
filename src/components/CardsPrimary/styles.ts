import styled from 'styled-components/native';

export const Card = styled.TouchableOpacity`
  border-width: 2px;
  border-color: #7018C9;
  border-radius: 10px;

  padding: 1%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 20%;
  height: 64%;

`;

export const Name = styled.Text`
  /* margin-top: 10%; */

  font-weight: bold;
`;

export const Image = styled.Image`
  width: 79%;
  height: 74%;
`;
