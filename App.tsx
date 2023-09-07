import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import Navigation from './navigation';
import React from 'react';
import useCachedResources from './hooks/useCachedResources';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const isLoaded = useCachedResources();
  const colorScheme = useColorScheme();

  if (isLoaded){
    return (
      <SafeAreaProvider>
        <StatusBar style="dark" />
        <Navigation colorScheme={colorScheme} />
      </SafeAreaProvider>
    );
  }else{
    return null;
  }
}

//EAS Build
