import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { Alert, BackHandler } from 'react-native';

import { getPlaySound, savePlaySound } from '../../utils/storage';

interface Props {
  visibleMutate: boolean;
  visibleLogOut: boolean;
  playFeedBack:boolean;
  handlePlayFeedBack: ()=> void;
}

import {
  ContainerOptions,
  ButtonOptions,
  TextMenu,
} from './styles';

export function OptionsMutateLogOut({ 
  visibleLogOut, 
  visibleMutate,
  playFeedBack,
  handlePlayFeedBack 
}: Props){
  
  const backAction = () => {
    Alert.alert('Sair', 'Deseja sair do jogo?', [
      {
        text: 'Não',
        onPress: () => null,
        style: 'cancel'
      },
      { text: 'Sim', onPress: () => BackHandler.exitApp() }
    ]);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  return (
    <>
      <ContainerOptions>
        {visibleMutate && (
          <ButtonOptions onPress={()=> handlePlayFeedBack()}>
            <TextMenu>Som</TextMenu>

            {playFeedBack ? (
              <Feather
                name='volume-2'
                size={20}
                color='#7018C9'
              />
            ) : (
              <Feather
                name='volume-x'
                size={20}
                color='#7018C9'
              />
            )

            }

          </ButtonOptions>
        )}


        {visibleLogOut &&
          <ButtonOptions onPress={backAction}>
            <TextMenu>Sair</TextMenu>
            <Feather
              name='log-out'
              size={20}
              color='#7018C9'
            />
          </ButtonOptions>
        }

      </ContainerOptions>
    </>
  )
}