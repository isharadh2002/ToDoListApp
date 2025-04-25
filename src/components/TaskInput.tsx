//src/components/TaskInput.tsx

import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useTaskStore} from '../store/TaskStore';

export default function TaskInput() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const addTask = useTaskStore(state => state.addTask);

  const onAdd = () => {
    if (!title.trim()) return;
    addTask(title, body);
    setTitle('');
    setBody('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputs}>
        <TextInput
          style={styles.input}
          placeholder="Title"
          placeholderTextColor="#666"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="About"
          placeholderTextColor="#666"
          value={body}
          onChangeText={setBody}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={onAdd}>
        <Icon name="plus" size={24} color="#FFA500" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 16,
    alignItems: 'flex-start',
  },
  inputs: {
    flex: 1,
    marginRight: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#FFA500',
    borderRadius: 8,
    padding: 10,
    color: '#fff',
    marginBottom: 8,
    backgroundColor: '#222', // Darker input background to match design
    height: 40, // Fixed height to match design
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFA500',
    borderRadius: 8,
    backgroundColor: '#333', // Slightly lighter than background for button
    width: 50,
    height: 90,
  },
});
