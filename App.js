import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CarsList from './components/CarList'
import HeaderComp from './components/HeaderComp';
export default function App() {
  return (
    <View style={styles.container}>
      <HeaderComp />
      <CarsList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
