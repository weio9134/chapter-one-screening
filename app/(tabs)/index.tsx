import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Button, Alert } from 'react-native'
import Card from '@/components/Card';
import { useTodos } from '@/context/context';

const HomeScreen = () => {
  const { todoList, removeTodo, toggleTodo } = useTodos();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Page</Text>

      {/* map over the todo list to show each todo card */}
      {todoList.map(todo => (
        <View key={todo.id}>
          <Card
            key={todo.id}
            title={todo.title}
            details={todo.details}
            checked={todo.checked}
            toggle={() => toggleTodo(todo.id)}
          />
        </View>
      ))}
    </View>
  );
};

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

  black: {
    color: 'black'
  }
});

export default HomeScreen