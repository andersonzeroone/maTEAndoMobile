import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView} from 'react-native';
import { TutotialStructure } from '../../../components/TutotialStructure';

import division from '../../../assets/divisao.png'
import imgExample from '../../../assets/exDivisao.png'

import {
  Container,
} from '../StyleScreenOperations/style';

export function tutorialDivision() {
  const navigation = useNavigation();

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Container>
          <TutotialStructure
            nameOperation='Divisão'
            imageOperation={division}
            description=''
            imageExampleOperation={imgExample}
            numberFeedback={5}
            screen='tutorialMultiplication'
          />
        </Container>
      </ScrollView>
    </>

  );
}
