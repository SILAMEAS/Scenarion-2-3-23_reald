import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './../navigation/RootNavigator';

export const Root = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};
