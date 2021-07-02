import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { tutorialPartOne } from '../screens/Tutorials/TutorialPartOne';
import { tutorialPartTwo } from '../screens/Tutorials/TutorialPartTwo';

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
      name='tutorialPartOne'
      component={tutorialPartOne}
    />

    <stackRoutes.Screen
      name='tutorialPartTwo'
      component={tutorialPartTwo}
    />
  </stackRoutes.Navigator>
)

export default AppRoutes;