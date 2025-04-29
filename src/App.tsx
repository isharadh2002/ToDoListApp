import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  BackHandler,
  Animated,
  Dimensions,
} from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import TaskScreen from './screens/TasksScreen';

const {width} = Dimensions.get('window');

export default function App() {
  // State to control which screen is shown
  const [showTaskScreen, setShowTaskScreen] = useState(false);

  // Animation value for sliding between screens
  const slideAnim = useRef(new Animated.Value(0)).current;

  // Handle screen transitions with animation
  useEffect(() => {
    if (showTaskScreen) {
      // Slide to the task screen (slide left)
      Animated.timing(slideAnim, {
        toValue: -width,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      // Slide back to welcome screen (slide right)
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [showTaskScreen, slideAnim]);

  useEffect(() => {
    // Handle back button press
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (showTaskScreen) {
          // If on task screen, go back to welcome screen
          setShowTaskScreen(false);
          return true; // Prevent default back behavior
        }
        return false; // Let default back behavior happen (exit app)
      },
    );

    // Clean up the event listener
    return () => backHandler.remove();
  }, [showTaskScreen]);

  const handleGetStarted = () => {
    setShowTaskScreen(true);
  };

  // Both screens are always rendered, but positioned absolutely
  // Animation slides between them
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.screenContainer,
          {
            transform: [{translateX: slideAnim}],
          },
        ]}>
        <WelcomeScreen onGetStarted={handleGetStarted} />
      </Animated.View>

      <Animated.View
        style={[
          styles.screenContainer,
          {
            transform: [{translateX: Animated.add(slideAnim, width)}],
          },
        ]}>
        <TaskScreen />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  screenContainer: {
    ...StyleSheet.absoluteFillObject, // Position screens absolutely to enable animation
  },
});
