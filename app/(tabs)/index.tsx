import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

// Define the HomeScreen component
export default function HomeScreen() {
  // Example function to show an alert
  const showAlert = () => {
    Alert.alert('Welcome to the Home Page!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Page</Text>
      <Button title="Show Welcome Alert" onPress={showAlert} />
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

