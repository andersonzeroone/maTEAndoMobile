import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { tutorialIntroduction } from '../screens/Tutorials/TutorialIntroduction';
import { tutorialOperations } from '../screens/Tutorials/TutorialOperations';
import { tutorialAddition } from '../screens/Tutorials/TutorialAddition';
import { tutorialSubtraction } from '../screens/Tutorials/TutorialSubtraction/indext';
import { tutorialDivision } from '../screens/Tutorials/TutorialDivision/indext';
import { tutorialMultiplication } from '../screens/Tutorials/TutorialMultiplication/indext';
import { selectOperations } from '../screens/SelectOperations';
import { selectObjects } from '../screens/SelectObjects';

const stackRoutes = createStackNavigator();

const AppRoutes:React.FC= () =>(
  <stackRoutes.Navigator
    headerMode='none'
  >
    <stackRoutes.Screen
      name='Home'
      component={Home}
    />

    <stackRoutes.Screen
      name='tutorialIntroduction'
      component={tutorialIntroduction}
    />

    <stackRoutes.Screen
      name='tutorialOperations'
      component={tutorialOperations}
    />

    <stackRoutes.Screen
      name='tutorialAddition'
      component={tutorialAddition}
    />

    <stackRoutes.Screen
      name='tutorialSubtraction'
      component={tutorialSubtraction}
    />

    <stackRoutes.Screen
      name='tutorialDivision'
      component={tutorialDivision}
    />

    <stackRoutes.Screen
      name='tutorialMultiplication'
      component={tutorialMultiplication}
    />

    <stackRoutes.Screen
      name='selectOperations'
      component={selectOperations}
    />

    <stackRoutes.Screen
      name='selectObjects'
      component={selectObjects}
    />
  </stackRoutes.Navigator>
)

export default AppRoutes;