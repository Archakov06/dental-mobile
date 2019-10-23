import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { HomeScreen, PatientScreen, AddPatientScreen } from './screens';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Patient: {
      screen: PatientScreen,
    },
    AddPatient: {
      screen: AddPatientScreen,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);
