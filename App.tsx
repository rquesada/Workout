import { StatusBar } from 'expo-status-bar';
import Navigation from './navigation';
import React from 'react';
import useCachedResources from './hooks/useCachedResources';

export default function App() {

  const isLoaded = useCachedResources();
  if (isLoaded){
    return (
      <>
        <StatusBar style="auto" />
        <Navigation />
      </>
    );
  }else{
    return null;
  }

}
