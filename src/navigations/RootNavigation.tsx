import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RouteNames} from './routesNames';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={RouteNames.HomeScreen} component={Home} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
