import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import Card from '@/components/Card';
import { useContext } from '@/context/context';


const HomeScreen = () => {
  const { todoList, removeTodo, toggleTodo } = useContext();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}> ToDo List </Text>
        <Text style={styles.text}> You have {todoList.reduce((count, todo) => { return !todo.checked ? count + 1 : count}, 0)} todos left! </Text>
      </View>

      {/* map over the todo list to show each todo card */}
      <SafeAreaView style={styles.cardWrapper}>
        <ScrollView style={styles.cardContainer}>
          {todoList.map((todo, index) => (
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },

  // center header text
  header: {
    padding: 20,
    marginTop: 50,
    alignItems: 'center'
  },

  // title should be a little bigger than other texts
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

  // make sure each card takes up the entire width, stacked on top of each other
  cardWrapper: {
    width: '100%',
    flex: 1,
  },
  
  cardContainer: {
    flexDirection: 'column',
    flex: 1
  }
});

export default HomeScreen