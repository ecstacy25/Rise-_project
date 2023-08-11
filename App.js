import React from 'react';
import { StyleSheet, View } from 'react-native';
import PlanPastGraph from './src/PlanPastGraph';

export default function App() {
  return (
    <View style={styles.container}>
      <PlanPastGraph />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
