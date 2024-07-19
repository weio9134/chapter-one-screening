import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

// Define the Create component
export default function Create() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Page</Text>
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

