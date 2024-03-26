import { Text, View, StyleSheet } from 'react-native';

export const PasswordResult = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.result}>123zxc</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  result: {
    color: 'white',
  },
});
