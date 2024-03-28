import { View, StyleSheet } from 'react-native';
import { PasswordResult, PasswordSettings } from './components';
import { useState } from 'react';

const PasswordInfo = () => {
  const [password, setPassword] = useState<string>("");

  return (
    <View style={styles.container}>
      <PasswordResult password={password}/>
      <PasswordSettings onChangePassword={setPassword}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'center' },
});

export default PasswordInfo;
