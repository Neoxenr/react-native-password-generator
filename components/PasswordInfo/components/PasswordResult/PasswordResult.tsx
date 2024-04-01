import { FC } from 'react';
import { Text, View, StyleSheet } from 'react-native';

type PasswordResultProps = {
  password: string;
};

export const PasswordResult: FC<PasswordResultProps> = ({ password }) => {
  return (
    <View style={styles.container}>
      {password ? (
        <Text style={styles.result}>{password}</Text>
      ) : (
        <Text style={styles.resultPlaceholder}>
          Generate password please...
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#242323',
  },
  result: {
    fontSize: 16,
    color: 'white',
  },
  resultPlaceholder: {
    fontSize: 16,
    color: 'yellow',
    fontStyle: 'italic'
  },
});
