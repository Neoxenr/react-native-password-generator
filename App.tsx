import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { StylesVariables } from './const/variables';
import PasswordInfo from './components';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Password generator</Text>
      <PasswordInfo />
      <StatusBar style={StylesVariables.STATUS_BAR} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StylesVariables.MAIN_BODY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: 'gray'
  },
});
