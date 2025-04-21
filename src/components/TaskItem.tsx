//src/components/TaskItem.tsx

import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Task, useTaskStore} from '../store/TaskStore';

interface Props {
  task: Task;
}

export default function TaskItem({task}: Props) {
  const removeTask = useTaskStore(state => state.removeTask);
  const [open, setOpen] = useState(false);

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => setOpen(o => !o)}>
      <View style={styles.container}>
        <View style={styles.textBlock}>
          <Text style={styles.title}>{task.title}</Text>
          {open && <Text style={styles.body}>{task.body}</Text>}
        </View>
        <TouchableOpacity onPress={() => removeTask(task.id)}>
          <Icon name="x" size={20} color="#FFA500" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFA500',
    borderRadius: 8,
    padding: 12,
    marginHorizontal: 16,
    marginVertical: 4,
  },
  textBlock: {flex: 1},
  title: {fontSize: 16, color: '#fff', fontWeight: 'bold'},
  body: {marginTop: 4, color: '#fff'},
});
