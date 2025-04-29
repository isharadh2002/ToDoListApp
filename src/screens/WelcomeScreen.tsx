import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface Props {
  onGetStarted: () => void;
}

export default function WelcomeScreen({onGetStarted}: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Icon name="check-square" size={70} color="#FFA500" />
        </View>

        <Text style={styles.title}>TaskMaster</Text>
        <Text style={styles.subtitle}>Organize your tasks efficiently</Text>

        <View style={styles.features}>
          <View style={styles.featureItem}>
            <Icon name="check-circle" size={24} color="#FFA500" />
            <Text style={styles.featureText}>Create and manage tasks</Text>
          </View>
          <View style={styles.featureItem}>
            <Icon name="check-circle" size={24} color="#FFA500" />
            <Text style={styles.featureText}>Mark tasks as complete</Text>
          </View>
          <View style={styles.featureItem}>
            <Icon name="check-circle" size={24} color="#FFA500" />
            <Text style={styles.featureText}>Edit and delete tasks</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={onGetStarted}>
          <Text style={styles.buttonText}>Get Started</Text>
          <Icon name="arrow-right" size={20} color="#000" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255, 165, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    borderWidth: 1,
    borderColor: 'rgba(255, 165, 0, 0.3)',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFA500',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#CCC',
    marginBottom: 40,
    textAlign: 'center',
  },
  features: {
    width: '100%',
    marginBottom: 40,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  featureText: {
    color: '#FFF',
    fontSize: 16,
    marginLeft: 12,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#FFA500',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    shadowColor: '#FFA500',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
});
