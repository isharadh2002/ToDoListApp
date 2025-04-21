//src/components/EditModal.tsx

import React, {useState} from 'react';
import {
  Modal,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import {Task, useTaskStore} from '../store/TaskStore';

interface Props {
  task: Task;
  onClose: () => void;
}

export default function EditModal({task, onClose}: Props) {
  const [title, setTitle] = useState(task.title);
  const [body, setBody] = useState(task.body);
  const updateTask = useTaskStore(state => state.updateTask); // You need to add this method

  const onSave = () => {
    updateTask(task.id, title, body);
    onClose();
  };

  return (
    <Modal transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={styles.textArea}
            value={body}
            onChangeText={setBody}
            multiline
          />
          <View style={styles.actions}>
            <TouchableOpacity onPress={onClose} style={styles.button}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onSave} style={styles.button}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: '90%',
    backgroundColor: '#111',
    borderRadius: 12,
    padding: 16,
    borderColor: '#FFA500',
    borderWidth: 1,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#FFA500',
    marginBottom: 12,
    color: '#fff',
  },
  textArea: {
    height: 120,
    borderWidth: 1,
    borderColor: '#FFA500',
    color: '#fff',
    textAlignVertical: 'top',
    padding: 8,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  button: {
    borderColor: '#FFA500',
    borderWidth: 1,
    borderRadius: 6,
    padding: 8,
    minWidth: 80,
    alignItems: 'center',
  },
  buttonText: {color: '#FFA500'},
});
