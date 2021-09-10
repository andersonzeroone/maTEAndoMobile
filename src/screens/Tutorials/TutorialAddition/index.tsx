import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { TutotialStructure } from '../../../components/TutotialStructure';

import addition from '../../../assets/adicao.png'
import imgExample from '../../../assets/exAdicao.png'

import {
  Container,
} from '../StyleScreenOperations/style';
import { ScrollView } from 'react-native';

export function tutorialAddition() {
  const navigation = useNavigation();

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Container>
          <TutotialStructure
            nameOperation='Adicão'
            imageOperation={addition}
            description=''
            imageExampleOperation={imgExample}
            numberFeedback={3}
            screen='tutorialSubtraction'
          />
        </Container>
      </ScrollView>
    </>

  );
}
