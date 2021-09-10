import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';

import { TutotialStructure } from '../../../components/TutotialStructure';

import subtraction from '../../../assets/subtracao.png'
import imgExample from '../../../assets/exSubtracao.png'

import {
  Container,
} from '../StyleScreenOperations/style';

export function tutorialSubtraction() {
  const navigation = useNavigation();

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Container>
          <TutotialStructure
            nameOperation='Subtração'
            imageOperation={subtraction}
            description=''
            imageExampleOperation={imgExample}
            numberFeedback={4}
            screen='tutorialDivision'
          />
        </Container>
      </ScrollView>
    </>

  );
}
