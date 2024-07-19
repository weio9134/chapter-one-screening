import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

// Define the Done component
export default function Done() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Done Page</Text>
    </View>
  );
};

// Define styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

