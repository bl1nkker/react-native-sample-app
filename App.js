import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import HomeScreen from './screens/home_screen.js';
import LoginScreen from './screens/login_screen.js';

export default function Main() {
  return (
    <PaperProvider>
      <LoginScreen />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);