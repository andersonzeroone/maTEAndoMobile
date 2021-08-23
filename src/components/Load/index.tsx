import React from 'react';
import logo from '../../assets/Logo.png'
import {Container, Logo} from './styles'

export function Load(){
  return(
    <Container>
      <Logo source={logo}/>
    </Container>
  )
}