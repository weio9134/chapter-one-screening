import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert, SafeAreaView, TextInput, TouchableOpacity, GestureResponderEvent } from 'react-native';
import { useContext } from '@/context/context';
import { Ionicons } from '@expo/vector-icons';

// Define the Done component
const Create = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [error, setError] = useState('')
  const [count, setCount] = useState(0)
  const { addTodo } = useContext()

  const submit = (e: GestureResponderEvent) => {
    // dont make a todo if there is no title
    if(title === '') {
      setError("Please enter at least a title!")
      return
    }

    e.preventDefault()

    // create a new todo ƒrom user inputs
    const newToDo = {
      id: count,
      title: title,
      details: details,
      checked: false
    }

    // add the new todo and reset form
    addTodo(newToDo)
    setTitle('')
    setDetails('')
    setError('')
    setCount(count + 1)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Create a ToDo! </Text>
      
      {/* input forms to make a todo */}
      <SafeAreaView style={styles.inputContainer}>
        <TextInput
          style={[styles.input, styles.inputTitle]}
          onChangeText={setTitle}
          value={title}
          placeholder="Enter the title"
          multiline
          numberOfLines={3}
        />
        <TextInput
          style={[styles.input, styles.inputDetails]}
          onChangeText={setDetails}
          value={details}
          placeholder="Enter the details"
          multiline
          numberOfLines={10}
        />
      </SafeAreaView>

      {/* display error if user trys to submit without inputting */}
      { error && <Text style={styles.error}> {error} </Text>}

      {/* click to make the todo */}
      <TouchableOpacity onPress={submit} style={styles.submit}>
        <Text style={{ color: 'white' }}> Create </Text>    
      </TouchableOpacity>
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

  // make each input rounded
  inputContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 16,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 10,
    marginBottom: 15,    
  },

  // title should be bolder and details should be longer
  inputTitle: {
    height: 50,
    fontSize: 18,
    fontWeight: 'bold',
    // paddingTop: 10,
  },
  inputDetails: {
    height: 150,
    textAlignVertical: 'top',
    paddingTop: 10,
    fontSize: 16,
  },

  // make errors red
  error: {
    alignSelf: 'center',
    color: 'red',
    marginTop: 20,
    fontSize: 18,
  },

  // make submit button pop with blue bg and white text
  submit: {
    flexDirection: 'row',
    marginTop: 20,
    width: '100%',
    backgroundColor: '#0080a8',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 16,
  }
});


export default Create
