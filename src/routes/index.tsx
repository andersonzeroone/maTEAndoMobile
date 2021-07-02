import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { Introduction } from '../screens/Introduction';
import { IntroductionTow } from '../screens/IntroductionTow';

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
      name='Intructions'
      component={Introduction}
    />

    <stackRoutes.Screen
      name='IntructionsTow'
      component={IntroductionTow}
    />
  </stackRoutes.Navigator>
)

export default AppRoutes;