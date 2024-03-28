import { FC } from 'react';
import { Text, View, StyleSheet } from 'react-native';

type PasswordResultProps = {
  password: string;
}

export const PasswordResult: FC<PasswordResultProps> = ({password}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.result}>{password}</Text>
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
