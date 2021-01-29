import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";

import OnboardingScreen from '../screens/Onboarding'

const Stack = createStackNavigator();

export default function OnboardingStack(props) {
    return (
      <Stack.Navigator mode="card" headerMode="none">
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          option={{
            headerTransparent: true
          }}
        />
      </Stack.Navigator>
    );
  }