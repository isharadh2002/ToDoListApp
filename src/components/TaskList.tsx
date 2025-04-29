import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useTaskStore} from '../store/TaskStore';
import TaskItem from './TaskItem';

export default function TaskList() {
  const tasks = useTaskStore(state => state.tasks);
  const [openTaskId, setOpenTaskId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenTaskId(prev => (prev === id ? null : id));
  };

  // Sort tasks: incomplete tasks first, then completed tasks
  const sortedTasks = [...tasks].sort((a, b) => {
    if (a.completed && !b.completed) return 1;
    if (!a.completed && b.completed) return -1;
    return 0;
  });

  if (tasks.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <View style={styles.horizRule} />
        <Text style={styles.emptyText}>No tasks</Text>
        <View style={styles.horizRule} />
      </View>
    );
  }

  return (
    <FlatList
      data={sortedTasks}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TaskItem
          task={item}
          isOpen={item.id === openTaskId}
          onToggle={handleToggle}
        />
      )}
      contentContainerStyle={styles.listContent}
    />
  );
}

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  emptyText: {
    color: '#FFA500',
    fontSize: 18,
    marginVertical: 8,
    fontWeight: '500',
  },
  horizRule: {
    width: 60,
    height: 2,
    backgroundColor: '#FFA500',
    marginVertical: 4,
  },
  listContent: {
    paddingBottom: 24,
  },
});
