import React from 'react';
import { Dimensions } from "react-native";
import { Images, AppTheme } from "../constants/";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Header } from "../components/";

import HomeScreen from "../screens/Home";

import CustomDrawerContent from "./Menu";

const { width } = Dimensions.get("screen");


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const profile = {
  avatar: require('../assets/images/SelfiePic1.jpg'),
  name: "Mikaela Masterson",
  type: "In Relationship",
  plan: "Pro",
  rating: 4.8
};

export default function OnboardingStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}


function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={props => (
        <CustomDrawerContent {...props} profile={profile} />
      )}
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.8
      }}
      drawerContentOptions={{
        activeTintColor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: AppTheme.COLORS.ACTIVE,
        inactiveBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.74,
          paddingHorizontal: 12,
          // paddingVertical: 4,
          justifyContent: "center",
          alignContent: "center",
          // alignItems: 'center',
          overflow: "hidden"
        },
        labelStyle: {
          fontSize: 18,
          fontWeight: "normal"
        }
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen
        name="Home"
        component={HomeStack}
      />
    </Drawer.Navigator>
  );
}

function HomeStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            header: ({ navigation, scene }) => (
              <Header
                search
                options
                title="inBetween"
                navigation={navigation}
                scene={scene}
              />
            )
          }}
        />
    </Stack.Navigator>
  );
}