import { StatusBar } from 'expo-status-bar';
import { View ,SafeAreaView} from 'react-native';
import styles from "./style"
import uuid from "react-native-uuid"
import Search from './src/components/search.js';
import Buttonn from './src/components/Button.js';
import Root from './src/navigation/root.js';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  return (
    <NavigationContainer>
      <Root></Root>
    </NavigationContainer>
  );
}
