import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Winput from './components/Winput';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Winput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
