import { View, StyleSheet } from 'react-native';
import { PasswordResult, PasswordSettings } from './components';

const PasswordInfo = () => {
  return (
    <View style={styles.container}>
      <PasswordResult />
      <PasswordSettings />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'center' },
});

export default PasswordInfo;
