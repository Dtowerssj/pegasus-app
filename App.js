import 'react-native-gesture-handler';
import React from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import AppNavigator from './src/navigation/AppNavigator';


const App = () => {
  
  let [fontsLoaded] = useFonts({
    'RobotoCondensed-Regular': require('./assets/fonts/RobotoCondensed-Regular.ttf'),
    'RobotoCondensed-Medium': require('./assets/fonts/RobotoCondensed-BoldItalic.ttf'),
    'RobotoCondensed-Light': require('./assets/fonts/RobotoCondensed-Light.ttf'),
    'RobotoCondensed-Bold': require('./assets/fonts/RobotoCondensed-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return(
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    );
  }
};

export default App;