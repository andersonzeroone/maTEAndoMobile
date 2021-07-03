import React from 'react';
import { ImageSourcePropType} from 'react-native';

import {
  Card,
  Name,
  Image
} from './styles';


interface CardProps{
  name:string;
  image:ImageSourcePropType;
  handleNavigation:() => void;
}
export function CardPrimary({name, image, handleNavigation}:CardProps){
  return(
    <>
      <Card onPress={()=> handleNavigation()}>
        <Image source={image}/>
        <Name>{name}</Name>
      </Card>
    </>
  )
}