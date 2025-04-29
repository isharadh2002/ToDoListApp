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
    <Modal transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.header}>
            <Icon name="edit-2" size={24} color="#FFA500" />
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Icon name="x" size={20} color="#FFA500" />
            </TouchableOpacity>
          </View>

          <Text style={styles.modalTitle}>Edit Task</Text>

          <View style={styles.content}>
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
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={onClose} style={styles.cancelButton}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  modalView: {
    width: '90%',
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    borderColor: '#FFA500',
    borderWidth: 1,
    padding: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 165, 0, 0.1)',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 165, 0, 0.3)',
  },
  closeButton: {
    padding: 4,
  },
  modalTitle: {
    color: '#FFA500',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginHorizontal: 16,
  },
  content: {
    padding: 16,
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
    marginBottom: 12,
    backgroundColor: '#222',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#333',
    gap: 12,
  },
  cancelButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderColor: '#A35709',
    backgroundColor: '#FF8303',
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    minWidth: 90,
  },
  saveButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#FF8303',
    borderColor: '#A35709',
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    minWidth: 90,
  },
  cancelButtonText: {
    color: '#F0E3CA',
    fontWeight: '500',
  },
  saveButtonText: {
    color: '#F0E3CA',
    fontWeight: 'bold',
  },
});
