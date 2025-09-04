//import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text testID="welcome-text">Hello, React Native!</Text>
      <Text style={styles.text}>Nama: Ivana Hermili</Text>
      <Text style={styles.text}>NIM: D1041221073</Text>
      <Text style={styles.text}>Kelas: A</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f9ff',
  },
});
