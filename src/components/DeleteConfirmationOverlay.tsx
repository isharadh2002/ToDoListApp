// src/components/DeleteConfirmationOverlay.tsx

import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface DeleteConfirmationProps {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const DeleteConfirmationOverlay: React.FC<DeleteConfirmationProps> = ({
  visible,
  onConfirm,
  onCancel,
}) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
      onRequestClose={onCancel}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.header}>
            <Icon name="alert-triangle" size={24} color="#FFA500" />
            <TouchableOpacity style={styles.closeButton} onPress={onCancel}>
              <Icon name="x" size={20} color="#FFA500" />
            </TouchableOpacity>
          </View>

          <Text style={styles.modalTitle}>Delete Task</Text>
          <Text style={styles.modalText}>
            Are you sure you want to delete this task? This action cannot be
            undone.
          </Text>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton} onPress={onConfirm}>
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

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
  modalText: {
    color: '#CCC',
    fontSize: 14,
    marginVertical: 16,
    lineHeight: 20,
    marginHorizontal: 16,
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
    borderColor: '#555',
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    minWidth: 90,
  },
  deleteButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 82, 82, 0.8)',
    borderColor: 'rgba(255, 82, 82, 1)',
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    minWidth: 90,
  },
  cancelButtonText: {
    color: '#CCC',
    fontWeight: '500',
  },
  deleteButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default DeleteConfirmationOverlay;
