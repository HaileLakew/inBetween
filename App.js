import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar, Image } from 'react-native';
import { Asset } from 'expo-asset';
import AppLoading from 'expo-app-loading'
import { NavigationContainer } from '@react-navigation/native';
import { Block, GalioProvider } from 'galio-framework';

import { enableScreens } from 'react-native-screens';

import Screens from './navigation/Screens';
import { Images, AppTheme } from './constants/';

const assetImages = [
  Images.Profile,
  Images.Avatar,
  Images.Onboarding,
  Images.Products.Auto,
  Images.Products.Motocycle,
  Images.Products.Watches,
  Images.Products.Makeup,
  Images.Products.Accessories,
  Images.Products.Fragrance,
  Images.Products.BMW,
  Images.Products.Mustang,
  Images.Products['Harley-Davidson'],
];

enableScreens();

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render () {
      if(!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
        return (
          <AppLoading
            startAsync={this._loadResourcesAsync}
            onError={this._handleLoadingError}
            onFinish={this._handleFinishLoading}
          />
        );
      } else {
        return (      
          <NavigationContainer>
            <GalioProvider theme={AppTheme}>
              <Block flex>
                {Platform.OS === 'ios' && <StatusBar barStyle='default'/>}
                <Screens/>
              </Block>
            </GalioProvider>
          </NavigationContainer>
        );
      }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      ...cacheImages(assetImages),
    ]);
  };
  
  _handleLoadingError = error => {
    console.warn(error);
  };
  
  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

//  expo install expo-app-loading
//  - import { AppLoading } from 'expo' -> import AppLoading from 'expo-app-loading'