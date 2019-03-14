import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import ScienceScreen from './screens/ScienceScreen';
import ResultScreen from './screens/ResultScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Science: {screen: ScienceScreen},
  Results:{screen: ResultScreen}
});

const App = createAppContainer(MainNavigator);

export default App;


