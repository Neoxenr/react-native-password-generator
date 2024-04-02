import { FC, useCallback } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as Clipboard from 'expo-clipboard';

type PasswordResultProps = {
  password: string;
};

export const PasswordResult: FC<PasswordResultProps> = ({ password }) => {
  const handleClick = useCallback(() => {
    Clipboard.setStringAsync(password);
  }, [password]);

  return (
    <View style={styles.container}>
      {password ? (
        <>
          <Text style={styles.result} selectable>
            {password}
          </Text>
          <FontAwesome.Button style={styles.copyButton} name="copy" onPress={handleClick} />
        </>
      ) : (
        <Text style={styles.resultPlaceholder}>
          Generated password
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#242323',
  },
  copyButton: {
    backgroundColor: "#4096ff",
    paddingRight: 0
  },
  result: {
    fontSize: 16,
    color: 'white',
  },
  resultPlaceholder: {
    fontSize: 16,
    opacity: 0.2,
    color: 'gray',
  },
});
