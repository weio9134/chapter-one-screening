import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import Card from '@/components/Card';
import { useContext } from '@/context/context';


const Done = () => {
  const { todoList, removeTodo, toggleTodo } = useContext();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}> ToDo List </Text>
        <Text style={styles.text}> You have finished {todoList.reduce((count, todo) => { return todo.checked ? count + 1 : count}, 0)} todos! </Text>
      </View>

      {/* map over the todo list to show each todo card */}
      <SafeAreaView style={styles.cardWrapper}>
        <ScrollView style={styles.cardContainer}>
          {todoList.map((todo, index) => (
            todo.checked &&
            <View key={todo.id} style={{ flex: 1 }}>
              <Card
                key={todo.id}
                title={todo.title}
                details={todo.details}
                checked={todo.checked}
                toggle={() => toggleTodo(index)}
                deleteTodo={() => removeTodo(index)}
              />
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

// same styles as home screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },

  header: {
    padding: 20,
    marginTop: 50,
    alignItems: 'center'
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  cardWrapper: {
    width: '100%',
    flex: 1,
  },
  
  cardContainer: {
    flexDirection: 'column',
    flex: 1
  }
});

export default Done