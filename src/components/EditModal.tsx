// src/components/EditModal.tsx

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
import Icon from 'react-native-vector-icons/Feather';

interface Props {
  task: Task;
  onClose: () => void;
}

export default function EditModal({task, onClose}: Props) {
  const [title, setTitle] = useState(task.title);
  const [body, setBody] = useState(task.body);
  const updateTask = useTaskStore(state => state.updateTask);

  const onSave = () => {
    updateTask(task.id, title, body);
    onClose();
  };

  return (
    <Modal transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Edit Task</Text>
            <TouchableOpacity onPress={onClose}>
              <Icon name="x" size={20} color="#FFA500" />
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={setTitle}
            placeholder="Enter title..."
            placeholderTextColor="#666"
          />

          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.textArea}
            value={body}
            onChangeText={setBody}
            placeholder="Enter description..."
            placeholderTextColor="#666"
            multiline
          />

          <View style={styles.actions}>
            <TouchableOpacity onPress={onClose} style={styles.cancelButton}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onSave} style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Save</Text>
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
    padding: 20,
    borderColor: '#FFA500',
    borderWidth: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  headerText: {
    color: '#FFA500',
    fontSize: 18,
    fontWeight: 'bold',
  },
  label: {
    color: '#FFA500',
    marginBottom: 6,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#FFA500',
    borderRadius: 8,
    padding: 10,
    color: '#fff',
    marginBottom: 16,
    backgroundColor: '#222',
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#FFA500',
    borderRadius: 8,
    padding: 10,
    color: '#fff',
    height: 120,
    textAlignVertical: 'top',
    marginBottom: 20,
    backgroundColor: '#222',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
  },
  cancelButton: {
    borderColor: '#FFA500',
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: '#FFA500',
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFA500',
    fontWeight: 'bold',
  },
  saveButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});
