// App.tsx
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <TaskInput />
      <TaskList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#111'},
});
