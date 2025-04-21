// src/components/TaskItem.tsx

import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Task, useTaskStore} from '../store/TaskStore';
import EditModal from './EditModal';

interface Props {
  task: Task;
  isOpen: boolean;
  onToggle: (id: string) => void;
}

export default function TaskItem({task, isOpen, onToggle}: Props) {
  const removeTask = useTaskStore(state => state.removeTask);
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [showEditModal, setShowEditModal] = React.useState(false);
  const truncated =
    task.body.length > 30 ? task.body.slice(0, 30) + '...' : task.body;

  return (
    <>
      <TouchableOpacity activeOpacity={0.8} onPress={() => onToggle(task.id)}>
        <View style={styles.container}>
          <View style={styles.textBlock}>
            <Text style={styles.title}>{task.title}</Text>
            <Text style={styles.body}>{isOpen ? task.body : truncated}</Text>
            {isOpen && (
              <View style={styles.actions}>
                <TouchableOpacity
                  onPress={() => {
                    /* Share logic */
                  }}>
                  <Icon name="share-2" size={18} color="#FFA500" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setShowEditModal(true)}>
                  <Icon name="edit-2" size={18} color="#FFA500" />
                </TouchableOpacity>
              </View>
            )}
          </View>
          <TouchableOpacity onPress={() => setShowDeleteModal(true)}>
            <Icon name="x" size={20} color="#FFA500" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      {showDeleteModal && (
        <View style={styles.modal}>
          <Text style={styles.modalText}>Delete this task?</Text>
          <View style={styles.modalButtons}>
            <TouchableOpacity
              onPress={() => {
                removeTask(task.id);
                setShowDeleteModal(false);
              }}
              style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setShowDeleteModal(false)}
              style={styles.modalButton}>
              <Text style={styles.modalButtonText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {showEditModal && (
        <EditModal task={task} onClose={() => setShowEditModal(false)} />
      )}
    </>
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
  actions: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 10,
  },
  modal: {
    position: 'absolute',
    top: '35%',
    left: '10%',
    right: '10%',
    backgroundColor: '#111',
    borderRadius: 12,
    borderColor: '#FFA500',
    borderWidth: 1,
    padding: 20,
    zIndex: 100,
  },
  modalText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  modalButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderColor: '#FFA500',
    borderWidth: 1,
    borderRadius: 6,
  },
  modalButtonText: {
    color: '#FFA500',
    fontWeight: 'bold',
  },
});
