import { Text, View, StyleSheet } from 'react-native';

export const PasswordSettings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Characters length</Text>
        <Text>10</Text>
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
  },
  header: {
    flexDirection: 'row',
    columnGap: 16,
  },
});
